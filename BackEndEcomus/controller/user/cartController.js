const CartServices = require('../../services/cartService');
const cartServices = new CartServices();

//Add To Cart
exports.addToCart = async (req, res) => {
  try {
    const { cartItem, color, size, quantity } = req.body;
    const userId = req.user?._id;
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized user" });
    }
    let cart = await cartServices.getCart({ user: userId, cartItem, color, size, isDelete: false });
    if (cart) {
      cart.quantity += quantity || 1;
      await cart.save();
      return res.status(200).json({ cart, message: "Cart updated successfully!" });
    }
    cart = await cartServices.addToCart({ user: userId, cartItem, color, size, quantity: quantity || 1, });
    return res.status(201).json({ cart, message: "New item added to the cart!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: `Internal Server Error: ${error.message}` });
  }
};


// Get All Cart Items
exports.getAllCarts = async (req, res) => {
  try {
    const cartItems = await cartServices.getAllCart(req.user);
    res.status(200).json(cartItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Update Cart Quantity
exports.updateCart = async (req, res) => {
  try {
    const cart = await cartServices.updateCart(req.query.cartId, req.body);
    res.status(200).json({ cart, message: "Cart updated successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Delete Cart Item
exports.deleteCart = async (req, res) => {
  try {
    await cartServices.deleteCart(req.query.cartId);
    res.status(200).json({ message: "Cart item deleted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
