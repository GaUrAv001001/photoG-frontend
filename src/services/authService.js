// import axios from 'axios';

// const API_URL = import.meta.env.VITE_API_URL;

// export const fetchCurrentUser = async () => {
//   try {
//     const token = localStorage.getItem('accessToken'); // Retrieve token from local storage
//     const { data } = await axios.get(`${API_URL}/current-user`, {
//       headers: {
//         'Authorization': `Bearer ${token}`, // Send token in the Authorization header
//       },
//       withCredentials: true,
//     });
//     return data;
//   } catch (error) {
//     console.error("Error fetching current user:", error);
//     throw error;
//   }
// };

// export const login = async (email, password) => {
//   try {
//     const response = await axios.post(
//       `${API_URL}/login`,
//       { email, password },
//       { withCredentials: true }
//     );
//     // Store tokens in local storage
//     if (response.data.success) {
//       localStorage.setItem('accessToken', response.data.data.accessToken);
//       localStorage.setItem('refreshToken', response.data.data.refreshToken);
//     }
//     return response.data;
//   } catch (error) {
//     console.error("Login error:", error);
//     throw error;
//   }
// };

// // export const register = async (fullname, email, password, username, avatar) => {
// //   try {
// //     const response = await axios.post(
// //       `${API_URL}/register`,
// //       { fullname, email, password, username, avatar },
// //       { withCredentials: true }
// //     );

// //     return response.data;
// //   } catch (error) {
// //     console.error("Registration error:", error);
// //     throw error;
// //   }
// // };


// export const register = async (fullname, email, password, username, avatar) => {
//   try {
//     // Create a new FormData object
//     const formData = new FormData();
    
//     // Append the text fields and file (avatar)
//     formData.append('fullname', fullname);
//     formData.append('email', email);
//     formData.append('password', password);
//     formData.append('username', username);
//     formData.append('avatar', avatar); // The avatar file

//     const response = await axios.post(
//       `${API_URL}/register`,
//       formData,
//       {
//         headers: {
//           'Content-Type': 'multipart/form-data', // Set the content type to handle file upload
//         },
//         withCredentials: true
//       }
//     );

//     return response.data;
//   } catch (error) {
//     console.error("Registration error:", error);
//     throw error;
//   }
// };


// export const logout = async () => {
//   try {
//     const token = localStorage.getItem('accessToken'); // Retrieve token from local storage
//     const response = await axios.post(
//       `${API_URL}/logout`,
//       {},
//       {
//         headers: {
//           'Authorization': `Bearer ${token}`, // Send token in the Authorization header
//         },
//         withCredentials: true,
//       }
//     );
//     if (response.data.success) {
//       // Clear tokens from local storage
//       localStorage.removeItem('accessToken');
//       localStorage.removeItem('refreshToken');
//     }
//     return response.data;
//   } catch (error) {
//     console.error("Logout failed:", error);
//     throw error;
//   }
// };



// code 2

// import axios from 'axios';

// const API_URL = import.meta.env.VITE_API_URL;

// // Function to refresh the access token
// const refreshAccessToken = async () => {
//   try {
//     const response = await axios.post(`${API_URL}/refresh-token`, {}, { withCredentials: true });
//     if (response.data.success) {
//       localStorage.setItem('accessToken', response.data.data.accessToken); // Update access token
//       return response.data.data.accessToken;
//     }
//   } catch (error) {
//     console.error('Token refresh failed:', error);
//     throw error;
//   }
// };

// export const fetchCurrentUser = async () => {
//   try {
//     let token = localStorage.getItem('accessToken');
//     if (!token) {
//       // Attempt to refresh the access token
//       token = await refreshAccessToken();
//     }

//     const { data } = await axios.get(`${API_URL}/current-user`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//       withCredentials: true,
//     });

//     return data;
//   } catch (error) {
//     console.error('Error fetching current user:', error);
//     throw error;
//   }
// };

// export const login = async (email, password) => {
//   try {
//     const response = await axios.post(`${API_URL}/login`, { email, password }, { withCredentials: true });
//     if (response.data.success) {
//       localStorage.setItem('accessToken', response.data.data.accessToken);
//     }
//     return response.data;
//   } catch (error) {
//     console.error('Login error:', error);
//     throw error;
//   }
// };


// export const register = async (fullname, email, password, username, avatar) => {
//   try {
//     const formData = new FormData();
//     formData.append('fullname', fullname);
//     formData.append('email', email);
//     formData.append('password', password);
//     formData.append('username', username);
//     formData.append('avatar', avatar);

//     const response = await axios.post(`${API_URL}/register`, formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//       withCredentials: true,
//     });

//     return response.data;
//   } catch (error) {
//     console.error('Registration error:', error);
//     throw error;
//   }
// };

// export const logout = async () => {
//   try {
//     const token = localStorage.getItem('accessToken');
//     const response = await axios.post(`${API_URL}/logout`, {}, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//       withCredentials: true,
//     });
//     if (response.data.success) {
//       localStorage.removeItem('accessToken'); // Remove tokens
//     }
//     return response.data;
//   } catch (error) {
//     console.error('Logout failed:', error);
//     throw error;
//   }
// };


