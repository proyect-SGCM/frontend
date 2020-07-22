import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rol } from '../models/rol';

@Injectable()

export class RolesService {

  readonly URL = 'http://localhost:8080/roles';
  constructor( private http: HttpClient ) { }

  obtenerRoles(){
    return this.http.get<Rol[]>(this.URL + '/getroles');
  }

  registrarRol(rol: Rol) {
    return new Promise( (resolve, rejects) => {
      this.http.post(this.URL + '/create', rol )
      .subscribe( resp => {
        resolve(true);
      });
    });
  }

}
