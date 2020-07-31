import { Injectable } from '@angular/core';
import { Especialidad } from '../models/especialidad';
import { HttpClient } from '@angular/common/http';
import { Global } from './global';

const URL_SERVER = Global.url;

@Injectable()
export class EspecialidadService {
  especialidades: Especialidad[] = [];
  especialidadSeleccionada: Especialidad;

  constructor(private http: HttpClient) {
    this.especialidadSeleccionada = new Especialidad(0, '', '');
  }

  obtenerEspecialidades() {
    return this.http.get(`${URL_SERVER}/gst_especialidad/listar_especialidades`);
  }

  guardarEspecialidad(codigo: string, nombre: string) {
    const especialidad = new Especialidad(null, codigo, nombre);

    return this.http.post(`${URL_SERVER}/gst_especialidad/crear_especialidad`, especialidad);
  }

  actualizarEspecialidad(id_especialidad: number, codigo: string, nombre: string) {
    const especialidad = new Especialidad(id_especialidad, codigo, nombre);

    return this.http.put(`${URL_SERVER}/gst_especialidad/especialidad/${id_especialidad}`, especialidad);
  }

  eliminarEspecialidad(id_especialidad: number) {
    return this.http.delete(`${URL_SERVER}/gst_especialidad/especialidad/${id_especialidad}`);
  }
}
