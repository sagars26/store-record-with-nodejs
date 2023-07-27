// index.js (or app.js)
require('./db');
const express = require('express');
const app = express();
const path = require('path');

// Configure Express to serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// ... Other route configurations

// Serve the frontend (index.html) for the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ... Other route configurations

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
