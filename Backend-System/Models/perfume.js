// models/perfume.js
const mongoose = require('mongoose');

// Review Schema
const reviewSchema = new mongoose.Schema({
    username: String,
    comment: String,
    rating: Number,
});

// Perfume Schema
const perfumeSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    imageUrl: String,
    reviews: [reviewSchema], // Array of reviews
});

const Perfume = mongoose.model('Perfume', perfumeSchema);

module.exports = Perfume;
