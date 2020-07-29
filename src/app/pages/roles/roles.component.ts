import { Component, OnInit } from '@angular/core';
import { RolService } from '../../services/rol.service';
import { Rol } from '../../models/rol';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
})
export class RolesComponent implements OnInit {
  opcionBoton = 'Registrar';

  constructor(public rolService: RolService) { }

  ngOnInit() {
    this.listarRoles();
  }

  listarRoles() {
    this.rolService.obtenerRoles().subscribe((res) => {
      this.rolService.roles = res as Rol[];
    }, error => console.log(<any>error))
  }

  guardarRol(formRol: NgForm) {
    this.rolService.guardarRol(formRol.value.nombre, formRol.value.descripcion).subscribe((res) => {
      this.listarRoles();
      formRol.reset();
    }, error => console.log(<any>error));
  }

  eliminarRol(idRol: string) {
    if (confirm('¿Estás seguro de eliminar este rol?')) {
      this.rolService.eliminarRol(Number(idRol)).subscribe(res => this.listarRoles(), error => console.log(<any>error));
    }
  }

}
