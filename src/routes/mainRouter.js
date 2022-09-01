const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/', mainController.index);
router.get('/contacto', mainController.contact);
router.get('/ayuda', mainController.help);
router.get('/nosotros', mainController.about);

module.exports = router;
