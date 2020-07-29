export class Rol {
  constructor (idRol = 0, nombre = '', descripcion = '') {
    this.idRol = idRol;
    this.nombre = nombre;
    this.descripcion = descripcion;
  }

  idRol: number;
  nombre: string;
  descripcion: string;
}
