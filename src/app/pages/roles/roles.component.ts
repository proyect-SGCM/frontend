import { Component, OnInit } from '@angular/core';
import { RolesService } from '../../services/roles.service';
import { Rol } from '../../models/rol';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
})
export class RolesComponent implements OnInit {
  roles: Rol[];

  constructor(public rolService: RolesService) {
  }

  ngOnInit() {
    this.listarRoles();
  }

  listarRoles() {
    this.rolService.obtenerRoles()
    .subscribe( resp => this.roles = resp );
  }

  // tslint:disable-next-line: member-ordering
  registerRol: Rol = {
    nombre: '',
    descripcion: ''
  };

  async registrarRol(form: NgForm){
    if (form.invalid) { return; }
    const valido = await this.rolService.registrarRol( this.registerRol );
    if ( valido ) {
      alert('Correcto');
      this.listarRoles();
      form.reset();
    } else {
      alert('Error al registrar');
    }
  }

  // registrarRol(form: NgForm) {

  //   console.log(form.value);
  //   // if (form.value.id) {

  //   // } else {
  //   //   this.rolService.registrarRol(form.value);
  //   //   form.reset();
  //   //   this.listarRoles();
  //   // }
  // }

  // eliminarRol(idRol: string) {
  //   if (confirm('¿Estás seguro de eliminar este rol?')) {
  //     this.roles.splice(Number(idRol), 1);
  //     this.listarRoles();
  //   }
  //   // this.listarRoles();
  // }

}
