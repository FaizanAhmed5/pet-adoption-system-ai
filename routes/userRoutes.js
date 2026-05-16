const express = require('express');
const router = express.Router();
const c = require('../controllers/userController');

router.post('/', c.createUser);
router.get('/', c.getUsers);

module.exports = router;
