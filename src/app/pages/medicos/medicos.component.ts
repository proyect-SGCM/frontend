import { Component, OnInit } from '@angular/core';
import { MedicoService } from '../../services/medico.service';
import { Medico } from '../../models/medico';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html'
})
export class MedicosComponent implements OnInit {
  opcionBoton = 'Registrar';

  constructor(public medicoService: MedicoService) { }

  ngOnInit() {
    this.listarMedicos();
  }

  listarMedicos() {
    this.medicoService.obtenerMedicos().subscribe((res) => {
      console.log(res);
      this.medicoService.medicos = res as Medico[];
    }, error => console.log(<any>error));
  }

  guardarMedico(formMedico: NgForm) {
    if (formMedico.value.id_medico) {
      // tslint:disable-next-line: max-line-length
      this.medicoService.actualizarMedico(formMedico.value.id_medico, formMedico.value.nombre, formMedico.value.apellido,  formMedico.value.nro_consultorio, formMedico.value.username, formMedico.value.password ).subscribe((res) => {
        this.opcionBoton = 'Registrar';
        this.listarMedicos();
        formMedico.reset();
      }, error => console.log(<any>error));
    } else {
      // tslint:disable-next-line: max-line-length
      this.medicoService.guardarMedico(formMedico.value.nombre, formMedico.value.apellido, formMedico.value.nro_consultorio,  formMedico.value.username,  formMedico.value.password  ).subscribe((res) => {
        this.listarMedicos();
        formMedico.reset();
      }, error => console.log(<any>error));
    }
  }

  editarMedico(medico: Medico) {
    this.opcionBoton = 'Actualizar';
    this.medicoService.medicoSeleccionado = medico;
  }

  eliminarMedico(idMedico: string) {
    if (confirm('¿Estás seguro de eliminar este médico?')) {
      // tslint:disable-next-line: max-line-length
      this.medicoService.eliminarMedico(Number(idMedico)).subscribe(res => this.listarMedicos(), error => console.log(<any>error));
    }
  }
}
