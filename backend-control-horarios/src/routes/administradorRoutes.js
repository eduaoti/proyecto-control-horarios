const express = require('express');
const router = express.Router();


const administradorController = require('../controllers/administradorController');

router.post('/', administradorController.create);
router.get('/', administradorController.getAll);
router.get('/:nombreAdmin', administradorController.getById);
router.put('/:nombreAdmin', administradorController.update);
router.delete('/:nombreAdmin', administradorController.delete);

module.exports = router;