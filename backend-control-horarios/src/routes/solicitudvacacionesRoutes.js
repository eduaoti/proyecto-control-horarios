const express = require('express');
const router = express.Router();


const solicitudvacacionesController = require('../controllers/solicitudvacacionesController');

router.post('/', solicitudvacacionesController.create);
router.get('/', solicitudvacacionesController.getAll);
router.get('/:id', solicitudvacacionesController.getById);
router.put('/:id', solicitudvacacionesController.update);
router.delete('/:id', solicitudvacacionesController.delete);

module.exports = router;