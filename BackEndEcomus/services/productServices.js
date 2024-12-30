const Product = require('../models/productModel');

module.exports = class ProductServices {
    // Add New Product
    async addNewProduct(body) {
        try {
            return await Product.create(body);
        } catch (error) {
            console.error("Error in addNewProduct Service:", error);

        }
    }

    // Get Single Product
    async getProduct(filter) {
        try {
            return await Product.findOne(filter);
        } catch (error) {
            console.error("Error in getProduct Service:", error);

        }
    }

    // Get Single Product By Id
    async getProductById(id) {
        try {
            return await Product.findById(id);
        } catch (error) {
            console.error("Error in getProductById Service:", error);

        }
    }

    // Update Product
    async updateProduct(id, body) {
        try {
            return await Product.findByIdAndUpdate(id, { $set: body }, { new: true });
        } catch (error) {
            console.error("Error in updateProduct Service:", error);

        }
    }

    // Get All Products
    async getAllProducts(query) {
        try {
            const categoryFilter = query.category ? { category: query.category } : {};
            return await Product.find({ isDelete: false, ...categoryFilter });
        } catch (error) {
            console.error("Error in getAllProducts Service:", error);

        }
    }
};
