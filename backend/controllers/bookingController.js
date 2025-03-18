import Booking from "../models/Booking.js";

export const bookRoom = async (req, res) => {
  const { userId, roomId, bookingDate } = req.body;
  try {
    const newBooking = new Booking({ userId, roomId, bookingDate });
    await newBooking.save();
    res.status(201).send("Booking confirmed");
  } catch (err) {
    res.status(500).send("Server error");
  }
};

export const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate("userId");
    res.json(bookings);
  } catch (err) {
    res.status(500).send("Server error");
  }
};
