
//External Modules
const express = require('express');
const storeRouter = express.Router();

//Locale Modules
const storeController = require("../controllers/storeController");


storeRouter.get("/", storeController.getHomes );
storeRouter.get("/bookings", storeController.getBookings);

module.exports = storeRouter;