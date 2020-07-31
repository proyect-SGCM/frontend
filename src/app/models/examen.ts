export class Examen {
  constructor(id_examen: number, codigo_examen: string, nombre: string, fecha: string, resultado: string) {
    this.id_examen = id_examen;
    this.codigo_examen = codigo_examen;
    this.nombre = nombre;
    this.fecha = fecha;
    this.resultado = resultado;
  }

  id_examen?: number;
  codigo_examen: string;
  nombre: string;
  fecha: string;
  resultado: string;
}
