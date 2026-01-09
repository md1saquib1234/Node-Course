
// External modules
const express = require('express');
// local modules
const requestHandler = require('./user');

const app = express();
app.get("/", (req, res, next) => {
  console.log("Came in first middleware",req.url, req.method);
  // res.send("<p>Came from first middleware</p>");
  next();
});

app.post("/submit-details", (req, res, next) => {
  console.log("Came in second middleware",req.url, req.method)
  res.send("<p>Welcome to Exoress.js Application</p>");
});

app.use("/", (req, res, next) => {
  console.log("Came from another middleware",req.url, req.method);
  res.send("<p>Came from another middleware</p>");
  next();
});





const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on address http://localhost:${PORT}`);
});