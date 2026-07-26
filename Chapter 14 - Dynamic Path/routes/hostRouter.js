
//External Modules
const express = require('express');
const hostRouter = express.Router();

//Locale Modules
const hostController = require("../controllers/hostController");

hostRouter.get("/add-home", hostController.getAddHome );
hostRouter.post("/add-home", hostController.postAddHome);
hostRouter.get("/host-home-list", hostController.getHostHomes);
hostRouter.get("/edit-home/:homeId", hostController.getEditHome);
hostRouter.post("/edit-home", hostController.postEditHome);

module.exports = hostRouter;
