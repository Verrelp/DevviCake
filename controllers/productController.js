const Product = require('../models/product'); 
const ProductService = require('../services/product.service');
const userProduct = new ProductService();

const createProduct = async (req, res) => {
    console.log('Received POST request at /products');
    console.log('Request body:', req.body); 
  
    try {
        await userProduct.store(req.body);
      res.status(201).json({ message: 'Product created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to create product' });
    }
  };
  
const getAllProducts = async () => {
  try {
    const products = await Product.find();
    return products;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getProductById = async (productId) => {
  try {
    const product = await Product.findById(productId);
    if (!product) {
      throw new Error('Product not found');
    }
    return product;
  } catch (error) {
    throw new Error(error.message);
  }
};

const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { product_name, product_price } = req.body;
    
    try {
        const updatedProduct = await userProduct.update(id, {
            product_name,
            product_price
        });
        
        res.status(200).json({ message: 'Product updated successfully', product: updatedProduct });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update product' });
    }
};

const indexProduct = (req, res) => { res.render("create") }

const indexUpdate = async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await userProduct.getProductById(productId);
        res.render("update-product", { product });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to load product for update' });
    }
};


module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  indexProduct,
  indexUpdate,
};
