const { Schema, model } = require('mongoose');

const solicitudvacacionesSchema = new Schema({
    NombreEmpleado:String,
    FechaSolicitud:["FechaInicioVacaciones","FechaTerminoVacaciones"],
    EstadoSolicitud:String,
    Descripcion: String
});

const  SolicitudVacaciones = model('SolicitudVacaciones', solicitudvacacionesSchema);

module.exports = SolicitudVacaciones ;