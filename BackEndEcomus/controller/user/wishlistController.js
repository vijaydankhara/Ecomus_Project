const WishlistServices = require('../../services/wishlistServices');

const wishlistServices = new WishlistServices();

exports.addToWishlist = async (req, res) => {
    try {
        let wishlist = await wishlistServices.getWishlist({
            cartItem: req.body.cartItem,
            user: req.user._id,
            isDelete: false
        });
        if (wishlist) {
            return res.status(400).json({ message: "Product already in your wishlist." });
        }
        wishlist = await wishlistServices.addToWishlist({
            cartItem: req.body.cartItem,
            user: req.user._id
        });
        return res.status(200).json({ wishlist, message: "Product added to wishlist successfully" });
    } catch (error) {
        console.error("Error adding to wishlist:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

exports.getAllWishlists = async (req, res) => {
    try {
      // Ensure to populate the cart item data (if you're storing only product IDs)
      const wishlist = await wishlistServices.getAllWishlish();
      res.status(200).json(wishlist);
    } catch (error) {
      console.error("Error fetching wishlist:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };

  exports.deleteWishlish = async (req, res) => {
    try {
        let wishlist = await wishlistServices.getWishlist(req.query.Id);
        if(!wishlist){
            return res.status(404).json({message:"Wishlist not found."});
        }
        console.log(wishlist);
        wishlist = await wishlistServices.updatewishlist(wishlist._id, {isDelete: true});
        res.status(201).json({ wishlist: wishlist, message: `Wishlist Item is Deleted Successfully..`});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Internal Server Error ${console.error()}`});
    }
}; 