// server.js

// Import express module
const express = require("express");

// Create an instance 'app' of the express module
const app = express();

// Middlewares
// Routes
// Error handles middlewares

// PORT number
const PORT = process.env.PORT || 9000;

// Listen to server
app.listen(PORT, console.log(`Server is up and running on ${PORT}`));

