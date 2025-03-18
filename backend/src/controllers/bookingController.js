import Booking from "../models/Booking.js";

export const bookRoom = async (req, res) => {
  const { roomId, bookingDate } = req.body;
  console.log(req.user);
  const { id } = req.user;
  
  try {
    const newBooking = new Booking({ userId: id, roomId, bookingDate });
    await newBooking.save();
    res.status(201).json({ message: "Booking confirmed", success: true });
  } catch (err) {
    res.status(500).json({ message: err.message, success: false });
  }
};

export const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate("userId");
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message, success: false });
  }
};
