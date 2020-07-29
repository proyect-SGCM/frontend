import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rol } from '../models/rol';

const URL_SERVER = 'http://localhost:8082/roles';

@Injectable()
export class RolService {
  public roles: Rol[] = [];
  public rolSeleccionado: Rol;

  constructor(private http: HttpClient) {
    this.rolSeleccionado = new Rol(0, '', '');
  }

  obtenerRoles() {
    return this.http.get(`${URL_SERVER}/get_roles`);
  }

  guardarRol(nombre: string, descripcion: string) {
    const rol = new Rol(null, nombre, descripcion);

    return this.http.post(`${URL_SERVER}/create`, rol);
  }

  eliminarRol(id_rol: number) {
    return this.http.delete(`${URL_SERVER}/delete/${id_rol}`);
  }
}
