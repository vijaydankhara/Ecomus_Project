import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AdminProfile() {
  const [admin, setAdmin] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    address: "",
  });

  const [token, setToken] = useState();
  const [isLoading, setIsLoading] = useState(false);

  // Fetch admin details
  useEffect(() => {
    const fetchAdmin = async () => {
      if (!token) return;
      setIsLoading(true);
      try {
        const response = await axios.get(
          "http://localhost:1122/api/admin/getadmin",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setAdmin(response.data);
        toast.success("Admin details fetched successfully!");
      } catch (error) {
        console.error("Error fetching admin details:", error);
        toast.error("Failed to fetch admin details.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchAdmin();
  }, [token]);

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setAdmin({ ...admin, [name]: value });
  };

  // Update admin profile
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        "http://localhost:1122/api/admin/updateadmin",
        admin,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success(response.data.message || "Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile.");
    }
  };

  if (isLoading) {
    return <div>Loading admin details...</div>;
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 border border-gray-300 rounded-lg bg-white shadow-md">
      <ToastContainer position="top-right" autoClose={3000} />
      <form onSubmit={handleUpdate}>
        <h1 className="text-center text-2xl font-bold text-blue-600 mb-6">
          Admin Profile
        </h1>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            First Name:
          </label>
          <input
            type="text"
            name="firstName"
            value={admin.firstName}
            onChange={handleProfileChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Last Name:
          </label>
          <input
            type="text"
            name="lastName"
            value={admin.lastName}
            onChange={handleProfileChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Gender:
          </label>
          <input
            type="text"
            name="gender"
            value={admin.gender}
            onChange={handleProfileChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Date of Birth:
          </label>
          <input
            type="date"
            name="dateOfBirth"
            value={admin.dateOfBirth}
            onChange={handleProfileChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Address:
          </label>
          <input
            type="text"
            name="address"
            value={admin.address}
            onChange={handleProfileChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
}

export default AdminProfile;
