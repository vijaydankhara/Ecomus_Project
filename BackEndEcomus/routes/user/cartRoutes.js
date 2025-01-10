const express = require('express');
const cartRoutes = express.Router();
const { userVerifyToken } = require('../../middlewares/userVerifyToken');
const { adminVerifyToken } = require('../../middlewares/adminVerifyToken');

const {addToCart,getAllCarts} = require('../../controller/user/cartController')

cartRoutes.post('/addtocart',addToCart);
cartRoutes.post('/getallcart',getAllCarts);


module.exports = cartRoutes