import express from "express";
import authRouter from "./routes/authRoutes.js";
import bookingRouter from "./routes/bookingRoutes.js";
import ExpressError from "./utils/ExpressError.js";
import cors from "cors";
const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api", bookingRouter);

app.use("*", (req, res, next) => {
  throw new ExpressError(404, "Page Not Found !!", false);
  next();
});

app.use((err, req, res, next) => {
  let {
    status = 500,
    message = "Internal server issue",
    success = false,
  } = err;
  res.status(status).json({ message, success });
});

export default app;
