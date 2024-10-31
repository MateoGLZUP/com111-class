const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Route for the main page - serves the registration form
app.get('/', (req, res) => {
  res.render('index', { error: null }); // render index.ejs with no error initially
});

// Route for handling the form submission and greeting the user
app.get('/greet', (req, res) => {
  const name = req.query.name;
  if (name) {
    res.render('success', { name: name });
  } else {
    res.render('index', { error: 'Name is required' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
