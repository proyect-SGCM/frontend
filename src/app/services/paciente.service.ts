import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paciente } from '../models/paciente';
import { Rol } from '../models/rol';
import { Global } from './global';

const URL_SERVER = Global.url;

@Injectable()
export class PacienteService {
  pacientes: Paciente[] = [];
  pacienteSeleccionado: Paciente;
  rol: Rol;

  constructor(private http: HttpClient) {
    this.rol = new Rol(3, 'PACIENTE', 'ROL DE PACIENTE');
    this.pacienteSeleccionado = new Paciente(0, this.rol, '', '', '', '', '', '', '', 0, '', '', '');
  }

  obtenerPacientes() {
    return this.http.get(`${URL_SERVER}/gst_paciente/listar_paciente`);
  }

  guardarPaciente(nombre: string, apellido: string, fecha_nacimiento: string, sexo: string,
    estado_civil: string, ocupacion: string, direccion: string, telefono: number, tipo_sangre: string, username: string, password: string) {
    // tslint:disable-next-line: max-line-length
    const paciente = new Paciente(null, this.rol, nombre, apellido, fecha_nacimiento, sexo, estado_civil, ocupacion, direccion, telefono, tipo_sangre, username, password);

    return this.http.post(`${URL_SERVER}/crear_paciente"`, paciente);
  }

  actualizarPaciente(id_paciente: number, nombre: string, apellido: string, fecha_nacimiento: string, sexo: string,
    estado_civil: string, ocupacion: string, direccion: string, telefono: number, tipo_sangre: string, username: string, password: string) {
    // tslint:disable-next-line: max-line-length
    const paciente = new Paciente(id_paciente, this.rol, nombre, apellido, fecha_nacimiento, sexo, estado_civil, ocupacion, direccion, telefono, tipo_sangre, username, password);

    return this.http.put(`${URL_SERVER}/paciente/${id_paciente}`, paciente);
  }

  eliminarPaciente(id_paciente: number) {
    return this.http.delete(`${URL_SERVER}/paciente/${id_paciente}`);
  }
}
