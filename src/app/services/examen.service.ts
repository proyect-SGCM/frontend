import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Global } from './global';
import { Examen } from '../models/examen';

const URL_SERVER = 'http://localhost:8082';

@Injectable()
export class ExamenService {
  examenes: Examen[] = [];
  examenSeleccionado: Examen;

  constructor(private http: HttpClient) {
    this.examenSeleccionado = new Examen(0, '', '', '', '');
  }

  obtenerExamenes() {
    return this.http.get(`${URL_SERVER}/gst_examenes/listar_examen`);
  }

  guardarExamen(codigo_examen: string, nombre: string, fecha: string, resultado: string) {
    const examen = new Examen(null, codigo_examen, nombre, fecha, resultado);

    return this.http.post(`${URL_SERVER}/gst_examenes/crear_examen`, examen);
  }

  actualizarExamen(id_examen: number, codigo_examen: string, nombre: string, fecha: string, resultado: string) {
    const examen = new Examen(id_examen, codigo_examen, nombre, fecha, resultado);

    return this.http.put(`${URL_SERVER}/gst_examenes/examen/${id_examen}`, examen);
  }

  eliminarExamen(id_examen: number) {
    return this.http.delete(`${URL_SERVER}/gst_examenes/examen/${id_examen}`);
  }
}
