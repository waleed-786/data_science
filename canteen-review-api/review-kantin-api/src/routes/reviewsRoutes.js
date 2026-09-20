const express = require('express');
const router = express.Router();
const reviewsController = require('../controllers/reviewsController');

// CREATE a review
router.post('/', reviewsController.addReview);

// UPDATE a review (requires the review ID in the URL)
router.put('/:id', reviewsController.updateReview);

// DELETE a review (requires the review ID in the URL)
router.delete('/:id', reviewsController.deleteReview);

module.exports = router;