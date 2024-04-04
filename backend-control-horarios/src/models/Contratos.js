const { Schema, model } = require('mongoose');

const contratosSchema = new Schema({
    TipoContrato: String,
    DiasTrabajados:Number,
    DiasDescansados:Number,
    HorasPorDia:Number,
    TurnosContrato:[]
});

const  Contratos = model('Contratos', contratosSchema);

module.exports = Contratos;



