import httpService from "./httpService";

export const loginApi = async (data) => {
  try {
    const response = await httpService.post(`/auth/login`, data);
    return response.data;
  } catch (error) {
    console.error("Login error: ", error.response?.data || error.message);
    throw new Error("Failed to login");
  }
};

export const signupApi = async (data) => {
  try {
    const response = await httpService.post(`/auth/register`, data);
    return response.data;
  } catch (error) {
    console.error("Signup error: ", error.response?.data || error.message);
    throw new Error("Failed to signup");
  }
};

export const bookRoomApi = async (formData) => {
  try {
    const response = await httpService.post(`/bookRoom`, formData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (err) {
    throw new Error(err.response.data.message || "Booking failed");
  }
};
