const { Schema, model } = require('mongoose');

const departamentoSchema = new Schema({
    NombreDepartamento:String,
    Direccion:[
                {Numero:String},
                {Calle:Number},
                {Colonia:String},
                {Cp:String}
              ]
});

const Departamento = model('Departamento', departamentoSchema);

module.exports = Departamento;