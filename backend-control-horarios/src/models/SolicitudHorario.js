const { Schema, model } = require('mongoose');

const solicitudhorarioSchema = new Schema({
    NombreEmpleado: String,
    NombreAdmin: String,
    Contrato: String,
    TurnoSolicitado: {
        inicio: String,
        fin: String,    
    },
    EstadoSolicitud: String,
    Correo: String
});

const SolicitudHorario = model('SolicitudHorario', solicitudhorarioSchema);

module.exports = SolicitudHorario