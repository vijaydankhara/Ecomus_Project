const WishlistServices = require('../../services/wishlistServices');

const wishlistServices = new WishlistServices();

// Add to Wishlist
exports.addToWishlist = async (req, res) => {
    try {
        const wishlist = await wishlistServices.getWishlist({
            cartItem: req.body.cartItem,
            user: req.user._id,
            isDelete: false, 
        });
        if (wishlist) {
            return res.status(400).json({ message: "Product already in your wishlist." });
        }
        const newWishlist = await wishlistServices.addToWishlist({
            cartItem: req.body.cartItem,
            user: req.user._id,
        });
        return res.status(200).json({ wishlist: newWishlist, message: "Product added to wishlist successfully" });
    } catch (error) {
        console.error("Error adding to wishlist:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// Get All Wishlists
exports.getAllWishlists = async (req, res) => {
    try {
        const wishlist = await wishlistServices.getAllWishlish(); 
        res.status(200).json(wishlist);
    } catch (error) {
        console.error("Error fetching wishlist:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// Delete Wishlist Item
exports.deleteWishlist = async (req, res) => {
    try {
        const { productId } = req.params;
        const wishlist = await wishlistServices.getWishlist(productId); 
        if (!wishlist) {
            return res.status(404).json({ message: "Wishlist not found." });
        }
        await wishlistServices.updatewishlist(wishlist._id, { isDelete: true });
        res.status(200).json({wishlist,message: "Wishlist item deleted successfully.",});
    } catch (error) {
        console.error("Error deleting wishlist:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
