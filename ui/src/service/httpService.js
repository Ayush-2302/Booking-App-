import axios from "axios";

const httpService = axios.create({
  // baseURL: "http://localhost:8080/api",
  baseURL: "https://booking-app-x040.onrender.com/api",
});

export default httpService;
