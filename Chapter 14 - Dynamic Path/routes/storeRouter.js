
//External Modules
const express = require('express');
const storeRouter = express.Router();

//Locale Modules
const storeController = require("../controllers/storeController");


storeRouter.get("/", storeController.getIndex );
storeRouter.get("/homes", storeController.getHomes);
storeRouter.get("/bookings", storeController.getBookings);
storeRouter.get("/favourites", storeController.getFavouriteList);

storeRouter.get("/homes/:homeId", storeController.getHomeDetails);

module.exports = storeRouter;