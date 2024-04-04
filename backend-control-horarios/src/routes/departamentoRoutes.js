const express = require('express');
const router = express.Router();


const departamentoController = require('../controllers/departamentoController');

router.post('/', departamentoController.create);
router.get('/', departamentoController.getAll);
router.get('/:NombreDepartamento', departamentoController.getById);
router.put('/:NombreDepartamento', departamentoController.update);
router.delete('/:NombreDepartamento', departamentoController.delete);

module.exports = router;