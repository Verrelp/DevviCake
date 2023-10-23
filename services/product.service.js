const { product } = require("../models");

class ProductService {
    constructor() {
        this.productModel = product;
    }
    async store(payload) {
        const date = new Date();
        const { product_id, product_name , product_price} = payload;
    
    const data = await this.productModel.create({
        product_id,
        product_name,
        product_price,
        createdAt: date,
        updatedAt: date,
    });



    
    return data;
}

  async getProductById(productId) {
        try {
            const product = await this.productModel.findById(productId);
            if (!product) {
                throw new Error('Product not found');
            }
            return product;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async update(id, payload) {
        try {
            const updatedProduct = await this.productModel.findByIdAndUpdate(id, payload, { new: true });
            if (!updatedProduct) {
                throw new Error('Product not found');
            }
            return updatedProduct;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    // Additional methods can be added here if needed
}

module.exports = ProductService;