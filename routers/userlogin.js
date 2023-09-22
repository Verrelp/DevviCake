const express = require ("express");
const UserControllers2 = require("../controllers/loginuser.controller");
const userlogin = express.Router();
const userControllers2 = new UserControllers2();



userlogin.get("/login", userControllers2.indexLogin)

module.exports = userlogin;