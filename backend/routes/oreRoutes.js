const express = require('express');
const router = express.Router();
const oreController = require('../controllers/oreController');



router.get('/', oreController.getAllOres);
router.get('/:id', oreController.getOreById);
router.post('/', oreController.createOre);
router.put('/:id', oreController.updateOre);
router.delete('/:id', oreController.deleteOre);

module.exports = router;