const express = require ("express");
const UserController = require("../controllers/user.controller");
const user = express.Router();
const userController = new UserController();



user.get("/registration", userController.indexRegistration)

module.exports = user;