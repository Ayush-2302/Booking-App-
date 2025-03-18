import React, { useState } from "react";
import { FaLock, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { signupApi } from "../service/apiService";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await signupApi(formData);
      if (response.success) {
        alert("User registered successfully");
        setFormData({
          email: "",
          password: "",
        });
        navigate("/login");
      }
    } catch (err) {
      setError("Error registering user. Please try again.");
      console.error(err);
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
    <div className="flex h-screen justify-center items-center">
      <div className="lg:w-1/4 md:w-1/2 w-11/12 mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">Signup</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}

        {loading ? (
          <div className="flex justify-center items-center">
            <div className="w-16 h-16 border-4 border-t-4 border-teal-600 border-solid rounded-full animate-spin"></div>
          </div>
        ) : (
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
              to="/login"
              className="block text-sm float-right text-teal-600 hover:text-teal-700"
            >
              Already have an account? Login
            </Link>

            <button
              type="submit"
              className="w-full p-2 mt-4 text-white bg-teal-600 rounded-md hover:bg-teal-700"
              disabled={loading}
            >
              {loading ? "Signing up..." : "Sign Up"}{" "}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignupForm;
