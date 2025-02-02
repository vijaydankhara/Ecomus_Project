const express = require("express");
const cartRoutes = express.Router();
const { userVerifyToken } = require("../../middlewares/userVerifyToken");

const { addToCart, getAllCarts, updateCart, deleteCart } = require("../../controller/user/cartController");

cartRoutes.post("/addtocart", userVerifyToken, addToCart);
cartRoutes.get("/getallcart", userVerifyToken, getAllCarts);
cartRoutes.put("/updatecart", userVerifyToken, updateCart);
cartRoutes.delete("/deletecart", userVerifyToken, deleteCart);

module.exports = cartRoutes;
