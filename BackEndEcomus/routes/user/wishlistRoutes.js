const express = require("express");
const wishlistRoutes = express.Router();
const { userVerifyToken } = require("../../middlewares/userVerifyToken");

const { addToWishlist,getAllWishlists} = require("../../controller/user/wishlistController");

wishlistRoutes.post("/addwishlist",userVerifyToken,addToWishlist);
wishlistRoutes.get("/getallwishlist",userVerifyToken,getAllWishlists);


module.exports = wishlistRoutes;
