import React, { useState, useEffect } from "react";
import axios from "axios"; 
import Footers from "../components/Footer";

const AddToCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);


  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get("http://localhost:1122/api/user/cart/getallcart");
        setCartItems(response.data);
      } catch (error) {
        console.error("Error fetching cart items", error);
      }
    };

    fetchCartItems();
  }, []); 

  const handleQuantityChange = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Ensure that cartItems is not undefined and has values
  const subtotal = cartItems?.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  ) || 0;

  const freeShippingThreshold = 75;

  return (
    <div>
      <div className="cart-container flex flex-col lg:flex-row gap-6 p-4 lg:p-8">
        {/* Cart Items Section */}
        <div className="cart-items flex-1 bg-white p-4 lg:p-6 rounded shadow">
          <h2 className="text-lg lg:text-xl font-bold mb-4">Cart Items</h2>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="cart-item flex flex-wrap items-center justify-between mb-6 border-b pb-4"
              >
                <img
                  className="w-16 h-16 lg:w-20 lg:h-20 rounded"
                  src={item.image}
                  alt={item.name}
                />
                <div className="flex flex-col flex-1 ml-4">
                  <p className="text-sm lg:text-base font-medium">{item.name}</p>
                  <p className="text-sm lg:text-base text-gray-500">
                    {item.color} / {item.size}
                  </p>
                  <button
                    className="text-red-500 text-sm mt-2"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-sm lg:text-base font-medium">
                    <span>Price : </span>${item.price.toFixed(2)}
                  </p>
                  <div className="quantity-controls flex items-center mt-2">
                    <button
                      className="px-2 py-1 border rounded"
                      onClick={() => handleQuantityChange(item.id, -1)}
                    >
                      -
                    </button>
                    <span className="px-4">{item.quantity}</span>
                    <button
                      className="px-2 py-1 border rounded"
                      onClick={() => handleQuantityChange(item.id, 1)}
                    >
                      +
                    </button>
                  </div>
                  <p className="text-sm lg:text-base font-medium mt-2">
                    <span>Total Price : </span>$
                    {(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>

        {/* Cart Summary Section */}
        <div className="cart-summary w-full lg:w-1/3 bg-white p-4 lg:p-6 rounded shadow">
          <h3 className="text-lg lg:text-xl font-bold mb-4">Order Summary</h3>
          <p className="text-sm lg:text-base mb-2">
            Subtotal: <strong>${subtotal.toFixed(2)} USD</strong>
          </p>
          <p className="text-sm lg:text-base text-gray-500 mb-4">
            Taxes and shipping calculated at checkout
          </p>
          <button
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            onClick={() => setIsModalOpen(true)}
          >
            Check out
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/2 lg:w-1/3">
            <h2 className="text-xl font-bold mb-4">Checkout</h2>
            <form>
              <label className="block mb-4">
                <span className="text-gray-700">Name</span>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded py-2 px-3"
                  placeholder="Enter your name"
                />
              </label>
              <label className="block mb-4">
                <span className="text-gray-700">Email</span>
                <input
                  type="email"
                  className="mt-1 block w-full border border-gray-300 rounded py-2 px-3"
                  placeholder="Enter your email"
                />
              </label>
              <label className="block mb-4">
                <span className="text-gray-700">Address</span>
                <textarea
                  className="mt-1 block w-full border border-gray-300 rounded py-2 px-3"
                  placeholder="Enter your address"
                ></textarea>
              </label>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footers />
    </div>
  );
};

export default AddToCart;
