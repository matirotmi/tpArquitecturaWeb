import { Medico } from "./medico";
import { Paciente } from "./paciente";
import { Consultorio } from "./consultorio";

export class Turno {
    Paciente;
    Medico;
    Consultorio;
    fechaYhora;
    confirmado;
    
    constructor(Paciente, Medico, Consultorio, fechaYhora, confirmado) {
        this.Paciente = Paciente;
        this.Medico = Medico;
        this.Consultorio = Consultorio;
        this.fechaYhora = fechaYhora;
        this.confirmado = confirmado;
    }
}