import React, { useEffect, useState } from "react";
import axios from "axios";
import httpService from "../service/httpService";

const BookingsList = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await httpService.get("/bookings");
        setBookings(response.data);
      } catch (err) {
        console.error("Failed to fetch bookings:", err);
      }
    };
    fetchBookings();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-4">All Bookings</h2>
      <ul className="space-y-2">
        {bookings.map((booking) => (
          <li key={booking._id} className="border-b p-2">
            <p>Room ID: {booking.roomId}</p>
            <p>Booking Date: {booking.bookingDate}</p>
            <p>User: {booking.userId?.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingsList;
