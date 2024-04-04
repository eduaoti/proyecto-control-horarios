const express = require('express');
const app = express();
const mongoose = require('mongoose');  

mongoose.connect('mongodb://root:root@localhost:27017/ControlHorarios', { useNewUrlParser: true, useUnifiedTopology: true,authSource: 'admin' });
const db = mongoose.connection;

db.on('error', (error) => {
    console.error('Error en la conexión a MongoDB:', error);
});

db.once('open', () => {
    console.log('Conexión exitosa a MongoDB');

    app.use('/api', require('./routes/index'));

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Error interno del servidor');
});

module.exports = app;
