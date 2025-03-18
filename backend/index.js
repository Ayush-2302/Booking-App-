import dotenv from "dotenv";
dotenv.config();

import app from "./src/app.js";
import connectToDB from "./src/db/dbConfig.js";

const port = process.env.PORT || 8000;

app.listen(port, () => {
  connectToDB();
  console.log(`Listening on port ${port}`);
});
