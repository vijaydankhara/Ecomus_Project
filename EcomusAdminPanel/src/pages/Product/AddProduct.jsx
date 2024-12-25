import React, { useState } from 'react';
import './AddProduct.css';

function AddProduct() {
  const [formData, setFormData] = useState({
    productName: '',
    price: '',
    images: null,
    sizes: [],
    colors: []
  });

  const handleChange = (e) => {
    const { name, value, files, checked } = e.target;
    if (name === 'sizes') {
      const updatedSizes = checked
        ? [...formData.sizes, value]
        : formData.sizes.filter((size) => size !== value);
      setFormData({ ...formData, sizes: updatedSizes });
    } else if (name === 'colors') {
      const updatedColors = checked
        ? [...formData.colors, value]
        : formData.colors.filter((color) => color !== value);
      setFormData({ ...formData, colors: updatedColors });
    } else {
      setFormData({ ...formData, [name]: files ? files[0] : value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="add-product-container">
      <h2 className="form-title">Add New Product</h2>
      <form className="add-product-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="productName">Product Name</label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            required
          />
        </div>
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
          <label htmlFor="images">Images</label>
          <input
            type="file"
            id="images"
            name="images"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Size</label>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                name="sizes"
                value="S"
                checked={formData.sizes.includes('S')}
                onChange={handleChange}
              />
              S
            </label>
            <label>
              <input
                type="checkbox"
                name="sizes"
                value="M"
                checked={formData.sizes.includes('M')}
                onChange={handleChange}
              />
              M
            </label>
            <label>
              <input
                type="checkbox"
                name="sizes"
                value="L"
                checked={formData.sizes.includes('L')}
                onChange={handleChange}
              />
              L
            </label>
            <label>
              <input
                type="checkbox"
                name="sizes"
                value="XL"
                checked={formData.sizes.includes('XL')}
                onChange={handleChange}
              />
              XL
            </label>
            <label>
              <input
                type="checkbox"
                name="sizes"
                value="2XL"
                checked={formData.sizes.includes('2XL')}
                onChange={handleChange}
              />
              2XL
            </label>
            <label>
              <input
                type="checkbox"
                name="sizes"
                value="3XL"
                checked={formData.sizes.includes('3XL')}
                onChange={handleChange}
              />
              3XL
            </label>
          </div>
        </div>
        <div className="form-group">
          <label>Color</label>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                name="colors"
                value="Pink"
                checked={formData.colors.includes('Pink')}
                onChange={handleChange}
              />
              Pink
            </label>
            <label>
              <input
                type="checkbox"
                name="colors"
                value="Grey"
                checked={formData.colors.includes('Grey')}
                onChange={handleChange}
              />
              Grey
            </label>
            <label>
              <input
                type="checkbox"
                name="colors"
                value="Brown"
                checked={formData.colors.includes('Brown')}
                onChange={handleChange}
              />
              Brown
            </label>
            <label>
              <input
                type="checkbox"
                name="colors"
                value="LightPink"
                checked={formData.colors.includes('LightPink')}
                onChange={handleChange}
              />
              Light Pink
            </label>
            <label>
              <input
                type="checkbox"
                name="colors"
                value="Black"
                checked={formData.colors.includes('Black')}
                onChange={handleChange}
              />
              Black
            </label>
            <label>
              <input
                type="checkbox"
                name="colors"
                value="DarkBlue"
                checked={formData.colors.includes('DarkBlue')}
                onChange={handleChange}
              />
              Dark Blue
            </label>
            <label>
              <input
                type="checkbox"
                name="colors"
                value="Beige"
                checked={formData.colors.includes('Beige')}
                onChange={handleChange}
              />
              Beige
            </label>
            <label>
              <input
                type="checkbox"
                name="colors"
                value="LightBlue"
                checked={formData.colors.includes('LightBlue')}
                onChange={handleChange}
              />
              Light Blue
            </label>
            <label>
              <input
                type="checkbox"
                name="colors"
                value="White"
                checked={formData.colors.includes('White')}
                onChange={handleChange}
              />
              White
            </label>
            <label>
              <input
                type="checkbox"
                name="colors"
                value="DarkGreen"
                checked={formData.colors.includes('DarkGreen')}
                onChange={handleChange}
              />
              Dark Green
            </label>
            <label>
              <input
                type="checkbox"
                name="colors"
                value="LightGreen"
                checked={formData.colors.includes('LightGreen')}
                onChange={handleChange}
              />
              Light Green
            </label>
            <label>
              <input
                type="checkbox"
                name="colors"
                value="Orange"
                checked={formData.colors.includes('Orange')}
                onChange={handleChange}
              />
              Orange
            </label>
            <label>
              <input
                type="checkbox"
                name="colors"
                value="Yellow"
                checked={formData.colors.includes('Yellow')}
                onChange={handleChange}
              />
              Yellow
            </label>
            <label>
              <input
                type="checkbox"
                name="colors"
                value="Red"
                checked={formData.colors.includes('Red')}
                onChange={handleChange}
              />
              Red
            </label>
          </div>
        </div>
        <button type="submit" className="submit-button">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
