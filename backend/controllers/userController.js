import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import asyncWrapper from "../src/utils/asyncWrapper.js";
import ExpressError from "../src/utils/ExpressError.js";

export const signup = asyncWrapper(async (req, res) => {
  const { name, email, password, phone } = await req.body;
  const id = uuid();

  if (!id || !name || !email || !password || !phone) {
    throw new ExpressError(400, "Field cannot empty !");
  }

  const salt = await bcrypt.genSalt(10);
  console.log(salt);

  const secPassword1 = await bcrypt.hash(password, 10);
  console.log(secPassword1);
  // const q =
  //   "INSERT INTO   authuser (id,name,email,password,phone) values(?,?,?,?,?)";
  // const value = [id, name, email, secPassword, phone];
  // const [result] = await connect.query(q, value);
  // console.log(result);
  // res.status(200).send({ result, success: true });
  res.send("hello");
});
