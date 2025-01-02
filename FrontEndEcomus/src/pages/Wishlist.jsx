import React, { useState } from "react";
import images1 from "../assets/asset_15.jpeg";
import images2 from "../assets/asset_16.jpeg";
import images3 from "../assets/asset_17.jpeg";
import Footers from "../components/Footer";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      name: "Stylish Jacket",
      price: "$120",
      image: images1,
    },
    {
      id: 2,
      name: "Modern Sneakers",
      price: "$85",
      image: images2,
    },
    {
      id: 3,
      name: "Elegant Watch",
      price: "$200",
      image: images3,
    },
  ]);

 


   

  return (
    <div className="container mx-auto p-4">
     <div>
     <h1 className="text-2xl font-bold mb-6 text-center">My Wishlist</h1>
      {wishlist.length === 0 ? (
        <p className="text-gray-500 text-center">Your wishlist is empty.</p>
      ) : (
        <div className="overflow-x-auto flex justify-center">
          <table className="table-auto w-full max-w-4xl border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-2 py-2">Image</th>
                <th className="border border-gray-300 px-2 py-2">Name</th>
                <th className="border border-gray-300 px-2 py-2">Price</th>
                <th className="border border-gray-300 px-2 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {wishlist.map((item) => (
                <tr key={item.id} className="text-center">
                  <td className="border border-gray-300 px-2 py-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 object-cover mx-auto"
                    />
                  </td>
                  <td className="border border-gray-300 px-2 py-2">{item.name}</td>
                  <td className="border border-gray-300 px-2 py-2">{item.price}</td>
                  <td className="border border-gray-300 px-2 py-2">
                    <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
                      <button
                        
                        className="bg-green-500 text-white text-xs px-3 py-1 rounded-lg hover:bg-green-600 inline-block"
                      >
                        Add to Cart
                      </button>
                      <button
                    
                        className="bg-red-500 text-white text-xs px-3 py-1 rounded-lg hover:bg-red-600 inline-block"
                      >
                        Remove
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
     </div>
     <Footers/>
    </div>
  );
};

export default Wishlist;
