export class Medico {
  constructor(id_medico: number, nombre: string, apellido: string, nro_consultorio: number) {
    this.id_medico = id_medico;
    this.nombre = nombre;
    this.apellido = apellido;
    this.nro_consultorio = nro_consultorio;
  }

  id_medico: number;
  nombre: string;
  apellido: string;
  nro_consultorio: number;
}
