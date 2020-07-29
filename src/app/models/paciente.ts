import { Rol } from './rol';

export class Paciente {
  constructor(
    id_pacientes: number, id_rol: Rol, nombre: string, apellido: string, fecha_nacimiento: string, sexo: string,
    estado_civil: string, ocupacion: string, direccion: string, telefono: number, tipo_sangre: string, username: string, password: string
  ) {
    this.id_pacientes = id_pacientes;
    this.id_rol = id_rol;
    this.nombre = nombre;
    this.apellido = apellido;
    this.fecha_nacimiento = fecha_nacimiento;
    this.sexo = sexo;
    this.estado_civil = estado_civil;
    this.ocupacion = ocupacion;
    this.direccion = direccion;
    this.telefono = telefono;
    this.tipo_sangre = tipo_sangre;
    this.username = username;
    this.password = password;
  }

  id_pacientes: number;
  id_rol: Rol;
  nombre: string;
  apellido: string;
  fecha_nacimiento: string;
  sexo: string;
  estado_civil: string;
  ocupacion: string;
  direccion: string;
  telefono: number;
  tipo_sangre: string;
  username: string;
  password: string;
}
