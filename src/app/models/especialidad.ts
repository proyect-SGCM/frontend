export class Especialidad {
  constructor(id_especialidad: number, codigo: string, nombre: string) {
    this.id_especialidad = id_especialidad;
    this.codigo = codigo;
    this.nombre = nombre;
  }

  id_especialidad?: number;
  codigo: string;
  nombre: string;
}
