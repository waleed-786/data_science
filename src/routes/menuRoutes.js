const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');

// Define the GET route for menus
router.get('/', menuController.getAllMenus);

module.exports = router;