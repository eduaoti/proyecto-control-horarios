const { Schema, model } = require('mongoose');

const sedeSchema = new Schema({
    region: String,
    pais:String
});

const Sede = model('Sede', sedeSchema);

module.exports = Sede;
