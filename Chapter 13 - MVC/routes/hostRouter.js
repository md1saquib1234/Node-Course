
//External Modules
const express = require('express');
const hostRouter = express.Router();

//Locale Modules
const hostController = require("../controllers/hostController");

hostRouter.get("/add-home", hostController.getAddHome );
hostRouter.post("/add-home", hostController.postAddHome);

module.exports = hostRouter;
