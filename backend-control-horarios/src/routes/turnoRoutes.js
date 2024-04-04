const express = require('express');
const router = express.Router();


const turnoController = require('../controllers/turnoController');

router.post('/', turnoController.create);
router.get('/', turnoController.getAll);
router.get('/:nombreTurno', turnoController.getByNombre);
router.put('/:nombreTurno', turnoController.update);
router.delete('/:nombreTurno', turnoController.delete);

module.exports = router;