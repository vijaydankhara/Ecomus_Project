const express = require('express');
const cartRoutes = express.Router();
const {userVerifyToken} = require('../../middlewares/userVerifyToken')


const {addToCart,getAllCarts} = require('../../controller/user/cartController')

cartRoutes.post('/addtocart',userVerifyToken,addToCart);
cartRoutes.get('/getallcart',userVerifyToken,getAllCarts);


module.exports = cartRoutes
