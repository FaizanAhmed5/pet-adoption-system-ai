const express = require('express');
const router = express.Router();
const c = require('../controllers/petController');

router.post('/', c.createPet);
router.get('/', c.getPets);
router.get('/:id', c.getPetById);
router.put('/:id', c.updatePet);
router.delete('/:id', c.deletePet);

module.exports = router;
