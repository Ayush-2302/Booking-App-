import express from "express";
import { bookRoom, getBookings } from "../controllers/bookingController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/bookRoom", authMiddleware, bookRoom);

router.get("/bookings", getBookings);

export default router;
