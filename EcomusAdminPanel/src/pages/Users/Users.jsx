import React, { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem("adminToken");

      if (!token) {
        setError("Admin token not found. Please log in as admin.");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get("http://localhost:1122/api/user/getalluser", 
          {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
        console.log(response.data);
        setUsers(response.data || []);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching users:", err);
        setError(err.response?.data?.message || "Failed to fetch user data.");
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div className="text-center py-5">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 py-5">Error: {error}</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-5">
    <h1 className="text-3xl font-bold mb-5 text-center">User Data</h1>
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-400 rounded-lg shadow-lg">
        <thead>
          <tr className="bg-gray-200 text-gray-800">
            <th className="py-2 px-4 border border-gray-800">Name</th>
            <th className="py-2 px-4 border border-gray-800">Email</th>
            <th className="py-2 px-4 border border-gray-800">Mobile No</th>
            <th className="py-2 px-4 border border-gray-800">Gender</th>
            <th className="py-2 px-4 border border-gray-800">Birthdate</th>
            <th className="py-2 px-4 border border-gray-800">Address</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(users) &&
            users.map((user, index) => (
              <tr
                key={index}
                className={`hover:bg-gray-100 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="py-2 px-4 border border-gray-800">
                  {user.firstName} {user.lastName}
                </td>
                <td className="py-2 px-4 border border-gray-800">{user.email}</td>
                <td className="py-2 px-4 border border-gray-800">{user.mobileNo}</td>
                <td className="py-2 px-4 border border-gray-800">{user.gender}</td>
                <td className="py-2 px-4 border border-gray-800">{user.dateOfBirth}</td>
                <td className="py-2 px-4 border border-gray-800">{user.address}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  </div>
  );
};

export default Users;
