import React, { useEffect, useState } from "react";
import axios from "axios";
import { BiDollar } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingBag2Line } from "react-icons/ri";
import Footers from "../components/Footer";

const Buynow = () => {
  const [products, setProducts] = useState([]);
  const [selectedColors, setSelectedColors] = useState({});
  const [selectedSizes, setSelectedSizes] = useState({});

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

  const handleAddToCart = (productId, selectedColor, selectedSize) => {
    console.log("Add to Cart:", {
      productId,
      selectedColor,
      selectedSize,
    });
    // Add your "Add to Cart" functionality here.
  };

  const handleAddToWishlist = (productId) => {
    console.log("Add to Wishlist clicked for product ID:", productId);
    // Add your "Add to Wishlist" functionality here.
  };

  const handleColorChange = (productId, color) => {
    setSelectedColors((prev) => ({ ...prev, [productId]: color }));
  };

  const handleSizeChange = (productId, size) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
  };

  return (
   <div>
     <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            className="h-[450px] w-72 border border-gray-200 rounded-md shadow-sm p-4 hover:shadow-md transition-all duration-200"
          >
            {/* Product Image */}
            <div className="h-44 w-full rounded-md overflow-hidden relative">
              <img
                src={product.images[0] || "https://via.placeholder.com/150"}
                alt={product.title}
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
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
                    className={`h-6 w-6 rounded-full border ${
                      selectedColor === color
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
                    className={`px-3 py-1 rounded border text-gray-700 text-sm ${
                      selectedSize === size
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
                >
                  <RiShoppingBag2Line />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
    <Footers/>
   </div>
  );
};

export default Buynow;
