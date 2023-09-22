const express = require("express");
const home = require("./home");
const user = require("./user");
const userlogin = require("./userlogin");
const router = express.Router();


router.use("/", userlogin);
router.use("/", home);
router.use("/", user);
module.exports = router;