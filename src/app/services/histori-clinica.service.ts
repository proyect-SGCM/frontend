import { Injectable } from '@angular/core';
import { Global } from './global';
import { HttpClient } from '@angular/common/http';
import { HistoriaClinica } from '../models/historiaClinica';

const URL_SERVER = Global.url;

@Injectable({
  providedIn: 'root'
})
export class HistoriClinicaService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  obtenerHistoriClinica() {
    return this.http.get<HistoriaClinica[]>(`${URL_SERVER}/gst_historia_clinica/listar_historia_clinica`);
  }

  // tslint:disable-next-line: typedef
  registro ( historia: HistoriaClinica ){
    return new Promise( resolve => {
        this.http.post(`${URL_SERVER}/gst_historia_clinica/crear_historia_clinica`, historia)
        .subscribe( resp => {
          resolve(resp);
        });
    });
  }

}
