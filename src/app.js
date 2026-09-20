const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./config/db'); 

// Import Routes
const stallsRoutes = require('./routes/stallsRoutes');
const menuRoutes = require('./routes/menuRoutes');
const reviewsRoutes = require('./routes/reviewsRoutes'); // <-- 1. ADD THIS

const app = express();

app.use(cors());
app.use(express.json()); 

// Register Routes
app.use('/api/stalls', stallsRoutes);
app.use('/api/menus', menuRoutes);
app.use('/api/reviews', reviewsRoutes); // <-- 2. ADD THIS

app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'success', message: 'API is running smoothly!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});