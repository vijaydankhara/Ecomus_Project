const Wishlist = require('../models/wishlistModel');

module.exports = class WishlistServices {
    // Add New wishlist
    async addToWishlist(body) {
        try {
            return await Wishlist.create(body);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };


    // get wishlist
    async getWishlist(body) {
        try {
            return await Wishlist.findOne(body);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

   
    // Get all wishlist 
    async getAllWishlist(query) {
        try {
            return await Wishlist.find({ isDelete: false }).populate('cartItem');
          } catch (error) {
            throw new Error('Error fetching wishlist');
          }
        };


};
