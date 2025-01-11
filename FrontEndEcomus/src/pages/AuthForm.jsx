import React, { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const navigate = useNavigate();

  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNo: "",
    password: "",
    gender: "",
    dateOfBirth: "",
    address: "",
  });
  const [errors, setErrors] = useState({});
  const [isLogin, setIsLogin] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    const email = localStorage.getItem("userEmail");

    if (token && email) {
      setIsLogin(true);
      setUserEmail(email);
    }
  }, []);

  const toggleForm = () => {
    setIsRegister(!isRegister);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      mobileNo: "",
      password: "",
      gender: "",
      dateOfBirth: "",
      address: "",
    });
    setErrors({});
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const formErrors = {};
    if (isRegister) {
      if (!formData.firstName) formErrors.firstName = "Firstname is required";
      if (!formData.lastName) formErrors.lastName = "Lastname is required";
      if (!formData.gender) formErrors.gender = "Gender is required";
      if (!formData.mobileNo) formErrors.mobileNo = "Mobile number is required";
      if (!formData.dateOfBirth) formErrors.dateOfBirth = "Date of Birth is required";
      if (!formData.address) formErrors.address = "Address is required";
    }
    if (!formData.email || !validateEmail(formData.email)) {
      formErrors.email = "Valid email is required";
    }
    if (!formData.password) {
      formErrors.password = "Password is required";
    }
    return formErrors;
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    try {
      if (isRegister) {
        await axios.post("http://localhost:1122/api/user/users/registeruser", formData);
        toast.success("User registered successfully!");
        toggleForm();
      } else {
        const response = await axios.post("http://localhost:1122/api/user/users/loginuser", {
          email: formData.email,
          password: formData.password,
        });

        const token = response.data.token;
        localStorage.setItem("userToken", token);
        localStorage.setItem("userEmail", formData.email);
        setIsLogin(true);
        setUserEmail(formData.email);
        toast.success("Login successful!");
      }
      resetForm();
    } catch (error) {
      toast.error(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userEmail");
    setIsLogin(false);
    setUserEmail("");
    toast.success("Logged out successfully!");
  };

  return (
    <div className="max-w-md mx-auto my-10 p-6 border border-gray-300 rounded-lg shadow-lg bg-[#c7abfe] relative">
      <Toaster />
      {isLogin && (
        <div className="absolute top-12  right-0 p-4 text-[#3f1c1c] font-bold">
          {userEmail}
        </div>
      )}
      <h2 className="text-2xl font-bold mb-5 text-center">
        {isRegister ? "User Registration" : "User Login"}
      </h2>
      <form onSubmit={onSubmitForm}>
        {isRegister && (
          <>
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Joe"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
              />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="block text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Root"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
              />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="mobileNo" className="block text-gray-700">
                Mobile No
              </label>
              <input
                type="text"
                id="mobileNo"
                name="mobileNo"
                placeholder="+91 9876543210"
                value={formData.mobileNo}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
              />
              {errors.mobileNo && <p className="text-red-500 text-sm">{errors.mobileNo}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="gender" className="block text-gray-700">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="dateOfBirth" className="block text-gray-700">
                Date of Birth
              </label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
              />
              {errors.dateOfBirth && <p className="text-red-500 text-sm">{errors.dateOfBirth}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block text-gray-700">
                Address
              </label>
              <textarea
                id="address"
                name="address"
                placeholder="Enter your address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
              ></textarea>
              {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
            </div>
          </>
        )}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="joe23@gmail.com"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-green-500 text-white rounded hover:bg-green-700"
        >
          {isRegister ? "Register" : "Login"}
        </button>
      </form>
      {isLogin ? (
        <button
          className="mt-4 w-full py-2 px-4 bg-red-500 text-white rounded hover:bg-red-700"
          onClick={handleLogout}
        >
          Logout
        </button>
      ) : (
        <button
          className="mt-4 w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700"
          onClick={toggleForm}
        >
          {isRegister ? "Switch to Login" : "Switch to Registration"}
        </button>
      )}
    </div>
  );
};

export default AuthForm;
