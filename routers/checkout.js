const express = require ("express");
const CheckoutController = require("../controllers/checkout.controller");
const userCheckout = express.Router();
const userCheckout2 = new CheckoutController();



userCheckout.get("/checkout", userCheckout2.indexCheckout)

module.exports = userCheckout;