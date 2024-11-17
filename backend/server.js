const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();

// Load environment variables
dotenv.config();

// Middleware
app.use(morgan('dev'));
app.use(express.json()); // Middleware to parse JSON
app.use(cors({ origin: 'http://localhost:5173' })); // Allow only this origin for CORS

// Database connection
require('./db/connection');

// Routes
const pRoutes = require('./Routes/productRoutes');
app.use('/product', pRoutes);

const nRoutes = require('./Routes/nurseRoutes');
app.use('/nurse', nRoutes);

// const authRoutes = require('./Routes/authRoutes');
// app.use('/api/auth', authRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});


