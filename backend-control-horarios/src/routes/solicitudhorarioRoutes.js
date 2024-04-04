const express = require('express');
const router = express.Router();


const solicitudhorarioController = require('../controllers/solicitudhorarioController');

router.post('/', solicitudhorarioController.create);
router.get('/', solicitudhorarioController.getAll);
router.get('/:id', solicitudhorarioController.getById);
router.put('/:id', solicitudhorarioController.update);
router.delete('/:id', solicitudhorarioController.delete);

module.exports = router;