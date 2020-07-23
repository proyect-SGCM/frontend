import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rol } from '../models/rol';

@Injectable()

export class RolesService {

  readonly URL = 'http://3.18.214.105:8081/roles';
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
