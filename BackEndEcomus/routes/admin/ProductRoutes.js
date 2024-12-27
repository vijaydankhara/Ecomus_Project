const express = require('express');
const productRoutes = express.Router();

const {
    addNewProduct
} = require('../../controller/admin/product.controller');


const { upload } = require('../../middlewares/imageUpload')

productRoutes.post('/addproduct', upload.single('productImage'), addNewProduct);

module.exports = productRoutes;