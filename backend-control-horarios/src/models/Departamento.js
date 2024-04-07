const mongoose = require('mongoose');

const departamentoSchema = new mongoose.Schema({
  NombreDepartamento: String,
  Direccion: {
    Numero: String,
    Calle: String,
    Colonia: String,
    Cp: String
  }
});

module.exports = mongoose.model('Departamento', departamentoSchema);