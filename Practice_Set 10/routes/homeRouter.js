// Core modules
const path = require('path');
// External modules
const express = require('express');
// local modules
const rootDir = require('../utils/pathUtil');

const homeRouter = express.Router();



homeRouter.get("/", (req, res, next) => {
  console.log("Handling / for GET", req.url, req.method);
  res.sendFile(path.join(__dirname,'..', "views" , "home.html"));
});

module.exports = homeRouter;