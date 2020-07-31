import { Component, OnInit } from '@angular/core';
import { ExamenService } from '../../services/examen.service';
import { Examen } from '../../models/examen';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-examenes',
  templateUrl: './examenes.component.html'
})
export class ExamenesComponent implements OnInit {
  opcionBoton = 'Registrar';

  constructor(public examenService: ExamenService) { }

  ngOnInit() {
    this.listarExamenes();
  }

  listarExamenes() {
    this.examenService.obtenerExamenes().subscribe((res) => {
      this.examenService.examenes = res as Examen[];
    }, error => console.log(<any>error));
  }

  guardarExamen(formExamen: NgForm) {
    if (formExamen.value.id_examen) {
      // tslint:disable-next-line: max-line-length
      this.examenService.actualizarExamen(formExamen.value.id_examen, formExamen.value.codigo_examen, formExamen.value.nombre, formExamen.value.fecha, formExamen.value.codigo_resultado).subscribe((res) => {
        this.opcionBoton = 'Registrar';
        this.listarExamenes();
        formExamen.reset();
      }, error => console.log(<any>error));
    } else {
      // tslint:disable-next-line: max-line-length
      this.examenService.guardarExamen(formExamen.value.codigo_examen, formExamen.value.nombre, formExamen.value.fecha, formExamen.value.codigo_resultado).subscribe((res) => {
        this.listarExamenes();
        formExamen.reset();
      }, error => console.log(<any>error));
    }
  }

  editarEamen(examen: Examen) {
    this.opcionBoton = 'Actualizar';
    this.examenService.examenSeleccionado = examen;
  }

  eliminarExamen(idExamen: string) {
    if (confirm('¿Estás seguro de eliminar este exámen?')) {
      // tslint:disable-next-line: max-line-length
      this.examenService.eliminarExamen(Number(idExamen)).subscribe(res => this.listarExamenes(), error => console.log(<any>error));
    }
  }
}
