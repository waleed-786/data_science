const express = require('express');
const router = express.Router();
const stallsController = require('../controllers/stallsController');

// Define the GET route
router.get('/', stallsController.getAllStalls);

module.exports = router;