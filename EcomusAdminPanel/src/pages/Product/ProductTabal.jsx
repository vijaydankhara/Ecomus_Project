import React from "react";

const ProductTable = () => {
  const products = [
    {
      productName: "Oppo",
      description: "8/256GB",
      price: "35999",
    },
    {
      productName: "Vivo",
      description: "8/128GB",
      price: "23456",
    },
  ];

  const handleEdit = (productName) => {
    // Handle edit action here
    console.log(`Edit product: ${productName}`);
  };

  const handleDelete = (productName) => {
    // Handle delete action here
    console.log(`Delete product: ${productName}`);
  };

  return (
    <div className="max-w-5xl mx-auto p-5">
      <h1 className="text-3xl font-bold mb-5 text-center">Product Data</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-4 border-b text-center border-gray-300 ">Product Name</th>
              <th className="py-3 px-4 border-b text-center border-gray-300 ">Description</th>
              <th className="py-3 px-4 border-b text-center border-gray-300 ">Price</th>
              <th className="py-3 px-4 border-b border-gray-300 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="py-3 px-4 border-b text-center border-gray-300">{product.productName}</td>
                <td className="py-3 px-4 border-b text-center border-gray-300">{product.description}</td>
                <td className="py-3 px-4 border-b text-center border-gray-300">{product.price}</td>
                <td className="py-3 px-4 border-b text-center border-gray-300">
                  <div className="flex justify-center space-x-2">
                    <button
                      onClick={() => handleEdit(product.productName)}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(product.productName)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
