const express = require("express");
const wishlistRoutes = express.Router();
const { userVerifyToken } = require("../../middlewares/userVerifyToken");

const { addToWishlist,getAllWishlists,deleteWishlish} = require("../../controller/user/wishlistController");

wishlistRoutes.post("/addwishlish",userVerifyToken,addToWishlist);
wishlistRoutes.get("/getallwishlish",userVerifyToken,getAllWishlists);
wishlistRoutes.delete("/deletewishlish",userVerifyToken,deleteWishlish);


module.exports = wishlistRoutes;
