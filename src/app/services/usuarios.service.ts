import { Injectable } from '@angular/core';
import { Usuario } from '../models/persona';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsuariosService {

  constructor(private http: HttpClient) { }

  readonly URL = 'http://localhost:8083/usuarios/create';

  registro( usuario: Usuario ) {
    return new Promise( resolve => {
        this.http.post(this.URL, usuario  )
        .subscribe( resp => {
          if ( resp['access'] ) {
            resolve(true);
          } else {
            resolve(false);
          }
        });
    });
  }
}
