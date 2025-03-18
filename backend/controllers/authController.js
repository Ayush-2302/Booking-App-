import bcrypt from "bcryptjs";
import jwt from "jwt-simple";
import User from "../models/User.js";

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(401).send("User not found");

    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) return res.status(401).send("Invalid credentials");

    const payload = { id: user._id };
    const token = jwt.encode(payload, "your-secret-key");
    res.json({ token });
  } catch (err) {
    res.status(500).send("Server error");
  }
};
