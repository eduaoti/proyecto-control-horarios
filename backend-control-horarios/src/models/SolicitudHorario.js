const { Schema, model } = require('mongoose');

const solicitudhorarioSchema = new Schema({
    NombreEmpleado: String,
    NombreAdmin: String,
    Contrato: String,
    Turno: String,
    FechaInicio: Date,
    FechaFin: Date, 
    EstadoSolicitud: String,
    Correo: String
});

const SolicitudHorario = model('SolicitudHorario', solicitudhorarioSchema);
