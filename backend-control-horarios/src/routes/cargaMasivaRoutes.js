const express = require('express');
const router = express.Router();

const cargaMasivaController = require('../controllers/cargaMasivaController');

router.post('/',cargaMasivaController);

module.exports = router;