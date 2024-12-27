import React, { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate,Link } from "react-router-dom";


const RegisterLogin = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNo: '',
    password: '',
    gender: '',
    dateOfBirth: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLogin) {
      try {
        const response = await axios.post('http://localhost:1122/api/admin/loginadmin', {
          email: formData.email,
          password: formData.password,
        });
        toast.success('Login successful!', { position: 'top-right' });
        setIsAuthenticated(true);
        navigate("/shop");
      } catch (error) {
        console.error('Error logging in:', error);
        toast.error('Invalid email or password', { position: 'top-right' });
      }
    } else {
      try {
        const response = await axios.post('http://localhost:1122/api/admin/registeradmin', formData);
        toast.success('User registered successfully!', { position: 'top-right' });
        setIsLogin(true);
      } catch (error) {
        console.error('Error registering user:', error);
        toast.error('Error registering user', { position: 'top-right' });
      }
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      mobileNo: '',
      password: '',
      gender: '',
      dateOfBirth: '',
    
    });
    toast.success('Logged out successfully!', { position: 'top-right' });
  };

  return (
    <div className="max-w-md mx-auto my-10 p-6 border border-gray-300 rounded-lg shadow-lg bg-[#f4ad5c]">
      <Link to={"/"} className="text-red-500 font-bold font-serif ">Back</Link>
      <Toaster />
      <h2 className="text-2xl font-bold mb-5 text-center">{isLogin ? 'Admin Login' : 'Admin Registration'}</h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <>
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-gray-700">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Joe"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="block text-gray-700">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Root"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="mobileNo" className="block text-gray-700">Mobile No</label>
              <input
                type="text"
                id="mobileNo"
                name="mobileNo"
                placeholder="+91 9876543210"
                value={formData.mobileNo}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="gender" className="block text-gray-700">Gender</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="dateOfBirth" className="block text-gray-700">Date of Birth</label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            
          </>
        )}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="joe23@gmail.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        {isLogin && (
          <div className="mb-4">
            <a href="/forgot-password" className="text-blue-500 hover:underline">Forgot Password?</a>
          </div>
        )}
        <button type="submit" className="w-full py-2 px-4 bg-green-500 text-white rounded hover:bg-green-700">
          {isLogin ? 'Login' : 'Register'}
        </button>
      </form>
      {isAuthenticated ? (
        <button className="mt-4 w-full py-2 px-4 bg-red-500 text-white rounded hover:bg-red-700" onClick={handleLogout}>
          Logout
        </button>
      ) : (
        <button className="mt-4 w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700" onClick={toggleForm}>
          {isLogin ? 'Switch to Registration' : 'Switch to Login'}
        </button>
      )}
    </div>
  );
};

export default RegisterLogin;

