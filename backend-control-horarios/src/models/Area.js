const { Schema, model } = require('mongoose');

const areaSchema = new Schema({
    NombreArea: String,
    Descripcion: String
});

const Area = model('Area', areaSchema);
module.exports = Area;