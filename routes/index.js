const express = require('express');
const router = express.Router();
const exController = require('../controllers/exControllers');

router.get('/', exController.homepage);
router.get('/projects', exController.projects);

module.exports = router;