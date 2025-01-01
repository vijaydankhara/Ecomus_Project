import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProductTable.css";

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null); // To hold the product to edit
  const [isModalOpen, setIsModalOpen] = useState(false); // To toggle the modal

  const productsPerPage = 5;

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

  const handleEdit = (product) => {
    setSelectedProduct(product); // Set the selected product
    setIsModalOpen(true); // Open the modal
  };

  const handleDelete = async (productId) => {
    try {
      await axios.delete(
        `http://localhost:1122/api/admin/product/deleteProduct?productId=${productId}`
      );
      // Refresh the product list
      const response = await axios.get(
        "http://localhost:1122/api/admin/product/getAllProduct"
      );
      setProducts(response.data);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedProduct(null); // Clear the selected product
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(
        `http://localhost:1122/api/admin/product/updateProduct?productId=${selectedProduct._id}`,
        selectedProduct
      );
      console.log("Product updated successfully:", response.data);

      // Refresh the product list
      const updatedProducts = await axios.get(
        "http://localhost:1122/api/admin/product/getAllProduct"
      );
      setProducts(updatedProducts.data);

      setIsModalOpen(false); // Close the modal
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="product-container">
      <h1 className="product-title">Product Data</h1>
      <div className="table-wrapper">
        <table className="product-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.length === 0 ? (
              <tr>
                <td colSpan="6">No products available</td>
              </tr>
            ) : (
              currentProducts.map((product) => (
                <tr key={product._id}>
                  <td>
                    <img
                      src={
                        product.images?.[0] || "https://via.placeholder.com/100"
                      }
                      alt={product.title}
                      className="product-image"
                    />
                  </td>
                  <td>{product.title}</td>
                  <td>{product.description}</td>
                  <td>${product.price}</td>
                  <td>{product.category}</td>
                  <td>
                    <button
                      className="action-button edit"
                      onClick={() => handleEdit(product)}
                    >
                      Edit
                    </button>
                    <button
                      className="action-button delete"
                      onClick={() => handleDelete(product._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`pagination-button ${
                currentPage === index + 1 ? "active" : ""
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Modal for Editing Product */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#90ffa6] p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl text-center font-sans font-semibold mb-4">
              UPDATE PRODUCT
            </h2>
            <label className="block mb-2">
              <span className="block text-gray-700">Title:</span>
              <input
                type="text"
                value={selectedProduct.title}
                onChange={(e) =>
                  setSelectedProduct({
                    ...selectedProduct,
                    title: e.target.value,
                  })
                }
                className="w-full mt-1 p-2 border rounded"
              />
            </label>
            <label className="block mb-2">
              <span className="block text-gray-700">Description:</span>
              <input
                type="text"
                value={selectedProduct.description}
                onChange={(e) =>
                  setSelectedProduct({
                    ...selectedProduct,
                    description: e.target.value,
                  })
                }
                className="w-full mt-1 p-2 border rounded"
              />
            </label>
            <label className="block mb-2">
              <span className="block text-gray-700">Price:</span>
              <input
                type="number"
                value={selectedProduct.price}
                onChange={(e) =>
                  setSelectedProduct({
                    ...selectedProduct,
                    price: e.target.value,
                  })
                }
                className="w-full mt-1 p-2 border rounded"
              />
            </label>
            <label className="block mb-4">
              <span className="block text-gray-700">Category:</span>
              <input
                type="text"
                value={selectedProduct.category}
                onChange={(e) =>
                  setSelectedProduct({
                    ...selectedProduct,
                    category: e.target.value,
                  })
                }
                className="w-full mt-1 p-2 border rounded"
              />
            </label>
            <div className="flex justify-end gap-4">
              <button
                onClick={handleUpdate}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Save
              </button>
              <button
                onClick={handleModalClose}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductTable;
