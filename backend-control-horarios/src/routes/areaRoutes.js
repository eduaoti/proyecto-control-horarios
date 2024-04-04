const express = require('express');
const router = express.Router();


const areaController = require('../controllers/areaController');

router.post('/', areaController.create);
router.get('/', areaController.getAll);
router.get('/:nombreArea', areaController.getById);
router.put('/:nombreArea', areaController.update);
router.delete('/:nombreArea', areaController.delete);

module.exports = router;