// routes/reviews.js
const express = require('express');
const Perfume = require('../Models/perfume.js'); // Import the Perfume model
const router = express.Router();

// Route to get all reviews for a specific perfume
router.get('/:id/reviews', async (req, res) => {
    try {
        const perfume = await Perfume.findById(req.params.id);
        if (!perfume) {
            return res.status(404).json({ message: 'Perfume not found' });
        }
        res.json(perfume.reviews);
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving reviews', error: err });
    }
});

// Route to add a new review for a specific perfume
router.post('/:id/reviews', async (req, res) => {
    try {
        const perfume = await Perfume.findById(req.params.id);
        if (!perfume) {
            return res.status(404).json({ message: 'Perfume not found' });
        }
        const { username, comment, rating } = req.body;
        const newReview = { username, comment, rating };
        perfume.reviews.push(newReview);
        await perfume.save();
        res.status(201).json(newReview);
    } catch (err) {
        res.status(400).json({ message: 'Error adding review', error: err });
    }
});

// Route to delete all reviews for a specific perfume
router.delete('/:id/reviews', async (req, res) => {
    try {
        const perfume = await Perfume.findById(req.params.id);
        if (!perfume) {
            return res.status(404).json({ message: 'Perfume not found' });
        }

        // Clear the reviews array
        perfume.reviews = [];
        
        // Save the perfume with cleared reviews
        await perfume.save();

        res.status(200).json({ message: 'All reviews deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting reviews', error: err });
    }
});

module.exports = router;
