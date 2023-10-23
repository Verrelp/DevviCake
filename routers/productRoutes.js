const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.post('/create', productController.createProduct);
router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getProductById);
router.get('/create-product', productController.indexProduct);
router.post('/products', productController.createProduct);
router.put('/update-products/:id', productController.indexUpdate);
router.get('/update-products/:id', productController.indexUpdate);

module.exports = router;
