import { Injectable } from '@angular/core';
import { Rol } from '../models/rol';

@Injectable()
export class RolService {
  public rolSeleccionado: Rol;

  roles: Rol[] = [
    { idRol: 0, nombre: 'Médico', descripcion: 'Rol de médico' },
    { idRol: 1, nombre: 'Secretaria', descripcion: 'Rol de secretaria' },
    { idRol: 2, nombre: 'Paciente', descripcion: 'Rol de paciente' },
    { idRol: 3, nombre: 'Cliente', descripcion: 'Rol de cliente' },
  ];

  constructor() {
    this.rolSeleccionado = new Rol();
  }

  obtenerRoles(): Rol[] {
    return this.roles.slice();
  }

  guardarRol(rol: Rol) {
    return this.roles.push(rol);
  }

  eliminarRol(idRol: number) {
    return this.roles.splice(idRol, 1);
  }
}
