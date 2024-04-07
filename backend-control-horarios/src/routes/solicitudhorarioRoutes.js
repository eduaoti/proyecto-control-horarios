const express = require('express');
const router = express.Router();


const solicitudhorarioController = require('../controllers/solicitudhorarioController');

router.post('/', solicitudhorarioController.create);
router.get('/', solicitudhorarioController.getAll);
router.get('/:NombreEmpleado', solicitudhorarioController.getById);
router.put('/:NombreEmpleado', solicitudhorarioController.update);
router.delete('/:NombreEmpleado', solicitudhorarioController.delete);

module.exports = router;