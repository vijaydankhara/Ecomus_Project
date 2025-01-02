import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Footers from "../components/Footer";

function UserProfile() {
  const navigate = useNavigate();
  const { id } = useParams();
  const API = `http://localhost:1122/api/user/getuser/${id}`;

  const initialUser = {
    firstName: "",
    lastName: "",
    mobileNo: "",
    dateOfBirth: "",
    address: "",
  };

  const [user, setUser] = useState(initialUser);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("userToken");
        if (!token) {
          throw new Error("Unauthorized: Token not found");
        }
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.get(API, config);
        setUser(response.data || initialUser);
      } catch (err) {
        console.error("Error fetching user data:", err);
        setError("Failed to fetch user data. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchUser();
  }, [API]);

  const inputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("userToken");
      if (!token) {
        throw new Error("Unauthorized: Token not found");
      }
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.put(
        `http://localhost:1122/api/user/updateuser/${id}`,
        user,
        config
      );

      alert(response.data.message || "User updated successfully");
      navigate("/");
    } catch (err) {
      console.error("Error updating user:", err);
      setError("Failed to update user data. Please try again.");
    }
  };

  if (isLoading) {
    return <div className="text-center my-10">Loading...</div>;
  }

  return (
    <div>
      <div className="max-w-md mx-auto my-10 p-6 border border-blue-800 bg-orange-200 rounded-lg shadow-lg">
        <Link to="/" className="text-green-800 font-bold font-serif mb-5 block">
          Back
        </Link>
        <h3 className="text-2xl font-bold mb-5 text-center">User Update</h3>

        {error && <div className="mb-4 text-red-500">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-700 mb-2">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              value={user.firstName}
              onChange={inputChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-gray-700 mb-2">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              value={user.lastName}
              onChange={inputChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="mobileNo" className="block text-gray-700 mb-2">
              Mobile Number
            </label>
            <input
              id="mobileNo"
              type="text"
              name="mobileNo"
              value={user.mobileNo}
              onChange={inputChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="dateOfBirth" className="block text-gray-700 mb-2">
              Date of Birth
            </label>
            <input
              id="dateOfBirth"
              type="date"
              name="dateOfBirth"
              value={user.dateOfBirth}
              onChange={inputChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700 mb-2">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              value={user.address}
              onChange={inputChange}
              className="w-full px-3 py-2 border rounded"
              required
              autoComplete="true"
            ></textarea>
          </div>
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
      <Footers />
    </div>
  );
}

export default UserProfile;
