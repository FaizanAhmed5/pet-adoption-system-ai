const express = require('express');
const router = express.Router();
const c = require('../controllers/adoptionController');

router.post('/', c.createAdoptionRequest);
router.get('/', c.getAllAdoptions);
router.put('/:id', c.updateAdoptionStatus);

module.exports = router;
