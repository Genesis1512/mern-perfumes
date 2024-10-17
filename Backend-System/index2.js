// index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const perfumeRoutes = require('./routes/perfumes'); // Import perfume routes
const reviewRoutes = require('./routes/reviews');   // Import review routes

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('./images', express.static('public/images'));

// Connect to MongoDB
mongoose.connect('mongodb+srv://kaustubhr168:gnkuxoq1L5NV4y44@mangodb.jga86.mongodb.net/my-api?retryWrites=true&w=majority&appName=mangoDB', 
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('MongoDB connected successfully!');
})
.catch(err => {
    console.error('MongoDB connection error:', err);
});

// Routes
app.use('/api/perfumes', perfumeRoutes); // Use perfume routes
app.use('/api/perfumes', reviewRoutes);  // Use review routes (nested under perfumes)

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