// cdoe 3

// import axios from 'axios';

// const API_URL = import.meta.env.VITE_API_URL;

// axios.defaults.withCredentials = true;
// // Function to refresh the access token
// const refreshAccessToken = async () => {
//   try {
//     const response = await axios.post(`${API_URL}/refresh-token`, {}, { withCredentials: true });
//     if (response.data.success) {
//       const newToken = response.data.data.accessToken;
//       localStorage.setItem('accessToken', newToken);
//       return newToken;
//     } else {
//       throw new Error('Failed to refresh token');
//     }
//   } catch (error) {
//     console.error('Token refresh failed:', error);
//     localStorage.removeItem('accessToken'); // Clear token if refresh fails
//     throw error;
//   }
// };

// export const fetchCurrentUser = async () => {
//   try {
//     let token = localStorage.getItem('accessToken');
//     if (!token) {
//       token = await refreshAccessToken(); // Attempt to refresh if no token
//     }
//     axios.withCredentials = true;
//     const { data } = await axios.get(`${API_URL}/current-user`, {
//       headers: { Authorization: `Bearer ${token}` },
//       withCredentials: true,
//     });

//     return data;
//   } catch (error) {
//     console.error('Error fetching current user:', error);
//     localStorage.removeItem('accessToken'); // Clear token on error
//     throw error;
//   }
// };

// export const login = async (email, password) => {
//   try {
//     const response = await axios.post(`${API_URL}/login`, { email, password }, { withCredentials: true });
//     if (response.data.success) {
//       localStorage.setItem('accessToken', response.data.data.accessToken);
//       console.log('Token Stored 2:', localStorage.getItem('accessToken'));
//     }
//     return response.data;
//   } catch (error) {
//     console.error('Login error:', error);
//     throw error;
//   }
// };

// export const register = async (fullname, email, password, username, avatar) => {
//   try {
//     const formData = new FormData();
//     formData.append('fullname', fullname);
//     formData.append('email', email);
//     formData.append('password', password);
//     formData.append('username', username);
//     formData.append('avatar', avatar);

//     const response = await axios.post(`${API_URL}/register`, formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//       withCredentials: true,
//     });

//     return response.data;
//   } catch (error) {
//     console.error('Registration error:', error);
//     throw error;
//   }
// };

// // export const logout = async () => {
// //   try {
// //     const token = localStorage.getItem('accessToken');
// //     const response = await axios.post(`${API_URL}/logout`, {}, {
// //       headers: {
// //         Authorization: `Bearer ${token}`,
// //       },
// //       withCredentials: true,
// //     });
// //     if (response.data.success) {
// //       localStorage.removeItem('accessToken'); // Remove tokens
// //     }
// //     return response.data;
// //   } catch (error) {
// //     console.error('Logout failed:', error);
// //     throw error;
// //   }
// // };


// export const logout = async () => {
//   try {
//     // Remove the access token from localStorage, as it's no longer needed
//     localStorage.removeItem('accessToken'); 

//     // Send logout request without the Authorization header, since cookies will be sent automatically
//     const response = await axios.post(`${API_URL}/logout`, {}, {
//       withCredentials: true,  // Ensure cookies are sent with the request
//     });

//     // Check if the backend confirms the logout was successful
//     if (response.data.success) {
//       console.log('User logged out successfully');
//     }
//     return response.data;
//   } catch (error) {
//     console.error('Logout failed:', error);
//     throw error;
//   }
// };



// code 4

import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

axios.defaults.withCredentials = true;

// Function to refresh the access token
const refreshAccessToken = async () => {
  try {
    const response = await axios.post(`${API_URL}/refresh-token`, {}, { withCredentials: true });
    if (response.data.success) {
      return response.data.data.accessToken; // No need to store the token in localStorage
    } else {
      throw new Error('Failed to refresh token');
    }
  } catch (error) {
    console.error('Token refresh failed:', error);
    throw error;
  }
};

export const fetchCurrentUser = async () => {
  try {
    // Since token is stored in HttpOnly cookie, no need to retrieve it from localStorage
    const { data } = await axios.get(`${API_URL}/current-user`, {
      withCredentials: true, // Ensure cookies are sent with the request
    });
    console.log("user Data:-> ", data);
    return data;
  } catch (error) {
    console.error('Error fetching current user:', error);
    throw error;
  }
};

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password }, { withCredentials: true });
    return response.data; // Token is handled by cookies, no need to store it locally
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export const register = async (fullname, email, password, username, avatar) => {
  try {
    const formData = new FormData();
    formData.append('fullname', fullname);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('username', username);
    formData.append('avatar', avatar);

    const response = await axios.post(`${API_URL}/register`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
};

export const logout = async () => {
  try {
    // Send logout request without needing to include Authorization headers since cookies will be sent automatically
    const response = await axios.post(`${API_URL}/logout`, {}, {
      withCredentials: true,  // Ensure cookies are sent with the request
    });

    if (response.data.success) {
      console.log('User logged out successfully');
    }
    return response.data;
  } catch (error) {
    console.error('Logout failed:', error);
    throw error;
  }
};
