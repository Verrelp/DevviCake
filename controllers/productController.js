const Product = require('../models/product'); 

const createProduct = async (productData) => {
  try {
    const product = new Product(productData);
    await product.save();
    return product;
  } catch (error) {
    throw new Error(error.message);
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

const updateProduct = async (productId, productData) => {
  try {
    const product = await Product.findByIdAndUpdate(productId, productData, {
      new: true,
    });
    if (!product) {
      throw new Error('Product not found');
    }
    return product;
  } catch (error) {
    throw new Error(error.message);
  }
};



module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
};
