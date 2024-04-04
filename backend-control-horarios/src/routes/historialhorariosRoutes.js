const express = require('express');
const router = express.Router();


const historialhorarioController = require('../controllers/historialhorarioController');

router.post('/', historialhorarioController.create);
router.get('/', historialhorarioController.getAll);
router.get('/:id', historialhorarioController.getById);
router.put('/:id', historialhorarioController.update);
router.delete('/:id', historialhorarioController.delete);

module.exports = router;