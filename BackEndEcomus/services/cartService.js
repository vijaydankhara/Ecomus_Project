const Cart = require("../models/cartModel");

module.exports = class CartServices {

  // Add to Cart Service
  async addToCart(body) {
    try {
      const { user, cartItem, quantity } = body;

      // Check if item already exists in cart
      const existingCartItem = await Cart.findOne({ user, cartItem, isDelete: false });
      if (existingCartItem) {
        return await Cart.findByIdAndUpdate(
          existingCartItem._id,
          { $inc: { quantity: quantity } }, // Increment quantity
          { new: true }
        );
      } else {
        return await Cart.create(body);
      }
    } catch (error) {
      console.error(error);
      return error.message;
    }
  }

  // Get Single Cart Item
  async getCart(body) {
    try {
      return await Cart.findOne(body);
    } catch (error) {
      console.error(error);
      return error.message;
    }
  }

  // Get Cart By ID
  async getCartById(id) {
    try {
      return await Cart.findById(id);
    } catch (error) {
      console.error(error);
      return error.message;
    }
  }

  // Update Cart
  async updateCart(id, body) {
    try {
      return await Cart.findByIdAndUpdate(id, { $set: body }, { new: true });
    } catch (error) {
      console.error(error);
      return error.message;
    }
  }

  // Update Multiple Cart Items (for bulk actions)
  async updateMany(user, body) {
    try {
      return await Cart.updateMany({ user: user }, { $set: body }, { new: true });
    } catch (error) {
      console.error(error);
      return error.message;
    }
  }

  // Get All Cart Items for a User
  async getAllCart(user) {
    try {
      let find = [
        { $match: { user: user._id, isDelete: false } },
        {
          $lookup: {
            from: "products",
            localField: "cartItem",
            foreignField: "_id",
            as: "cartItem",
          },
        },
        { $set: { cartItem: { $first: "$cartItem" } } },
      ];

      let result = await Cart.aggregate(find);
      return result;
    } catch (error) {
      console.error(error);
      return error.message;
    }
  }

  // Delete Cart Item
  async deleteCart(id) {
    try {
      return await Cart.findByIdAndUpdate(id, { isDelete: true }, { new: true });
    } catch (error) {
      console.error(error);
      return error.message;
    }
  }
};
