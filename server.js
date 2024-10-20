const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/database');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files
app.use(express.static(path.join(__dirname, 'views')));

app.use('/api/auth', authRoutes);

// Start the server
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT || 5000}`);
});
