import { Component, OnInit } from '@angular/core';
import { EspecialidadService } from '../../services/especialidad.service';
import { Especialidad } from '../../models/especialidad';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-especialidades',
  templateUrl: './especialidades.component.html'
})
export class EspecialidadesComponent implements OnInit {
  opcionBoton = 'Registrar';

  constructor(public especialidadService: EspecialidadService) { }

  ngOnInit() {
    this.listarEspecialidades();
  }

  listarEspecialidades() {
    this.especialidadService.obtenerEspecialidades().subscribe((res) => {
      this.especialidadService.especialidades = res as Especialidad[];
    }, error => console.log(<any>error));
  }

  guardarEspecialidad(formEspecialidad: NgForm) {
    if (formEspecialidad.value.id_especialidad) {
      // tslint:disable-next-line: max-line-length
      this.especialidadService.actualizarEspecialidad(formEspecialidad.value.id_especialidad, formEspecialidad.value.codigo, formEspecialidad.value.nombre).subscribe((res) => {
        this.opcionBoton = 'Registrar';
        this.listarEspecialidades();
        formEspecialidad.reset();
      }, error => console.log(<any>error));
    } else {
      this.especialidadService.guardarEspecialidad(formEspecialidad.value.codigo, formEspecialidad.value.nombre).subscribe((res) => {
        this.listarEspecialidades();
        formEspecialidad.reset();
      }, error => console.log(<any>error));
    }
  }

  editarEspecialidad(especialidad: Especialidad) {
    this.opcionBoton = 'Actualizar';
    this.especialidadService.especialidadSeleccionada = especialidad;
  }

  eliminarEspecialidad(idEspecialidad: string) {
    if (confirm('¿Estás seguro de eliminar esta especialidad?')) {
      // tslint:disable-next-line: max-line-length
      this.especialidadService.eliminarEspecialidad(Number(idEspecialidad)).subscribe(res => this.listarEspecialidades(), error => console.log(<any>error));
    }
  }

}
