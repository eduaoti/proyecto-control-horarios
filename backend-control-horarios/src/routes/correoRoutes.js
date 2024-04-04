const express = require('express');
const router = express.Router();

const correoController = require('../controllers/correoController');

router.post('/',correoController.envioCorreo);

module.exports = router;