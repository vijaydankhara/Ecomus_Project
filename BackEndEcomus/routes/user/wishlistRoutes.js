const express = require("express");
const wishlistRoutes = express.Router();
const { userVerifyToken } = require("../../middlewares/userVerifyToken");

const { addToWishlist,getAllWishlists,deleteWishlist} = require("../../controller/user/wishlistController");

wishlistRoutes.post("/addwishlish",userVerifyToken,addToWishlist);
wishlistRoutes.get("/getallwishlish",userVerifyToken,getAllWishlists);
wishlistRoutes.delete("/deletewishlish/:productId",userVerifyToken,deleteWishlist);


module.exports = wishlistRoutes;
