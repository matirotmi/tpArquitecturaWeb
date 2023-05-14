export class Paciente {
    nombre;
    apellido;
    edad;
    dni;
    obraSocial;
    
    constructor(nombre, apellido, edad, dni, obraSocial) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.dni = dni;
        this.obraSocial = obraSocial;
    }
}