import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global } from './global';
import { Medico } from '../models/medico';
import { Rol } from '../models/rol';

const URL_SERVER = Global.url;

@Injectable()
export class MedicoService {
  medicos: Medico[] = [];
  medicoSeleccionado: Medico;
  rol: Rol;
  constructor(private http: HttpClient) {
    this.rol = new Rol(2, 'MEDICO', 'ROL DE MEDICO');
    this.medicoSeleccionado = new Medico(0, '', '', '', '', 0, 2);
  }
  
  obtenerMedicos() {
    return this.http.get(`${URL_SERVER}/gst_medico/listar_medico`);
  }

  guardarMedico(nombre: string, apellido: string, nro_consultorio: number, username: string, password: string) {
    const id_rol = {
      id_rol: 2
    }
    const medico = new Medico(null, nombre, apellido, username, password, nro_consultorio, id_rol);
    console.log(medico)
    return this.http.post(`${URL_SERVER}/gst_medico/crear_medico`, medico);
  }

  actualizarMedico(id_medico: number, nombre: string, apellido: string, nro_consultorio: number, username: string, password: string) {
    const id_rol = {
      id_rol: 2
    }
    const medico = new Medico(id_medico, nombre, apellido, username, password, nro_consultorio, id_rol);
    console.log(medico)
    return this.http.put(`${URL_SERVER}/gst_medico/medico/${id_medico}`, medico);
  }

  eliminarMedico(id_medico: number) {
    console.log(id_medico)
    return this.http.delete(`${URL_SERVER}/gst_medico/medico/${id_medico}`);
  }
}
