import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

axios.defaults.withCredentials = true;

// Function to refresh the access token
const refreshAccessToken = async () => {
  try {
    const response = await axios.post(
      `${API_URL}/refresh-token`,
      {},
      { withCredentials: true }
    );
    if (response.data.success) {
      return response.data.data.accessToken; // No need to store the token in localStorage
    } else {
      throw new Error("Failed to refresh token");
    }
  } catch (error) {
    console.error("Token refresh failed:", error);
    throw error;
  }
};

// Function to fetch the current user
export const fetchCurrentUser = async () => {
  try {
    // Since token is stored in HttpOnly cookie, no need to retrieve it from localStorage
    const { data } = await axios.get(`${API_URL}/current-user`, {
      withCredentials: true, // Ensure cookies are sent with the request
    });
    console.log("user Data:-> ", data);
    return data;
  } catch (error) {
    console.error("Error fetching current user:", error);
    throw error;
  }
};

// Function to login
export const login = async (email, password) => {
  try {
    const response = await axios.post(
      `${API_URL}/login`,
      { email, password },
      { withCredentials: true }
    );
    return response.data; // Token is handled by cookies, no need to store it locally
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

// Function to register user
export const register = async (userData) => {
  try {
    // const formData = new FormData();
    // formData.append("fullname", fullname);
    // formData.append("email", email);
    // formData.append("password", password);
    // formData.append("username", username);
    // formData.append("avatar", avatar);

    const formData = new FormData();
    Object.keys(userData).forEach((key) =>
      formData.append(key, userData[key])
    );


    console.log("formData: ", formData)

    const response = await axios.post(`${API_URL}/register`, formData, {
      headers: {
        "Content-Type": "multipart/form-data", // Ensure correct header for file uploads
      },
      withCredentials: true, // Ensure cookies are sent with the request
    });

    return response.data;
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
};

// Function to logout
export const logout = async () => {
  try {
    // Send logout request without needing to include Authorization headers since cookies will be sent automatically
    const response = await axios.post(
      `${API_URL}/logout`,
      {},
      {
        withCredentials: true, // Ensure cookies are sent with the request
      }
    );
    console.log("i am logged out!");

    if (response.data.success) {
      console.log("User logged out successfully");
    }
    return response.data;
  } catch (error) {
    console.error("Logout failed:", error);
    throw error;
  }
};
