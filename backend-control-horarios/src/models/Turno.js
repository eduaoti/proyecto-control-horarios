const { Schema, model } = require('mongoose');

const turnoSchema = new Schema({
    nombreTurno: String,
    horaFinal: String,
    horaInicio: String,
});

const Turno = model('Turno', turnoSchema);

module.exports = Turno;
