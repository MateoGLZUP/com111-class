const express = require("express");
const app = express();

// Home route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Server setup
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
