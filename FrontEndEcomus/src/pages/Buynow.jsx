import React, { useEffect, useState } from "react";
import axios from "axios";
import { BiDollar } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingBag2Line } from "react-icons/ri";

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
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            className="h-auto w-64 border border-gray-300 rounded-md shadow-md p-4"
          >
            {/* Image */}
            <div className="h-24 w-full rounded-md overflow-hidden mb-3">
              <img
                src={product.images[0] || "https://via.placeholder.com/150"}
                alt={product.title}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col gap-2 text-left">
              <p className="text-sm font-bold hover:text-red-500">
                {product.title}
              </p>
              <div className="flex items-center text-gray-600 text-sm">
                <BiDollar className="" />
                <span>{product.price}</span>
                <BiDollar className="mr-1 font-bold text-green-900" />
                {product.slashprice && (
                  <span className="ml-2 line-through text-xs font-bold text-green-900">
                    {product.slashprice}
                  </span>
                )}
              </div>

              {/* Color Selection */}
              <div className="flex gap-2 mt-2">
                {product.colors?.map((color, index) => (
                  <button
                    key={index}
                    className={`h-5 w-5 rounded-full border  ${
                      selectedColor === color ? "border-black" : ""
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => handleColorChange(product._id, color)}
                  ></button>
                ))}
              </div>

              {/* Size Selection */}
              <div className="flex gap-2 mt-2 text-xs text-gray-600">
                {product.sizes?.map((size, index) => (
                  <button
                    key={index}
                    className={`px-2 py-1 border rounded ${
                      selectedSize === size ? "bg-black text-white" : "bg-white"
                    }`}
                    onClick={() => handleSizeChange(product._id, size)}
                  >
                    {size}
                  </button>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-4 mt-3">
                <button
                  className="flex items-center gap-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
                  onClick={() => handleAddToWishlist(product._id)}
                >
                  <FaRegHeart />
                  Wishlist
                </button>
                <button
                  className="flex items-center gap-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm"
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
  );
};

export default Buynow;
