const { Schema, model } = require('mongoose');

const empleadoSchema = new Schema({
    Nombre: String,
    AppE: String,
    ApmE: String,
    FechaNac: Date,  
    Correo: String,
    Contrasena: String,
    Region: String,
    AreaTrabajo: String,
    Departamento: String,
    Contrato: String,
    TurnoActual: {
        inicio: String,
        fin: String,    
    },
    HorarioTraining: {
        Fecha: Date,     
        HoraInicial: String,  
        HoraFinal: String, 
    },
    NombreAdmin: String,
    FechaDeIngreso: Date
});

const Empleado = model('Empleado', empleadoSchema);

module.exports = Empleado;