import { Injectable } from '@angular/core';
import { Especialidad } from '../models/especialidad';
import { HttpClient } from '@angular/common/http';
import { Global } from './global';
import { Medico } from '../models/medico';

const URL_SERVER = Global.url;

@Injectable()
export class MedicoService {
  medicos: Medico[] = [];
  medicoSeleccionado: Medico;

  constructor(private http: HttpClient) {
    this.medicoSeleccionado = new Medico(0, '', '', 0);
  }

  obtenerMedicos() {
    return this.http.get(`${URL_SERVER}/gst_medico/listar_medico`);
  }

  guardarMedico(nombre: string, apellido: string, nro_consultorio: number) {
    const medico = new Medico(null, nombre, apellido, nro_consultorio);

    return this.http.post(`${URL_SERVER}/gst_medico/crear_medico`, medico);
  }

  actualizarMedico(id_medico: number, nombre: string, apellido: string, nro_consultorio: number) {
    const medico = new Medico(id_medico, nombre, apellido, nro_consultorio);

    return this.http.put(`${URL_SERVER}/gst_medico/medico/${id_medico}`, medico);
  }

  eliminarMedico(id_medico: number) {
    return this.http.delete(`${URL_SERVER}/gst_medico/medico/${id_medico}`);
  }
}
