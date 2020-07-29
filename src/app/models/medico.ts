export class Medico {
  // tslint:disable-next-line: max-line-length
  constructor(id_medico: number, nombre: string, apellido: string, username: string, password: string, nro_consultorio: number, id_rol: number) {
    this.id_medico = id_medico;
    this.nombre = nombre;
    this.apellido = apellido;
    this.username = username;
    this.password = password;
    this.nro_consultorio = nro_consultorio;
    this.id_rol = id_rol;
  }

  id_medico: number;
  nombre: string;
  apellido: string;
  username: string;
  password: string;
  nro_consultorio: number;
  id_rol: number;
}

/* private long id_medico;
	private String nombre;
	private String apellido;
	private String username;
	private String password;
	private int nro_consultorio;
	private int id_rol; */
