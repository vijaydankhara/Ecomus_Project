const express = require('express');
const productRoutes = express.Router();

const {
    addNewProduct,getAllProducts
} = require('../../controller/admin/product.controller');


const { upload } = require('../../middlewares/imageUpload')

productRoutes.post('/addproduct', upload.array('images'), addNewProduct);
productRoutes.get('/getAllProduct', getAllProducts);

module.exports = productRoutes;