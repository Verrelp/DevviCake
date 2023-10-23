const express = require ("express");
const OrderController = require("../controllers/order.controller");
const userOrder = express.Router();
const userOrder2 = new OrderController();



userOrder.get("/order", userOrder2.indexOrder)

module.exports = userOrder;