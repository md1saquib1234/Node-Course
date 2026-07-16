
//External Modules
const express = require('express');
const userRouter = express.Router();

//Locale Modules
const homesController = require("../controllers/homes");


userRouter.get("/", homesController.getHomes );

module.exports = userRouter;