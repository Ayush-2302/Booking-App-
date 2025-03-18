import React, { useState } from "react";
import { FaLock, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { loginApi } from "../service/apiService";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await loginApi(formData);
      console.log(response);
      if (response.success) {
        localStorage.setItem("token", response.token);
        navigate("/");
      }
    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="lg:w-1/4 md:w-1/2 w-11/12 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="flex items-center border border-gray-300 rounded-md">
              <FaUser className="ml-2 text-gray-500" />
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 text-gray-700 border-none focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-md">
              <FaLock className="ml-2 text-gray-500" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full p-2 text-gray-700 border-none focus:outline-none"
              />
            </div>
          </div>
          <Link
            to="/signup"
            className="block text-sm float-right text-teal-600 hover:text-teal-700"
          >
            Sign up for an account
          </Link>

          <button
            type="submit"
            className="w-full p-2 mt-4 text-white bg-teal-600 rounded-md hover:bg-teal-700"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Log In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
