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

        // Find and update the cart item if it exists
        let cart = await cartServices.getCart({ user: userId, cartItem, color, size, isDelete: false });

        if (cart) {
            cart.quantity += quantity || 1;
            await cart.save();
            return res.status(200).json({ cart, message: "Cart updated successfully!" });
        }

        // If item does not exist, create a new cart entry
        cart = await cartServices.addToCart({
            user: userId,
            cartItem,
            color,
            size,
            quantity: quantity || 1,
        });

        return res.status(201).json({ cart, message: "New item added to the cart!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: `Internal Server Error: ${error.message}` });
    }
};



//  get All Carts
exports.getAllCarts = async (req, res) => {
    try {
        const carts = await cartServices.getAllCart(req.query, req.user);
        res.status(200).json(carts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};



//  get Cart
exports.getCart = async (req, res) => {
    try {
        let cart = await cartServices.getCartById({
            _id: req.query.cartId,
            isDelete: false
        });
        if (!cart) {
            return res.status(404).json({ message: `No Cart Found with this ID` });
        }
        res.status(200).json(cart);
    } catch (error) {
        console.log(error);
        res.status(401).json({ message: `Internal Server Error... ${console.error()}` });
    }
};


//  Update Cart
exports.updateCart = async (req, res) => {
    try {
        let cart = await cartServices.getCart({ _id: req.query.cartId, isDelete: false });
        if (!cart) {
            return res.status(404).json({ message: `No Cart Found with this ID` });
        }
        cart = await cartServices.updateCart(cart._id, { ...req.body });
        res.status(200).json({ cart, message: `Cart Item Updated SuccessFully.....` });
    } catch (error) {
        console.log(error);
        res.status(401).json({ message: `Internal Server Error... ${console.error()}` });
    }
};


// Delete Cart
exports.deleteCart = async (req, res) => {
    try {
        let cart = await cartServices.getCart({ _id: req.query.cartId });
        if (!cart) {
            return res.status(404).json({ message: `No Cart Found with this ID` });
        }
        cart = await cartServices.updateCart(cart._id, req.body, { isDelete: true });
        res.status(200).json({ message: `Cart Deleted Successfully......` });
    } catch (error) {
        console.log(error);
        res.status(401).json({ message: `Internal Server Error... ${console.error()}` });
    }
};