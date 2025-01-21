import React, { useEffect, useState } from "react";
import axios from "axios";
import { BiDollar } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingBag2Line } from "react-icons/ri";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footers from "../components/Footer";

const Buynow = () => {
  const [products, setProducts] = useState([]);
  const [selectedColors, setSelectedColors] = useState({});
  const [selectedSizes, setSelectedSizes] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1122/api/admin/product/getAllProduct"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = async (productId, selectedColor, selectedSize) => {
    if (!selectedColor || !selectedSize) {
      toast.error("Please select a color and size before adding to cart.");
      return;
    }
    console.log("Add to Cart Data To Body:", {
      productId,
      selectedColor,
      selectedSize,
    });
    setLoading(true);

    try {
      const token = localStorage.getItem("userToken");
      const headers = { authorization: `Bearer ${token}` };

      const response = await axios.post(
        "http://localhost:1122/api/user/cart/addtocart",
        {
          productId: productId,
          color: selectedColor,
          size: selectedSize,
          // quantity: 5,
        },
        {
          headers,
        }
      );

      console.log("response is cart", response);
      toast.success("Product added to cart successfully!");
    } catch (error) {
      console.error(
        "Error adding product to cart:",
        error.response ? error.response.data : error.message
      );
      toast.error("Failed to add product to cart. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  const handleAddToWishlist = (productId) => {
    console.log("Add to Wishlist clicked for product ID:", productId);
    toast.success("Product added to wishlist!");
    // "Add to Wishlist" .
  };

  const handleColorChange = (productId, color) => {
    setSelectedColors((prev) => ({ ...prev, [productId]: color }));
  };

  const handleSizeChange = (productId, size) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
  };

  return (
    <div className="bg-[#ffffff]">
      <ToastContainer position="top-right" autoClose={3000} /> {/* Toast container */}
      <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {products.map((product) => {
          const selectedColor =
            selectedColors[product._id] ||
            (product.colors ? product.colors[0] : null);
          const selectedSize =
            selectedSizes[product._id] ||
            (product.sizes ? product.sizes[0] : null);

          return (
            <div
              key={product._id}
              className="h-[450px] w-72 border border-blue-700 rounded-md shadow-sm p-4 hover:shadow-md transition-all duration-200"
            >
              {/* Product Image */}
              <div className="h-44 w-full rounded-md overflow-hidden relative ">
                <img
                  src="https://s.alicdn.com/@sc04/kf/Hc81fbd50244b4cee81fc27caa7206c83n.jpg_720x720q50.jpg"
                  alt={product.title}
                  className="h-full w-full object-fill hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="flex flex-col gap-3 mt-4">
                {/* Title */}
                <p className="text-lg font-semibold text-center hover:text-red-500">
                  {product.title}
                </p>

                {/* Pricing */}
                <div className="flex justify-center items-center gap-2">
                  <span className="flex items-center text-blue-600 text-lg font-bold">
                    <BiDollar />
                    {product.price}
                  </span>
                  {product.slashprice && (
                    <span className="flex items-center text-green-500 text-lg line-through">
                      <BiDollar />
                      {product.slashprice}
                    </span>
                  )}
                </div>

                {/* Color Selection */}
                <div className="flex justify-center gap-2 mt-2">
                  {product.colors?.map((color, index) => (
                    <button
                      key={index}
                      className={`h-6 w-6 rounded-full border ${selectedColor === color
                        ? "ring ring-[#ff0000] ring-offset-1"
                        : "border-gray-300"
                        }`}
                      style={{ backgroundColor: color }}
                      onClick={() => handleColorChange(product._id, color)}
                    ></button>
                  ))}
                </div>

                {/* Size Selection */}
                <div className="flex justify-center gap-2 mt-3">
                  {product.sizes?.map((size, index) => (
                    <button
                      key={index}
                      className={`px-3 py-1 rounded border text-gray-700 text-sm ${selectedSize === size
                        ? "bg-black text-white border-black"
                        : "border-gray-300"
                        }`}
                      onClick={() => handleSizeChange(product._id, size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex justify-center gap-4 mt-4">
                  <button
                    className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 text-sm"
                    onClick={() => handleAddToWishlist(product._id)}
                  >
                    <FaRegHeart />
                    Wishlist
                  </button>
                  <button
                    className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-sm"
                    onClick={() =>
                      handleAddToCart(product._id, selectedColor, selectedSize)
                    }
                    disabled={loading}
                  >
                    <RiShoppingBag2Line />
                    {loading ? "Loading..." : "Add to Cart"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footers />
    </div>
  );
};

export default Buynow;
