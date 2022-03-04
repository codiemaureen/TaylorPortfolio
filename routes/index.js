const express = require('express');
const router = express.Router();
const exController = require('../controllers/exControllers');

router.get('/', exController.homepage);

module.exports = router;