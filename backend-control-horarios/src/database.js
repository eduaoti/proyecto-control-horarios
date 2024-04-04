const mongoose = require('mongoose');

mongoose.connect('mongodb://root:root@localhost:27017/ControlHorarios', {
    
}).then(() => {
    console.log('Database is connected');
}).catch((err) => {
    console.error('Error connecting to MongoDB', err);
});
