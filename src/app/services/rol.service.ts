import { Injectable } from '@angular/core';
import { Rol } from '../models/rol';
import { HttpClient } from '@angular/common/http';
import { Global } from './global';

const URL_SERVER = Global.urlRoles;

@Injectable()
export class RolService {
  public rolSeleccionado: Rol;
  rol: Rol[];
  constructor(private http: HttpClient) {
    this.obtenerRoles();
  }

  obtenerRoles() {
    return this.http.get(`${URL_SERVER}/roles/get_roles`);
  }

}
