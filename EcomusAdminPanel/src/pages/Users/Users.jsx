import React from "react";

const Users = () => {
  const users = [
    {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      mobileNo: "1234567890",
      gender: "Male",
      dateOfBirth: "1990-01-01",
      address: "123 Main St, Anytown, USA",
    },
    {
      firstName: "Jane",
      lastName: "Doe",
      email: "jane.doe@example.com",
      mobileNo: "0987654321",
      gender: "Female",
      dateOfBirth: "1992-02-02",
      address: "456 Main St, Anytown, USA",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-5">
      <h1 className="text-3xl font-bold mb-5 text-center">User Data</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-300">Name</th>
              <th className="py-2 px-4 border-b border-gray-300">Email</th>
              <th className="py-2 px-4 border-b border-gray-300">Mobile No</th>
              <th className="py-2 px-4 border-b border-gray-300">Gender</th>
              <th className="py-2 px-4 border-b border-gray-300">Date of Birth</th>
              <th className="py-2 px-4 border-b border-gray-300">Address</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b border-gray-300">{user.firstName} {user.lastName}</td>
                <td className="py-2 px-4 border-b border-gray-300">{user.email}</td>
                <td className="py-2 px-4 border-b border-gray-300">{user.mobileNo}</td>
                <td className="py-2 px-4 border-b border-gray-300">{user.gender}</td>
                <td className="py-2 px-4 border-b border-gray-300">{user.dateOfBirth}</td>
                <td className="py-2 px-4 border-b border-gray-300">{user.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
