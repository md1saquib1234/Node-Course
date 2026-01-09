// Core modules
const path = require('path');
// External modules
const express = require('express');
//local modules
const rootDir = require('../utils/pathUtil')

const contactRouter = express.Router();

contactRouter.get("/contact-us", (req, res, next) => {
  res.sendFile(path.join(__dirname,'..', "views", "cont-us.html"));
});

contactRouter.post("/contact-us", (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(__dirname,'..', "views", "cont-success.html" ));
});

module.exports = contactRouter;