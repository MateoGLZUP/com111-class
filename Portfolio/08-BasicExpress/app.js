// app.js

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser'); // Import body-parser

const app = express();

// Use body-parser middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the index.html file at the root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle form submission and calculate BMI
app.post('/', (req, res) => {
  // Extract weight and height from the form data
  const weight = parseFloat(req.body.weight);
  const height = parseFloat(req.body.height);

  // Calculate BMI using the formula: BMI = (weight / (height^2)) * 10,000
  const bmi = (weight / (height * height)) * 10000;

  // Send the result back to the client
  res.send(`Your BMI is ${bmi.toFixed(2)}`);
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
