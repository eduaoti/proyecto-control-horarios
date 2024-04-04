const express = require('express');
const router = express.Router();

const contratosController = require('../controllers/contratosController');

router.post('/', contratosController.create);
router.get('/', contratosController.getAll);
router.get('/:tipoContrato', contratosController.getById);
router.put('/:tipoContrato', contratosController.update);
router.delete('/:tipoContrato', contratosController.delete);

module.exports = router;
