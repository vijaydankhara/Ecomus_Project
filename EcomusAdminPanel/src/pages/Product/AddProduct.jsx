import React, { useState } from "react";
import axios from "axios";
import "./AddProduct.css";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

function AddProduct() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    slashprice: "",
    discount: "",
    images: [],
    sizes: [],
    colors: [],
  });

  const availableSizes = ["S", "M", "L", "XL", "2XL", "3XL"];
  const availableColors = ["Black", "White", "Orange", "Yellow", "Red"];

  const calculateSlashPrice = () => {
    const { price, discount } = formData;
    if (price && discount) {
      const calculatedSlashPrice = price - price * (discount / 10);
      return calculatedSlashPrice.toFixed(2);
    }
    return "";
  };

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    if (name === "sizes" || name === "colors") {
      const updatedValues = checked
        ? [...formData[name], value]
        : formData[name].filter((item) => item !== value);
      setFormData({ ...formData, [name]: updatedValues });
    } else {
      const updatedData = {
        ...formData,
        [name]: e.target.files ? e.target.files : value,
      };

      if (name === "price" || name === "discount") {
        updatedData.slashprice = calculateSlashPrice();
      }

      setFormData(updatedData);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((item) => formDataToSend.append(key, item));
      } else if (key === "images") {
        Array.from(value).forEach((file) =>
          formDataToSend.append("images", file)
        );
      } else {
        formDataToSend.append(key, value);
      }
    });

    try {
      const response = await axios.post(
        "http://localhost:1122/api/admin/addproduct",
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
      },1000);
    } catch (error) {
      console.error("Error adding product:", error.response || error.message);
      toast.error("Failed to add product. Please try again.");
    }
  };

  const CheckboxGroup = ({ name, options, selectedValues }) => (
    <div className="form-group">
      <label>{name.charAt(0).toUpperCase() + name.slice(1)}</label>
      <div className="checkbox-group">
        {options.map((option) => (
          <label key={option}>
            <input
              type="checkbox"
              name={name}
              value={option}
              checked={selectedValues.includes(option)}
              onChange={handleChange}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );

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
            <label htmlFor="discount">Discount</label>
            <input
              type="number"
              id="discount"
              name="discount"
              value={formData.discount}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="flex flex-row justify-evenly">
          <div className="form-group">
            <label htmlFor="slashprice">Slash Price</label>
            <input
              type="number"
              id="slashprice"
              name="slashprice"
              value={formData.slashprice}
              onChange={handleChange}
              readOnly
            />
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
        </div>

        <CheckboxGroup
          name="sizes"
          options={availableSizes}
          selectedValues={formData.sizes}
        />
        <CheckboxGroup
          name="colors"
          options={availableColors}
          selectedValues={formData.colors}
        />
        <button type="submit" className="submit-button">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
