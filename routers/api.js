const express = require ("express")
const api = express.Router();
const UserController = require("../controllers/userregis.controller");
const userController = new UserController;

// Endpoint user
api.post('/v1/users/register', userController.register);

module.exports = api;