import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/persona';
import { NgForm } from '@angular/forms';
import { UsuariosService } from '../services/usuarios.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService: UsuariosService
              ) { }

  ngOnInit() {
  }

  // tslint:disable-next-line: member-ordering
  registerUser: Usuario = {
    nombres:  '',
    apellidos: '',
    correo: '',
    username: '',
    password: '',
  };

  async registro(fRegistro: NgForm) {
    if (fRegistro.invalid) { return; }
    const valido = await this.registerService.registro( this.registerUser );
    if ( valido ) {
      alert('Registrado Correctamente');
    } else {
      alert('No se pudo registrar');
    }
  }
}