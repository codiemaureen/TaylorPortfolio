const express = require('express');
const router = express.Router();
const exController = require('../controllers/exControllers');

router.get('/', exController.homepage);
router.get('/projects', exController.projects);
router.get('/about-me', exController.about);
router.get('/contact', exController.contact);

module.exports = router;