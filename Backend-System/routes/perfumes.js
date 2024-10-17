// routes/perfumes.js
const express = require('express');
const Perfume = require('../Models/perfume.js'); // Import the Perfume model
const router = express.Router();

// Route to get all perfumes
router.get('/', async (req, res) => {
    try {
        const perfumes = await Perfume.find();
        res.json(perfumes);
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving perfumes', error: err });
    }
});

// Route to get a single perfume by ID
router.get('/:id', async (req, res) => {
    try {
        const perfume = await Perfume.findById(req.params.id);
        if (!perfume) {
            return res.status(404).json({ message: 'Perfume not found' });
        }
        res.json(perfume);
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving perfume', error: err });
    }
});

// Route to create a new perfume
router.post('/', async (req, res) => {
    try {
        const newPerfume = new Perfume(req.body);
        await newPerfume.save();
        res.status(201).json(newPerfume);
    } catch (err) {
        res.status(400).json({ message: 'Error creating perfume', error: err });
    }
});

// Route to update an existing perfume by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedPerfume = await Perfume.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true, runValidators: true } // Return updated perfume and validate
        );
        if (!updatedPerfume) {
            return res.status(404).json({ message: 'Perfume not found' });
        }
        res.status(200).json(updatedPerfume);
    } catch (err) {
        res.status(400).json({ message: 'Error updating perfume', error: err });
    }
});

// DELETE endpoint to delete a particular perfume by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedPerfume = await Perfume.findByIdAndDelete(req.params.id);
        if (!deletedPerfume) {
            return res.status(404).json({ message: 'Perfume not found' });
        }
        res.status(200).json({ message: 'Perfume deleted successfully', deletedPerfume });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting perfume', error });
    }
});

module.exports = router;
