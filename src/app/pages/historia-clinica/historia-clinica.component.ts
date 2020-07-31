import { Component, OnInit } from '@angular/core';
import { HistoriaClinica } from '../../models/historiaClinica';
import { HistoriClinicaService } from '../../services/histori-clinica.service';
import { NgForm } from '@angular/forms';
import { PacienteService } from '../../services/paciente.service';
import { Paciente } from '../../models/paciente';

@Component({
  selector: 'app-historia-clinica',
  templateUrl: './historia-clinica.component.html'
})
export class HistoriaClinicaComponent implements OnInit {

  hisClinica: HistoriaClinica [] = [];
  paciente: Paciente [] = [];

  modeloHistoria = {
    codigo_historiaClinica: '',
    motivo_consulta: '',
    enfermedad_actual: '',
    estatura: 0,
    peso: 0,
    presion: '',
    fecha: '',
    id_paciente: {
      id_pacientes: 2
    }
  };

  constructor( public historiaClinicaService: HistoriClinicaService,
               public pacienteService: PacienteService ) {}

  ngOnInit(): void {
    this.obtenerHistorias();
    this.listarPacientes();
  }

  // tslint:disable-next-line: typedef
  obtenerHistorias() {
    this.historiaClinicaService.obtenerHistoriClinica()
    .subscribe( resp => this.hisClinica = resp);
  }

  // tslint:disable-next-line: typedef
  listarPacientes() {
    this.pacienteService.obtenerPacientes()
    //.subscribe( resp => this.paciente = resp);
  }

  // tslint:disable-next-line: typedef
  async registro(fRegistro: NgForm){
    console.log( fRegistro.value );
    if (fRegistro.invalid){ return; }
    const valido = await this.historiaClinicaService.registro( this.modeloHistoria );
    if ( valido === this.modeloHistoria ) {
        this.obtenerHistorias();
    } else {
      alert('No se pudo registrar');
    }
  }
}
