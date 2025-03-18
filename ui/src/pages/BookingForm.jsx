import React, { useEffect, useState } from "react";
import { FaBed, FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { bookRoomApi } from "../service/apiService";

const BookingForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    roomId: "",
    bookingDate: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await bookRoomApi(formData);
      console.log(response);
      if (response.success) {
        navigate("/bookings");
      }
    } catch (err) {
      setError("Booking failed. Please try again.");
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
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="lg:w-1/4 md:w-1/2 w-11/12 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">Book a Room</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Room ID
            </label>
            <div className="flex items-center border border-gray-300 rounded-md">
              <FaBed className="ml-2 text-gray-500" />
              <input
                type="text"
                name="roomId"
                value={formData.roomId}
                onChange={handleChange}
                required
                className="w-full p-2 text-gray-700 border-none focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Booking Date
            </label>
            <div className="flex items-center border border-gray-300 rounded-md">
              <FaCalendarAlt className="ml-2 text-gray-500" />
              <input
                type="date"
                name="bookingDate"
                value={formData.bookingDate}
                onChange={handleChange}
                required
                className="w-full p-2 text-gray-700 border-none focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full p-2 mt-4 text-white bg-teal-600 rounded-md hover:bg-teal-700"
            disabled={loading}
          >
            {loading ? "Booking..." : "Book Room"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
