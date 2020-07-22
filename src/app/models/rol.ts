export class Rol {
  constructor ( idRol, nombre, descripcion) {
    this.idRol = idRol;
    this.nombre = nombre;
    this.descripcion = descripcion;
  }
  idRol?: number;
  nombre: string;
  descripcion: string;
}
