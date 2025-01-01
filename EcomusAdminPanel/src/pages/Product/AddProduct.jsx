import React, { useState } from "react";
import axios from "axios";
import "./AddProduct.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function AddProduct() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    slashprice: "",
    images: [],
    sizes: [],
    colors: [],
  });

  const availableSizes = ["S", "M", "L", "XL", "2XL", "3XL"];
  const availableColors = ["Black", "White", "Orange", "Yellow", "Red"];

  const handleChange = (e) => {
    const { name, value, files, checked } = e.target;

    if (name === "sizes" || name === "colors") {
      setFormData({
        ...formData,
        [name]: checked
          ? [...formData[name], value] 
          : formData[name].filter((item) => item !== value),
      });
    } else {
      setFormData({
        ...formData,
        [name]: files ? files : value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === "images") {
        Array.from(value).forEach((file) =>
          formDataToSend.append("images", file)
        );
      } else if (Array.isArray(value)) {
        value.forEach((item) => formDataToSend.append(key, item));
      } else {
        formDataToSend.append(key, value);
      }
    });

    try {
      const response = await axios.post(
        "http://localhost:1122/api/admin/product/addproduct",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Product added successfully:", response.data);
      toast.success("Product added successfully!");
      setTimeout(() => {
        navigate("/producttabal");
      }, 1000);
    } catch (error) {
      console.error("Error adding product:", error.response || error.message);
      toast.error("Failed to add product. Please try again.");
    }
  };

  return (
    <div className="add-product-container">
      <h2 className="form-title">Add New Product</h2>
      <form className="add-product-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-row justify-between">
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="slashprice">Slash Price</label>
            <input
              type="number"
              id="slashprice"
              name="slashprice"
              value={formData.slashprice}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="images">Images</label>
          <input
            type="file"
            multiple
            id="images"
            name="images"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Sizes</label>
          <div className="checkbox-group">
            {availableSizes.map((size) => (
              <label key={size}>
                <input
                  type="checkbox"
                  name="sizes"
                  value={size}
                  checked={formData.sizes.includes(size)}
                  onChange={handleChange}
                />
                {size}
              </label>
            ))}
          </div>
        </div>
        <div className="form-group">
          <label>Colors</label>
          <div className="checkbox-group">
            {availableColors.map((color) => (
              <label key={color}>
                <input
                  type="checkbox"
                  name="colors"
                  value={color}
                  checked={formData.colors.includes(color)}
                  onChange={handleChange}
                />
                {color}
              </label>
            ))}
          </div>
        </div>
        <button type="submit" className="submit-button">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
