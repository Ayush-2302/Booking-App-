import axios from "axios";

const httpService = axios.create({
  baseURL: "https://booking-app-x040.onrender.com/api",
});

export default httpService;
