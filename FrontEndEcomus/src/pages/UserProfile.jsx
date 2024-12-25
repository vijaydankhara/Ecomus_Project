import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function UserProfile() {
  const initialUser = {
    firstName: "",
    lastName: "",
    mobileNo: "",
    dateOfBirth: "",
    address: "",
  };
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [user, setUser] = useState(initialUser);


  const inputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:1122/api/user/getuser/${id}`)
      .then((response) => {
        setUser(response.data || initialUser);
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
        setUser(initialUser);
      });
  }, [id]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:1122/api/user/updateuser/${id}`, user)
      .then((response) => {
        alert(response.data.message || "User updated successfully");
        navigate("/");
      })
      .catch((error) => {
        console.error("Error updating user:", error);
      });
  };
  

  return (
    <div className="max-w-md mx-auto my-10 p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
      <Link to="/" className="text-red-500 font-bold font-serif mb-5 block">
        Back
      </Link>
      <h3 className="text-2xl font-bold mb-5 text-center">Update User</h3>

      <form onSubmit={handleSubmit}>
        {/* First Name */}
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-700 mb-2">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={user.firstName}
            onChange={inputChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>

        {/* Last Name */}
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-700 mb-2">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={user.lastName}
            onChange={inputChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>

        {/* Mobile Number */}
        <div className="mb-4">
          <label htmlFor="mobileNo" className="block text-gray-700 mb-2">
            Mobile Number
          </label>
          <input
            type="text"
            name="mobileNo"
            value={user.mobileNo}
            onChange={inputChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>

        {/* Date of Birth */}
        <div className="mb-4">
          <label htmlFor="dateOfBirth" className="block text-gray-700 mb-2">
            Date of Birth
          </label>
          <input
            type="date"
            name="dateOfBirth"
            value={user.dateOfBirth}
            onChange={inputChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>

        {/* Address */}
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700 mb-2">
            Address
          </label>
          <textarea
            name="address"
            value={user.address}
            onChange={inputChange}
            className="w-full px-3 py-2 border rounded"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserProfile;
