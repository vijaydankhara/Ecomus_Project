import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProductTable.css";

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1122/api/admin/getAllProduct"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleEdit = (productName) => {
    console.log(`Edit product: ${productName}`);
  };

  const handleDelete = (productName) => {
    console.log(`Delete product: ${productName}`);
  };

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

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
                      
                      className="product-image "
                    />
                  </td>
                  <td>{product.title}</td>
                  <td>{product.description}</td>
                  <td>${product.price}</td>
                  <td>{product.category}</td>
                  <td>
                    <button
                      className="action-button edit"
                      onClick={() => handleEdit(product.title)}
                    >
                      Edit
                    </button>
                    <button
                      className="action-button delete"
                      onClick={() => handleDelete(product.title)}
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
    </div>
  );
};

export default ProductTable;
