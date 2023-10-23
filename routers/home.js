const express = require("express");
const home = express.Router();
const HomeController = require("../controllers/home.controller");
const UserController = require("../controllers/userregis.controller");
const userController = new UserController();
const homeController = new HomeController();


home.get("/", homeController.index);
home.get("/2", (req, res) => {
    res.send("Hello 2")
});
home.get('/login', userController.indexRegister);


module.exports = home;