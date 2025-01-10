const express = require('express');
const productRoutes = express.Router();

const {
    addNewProduct,getAllProducts,getProduct,updateProduct,deleteProduct
} = require('../../controller/admin/productController');


const { upload } = require('../../middlewares/imageUpload')

productRoutes.post('/addproduct', upload.array('images'), addNewProduct);
productRoutes.get('/getAllProduct', getAllProducts);
productRoutes.get('/getProduct', getProduct);
productRoutes.put('/updateProduct', updateProduct);
productRoutes.delete('/deleteProduct', deleteProduct);

module.exports = productRoutes;