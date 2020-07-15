import { Component, OnInit } from '@angular/core';
import { RolService } from '../../services/rol.service';
import { Rol } from '../../models/rol';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
})
export class RolesComponent implements OnInit {
  roles: Rol[];

  constructor(public rolService: RolService) { }

  ngOnInit() {
    this.listarRoles();
  }

  listarRoles() {
    this.roles = this.rolService.obtenerRoles();
    console.log(this.roles);
  }

  guardarRol(form: NgForm) {
    if (form.value.id) {

    } else {
      this.rolService.guardarRol(form.value);
      form.reset();
      this.listarRoles();
    }
  }

  eliminarRol(idRol: string) {
    if (confirm('¿Estás seguro de eliminar este rol?')) {
      this.roles.splice(Number(idRol), 1);
      this.listarRoles();
    }
    // this.listarRoles();
  }

}
