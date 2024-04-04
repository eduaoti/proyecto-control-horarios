const { Schema, model } = require('mongoose');

const historialhorarioSchema = new Schema({
    NombreEmpleado: String,
    FechaInicio: Date,
    FechaFin: Date
});

const HistorialHorario = model('HistorialHorario', historialhorarioSchema);

module.exports = HistorialHorario;