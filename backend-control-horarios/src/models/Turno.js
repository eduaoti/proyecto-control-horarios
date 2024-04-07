const { Schema, model } = require('mongoose');

const turnoSchema = new Schema({
    nombreTurno: String,
    horaFinal: Date,
    horaInicio: Date,
});

const Turno = model('Turno', turnoSchema);

module.exports = Turno;
