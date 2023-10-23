const express = require("express");
const home = require("./home");
const userlogin = require("./userlogin");
const userCheckout = require("./checkout");
const userOrder = require("./order");
const api = require("./api");
const router = express.Router();
const productRoutes = require('./productRoutes');

router.use("/api", api);
router.use("/", userOrder)
router.use("/", userCheckout);
router.use("/", userlogin);
router.use("/", home);
router.use("/products", productRoutes);
module.exports = router;