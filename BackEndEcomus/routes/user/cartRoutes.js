const express = require('express');
const cartRoutes = express.Router();
const {userVerifyToken} = require('../../middlewares/userVerifyToken')


const {addToCart,getAllCarts} = require('../../controller/user/cartController')

cartRoutes.post('/addtocart',userVerifyToken,addToCart);
cartRoutes.post('/getallcart',getAllCarts);


module.exports = cartRoutes