const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.post('/', productController.createProduct); // Handle POST requests to /

module.exports = router;
