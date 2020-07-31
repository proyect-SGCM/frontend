import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../services/paciente.service';
import { Paciente } from '../../models/paciente';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html'
})
export class PacientesComponent implements OnInit {
  opcionBoton = 'Registrar';

  constructor(public pacienteService: PacienteService) { }

  ngOnInit() {
    this.listarPacientes();
  }

  listarPacientes() {
    this.pacienteService.obtenerPacientes().subscribe((res) => {
      console.log(res);
      this.pacienteService.pacientes = res as Paciente[];
    }, error => console.log(<any>error));
  }

  guardarPaciente(formPaciente: NgForm) {

  }

  editarPaciente(paciente: Paciente) {}

  eliminarPaciente(idPaciente: string) {
    if (confirm('¿Estás seguro de eliminar este médico?')) {
      // tslint:disable-next-line: max-line-length
      this.pacienteService.eliminarPaciente(Number(idPaciente)).subscribe(res => this.listarPacientes(), error => console.log(<any>error));
    }
  }
}
