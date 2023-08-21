// index.js
// where your node app starts

// Load environment variables from .env file
require('dotenv').config();

// Import required modules
const express = require('express');
const app = express();

// Enable Cross-Origin Resource Sharing (CORS)
const cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// Serve static files from the "public" directory
app.use(express.static('public'));

// Route for the root URL
app.get('/', function (req, res) {
  // Send the index.html file as a response
  res.sendFile(__dirname + '/views/index.html');
});

// Define an API endpoint for a basic "hello" response
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

// Middleware for logging requests
const logMiddleware = (req, res, next) => {
  // Create a log string containing request method, path, and IP address
  const logString = `${req.method} ${req.path} - ${req.ip}`;
  console.log(logString);
  next(); // Move to the next middleware or route handler
};

// Define an API endpoint for /api/whoami
app.use('/api/whoami', (req, res) => {
  // Get the preferred language from the "Accept-Language" header
  const preferredLanguage = req.headers['accept-language'];

  // Get user IP address
  const ip = req.ip;

  // Get user agent (browser and OS information)
  const ua = req.get('User-Agent');

  // Send a JSON response with IP address, preferred language, and user agent
  res.json({ ipaddress: ip, language: preferredLanguage, software: ua });
});

// Attach the logging middleware to every request
app.use(logMiddleware);

// Start the server and listen for incoming requests
const port = process.env.PORT || 3001;
const listener = app.listen(port, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
