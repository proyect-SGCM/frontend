export interface HistoriaClinica {
  id_historia_clinica?: number;
  codigo_historiaClinica: string;
  motivo_consulta: string;
  enfermedad_actual: string;
  estatura: number;
  peso: number;
  presion: string;
  fecha: string;
  id_paciente: Idpaciente;
}

interface Idpaciente {
  id_pacientes: number;
}