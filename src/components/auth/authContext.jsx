// // code 5
// import React, { createContext, useState, useEffect } from 'react';
// import { login, logout, fetchCurrentUser, register } from '../../services/authService';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true); // Indicates whether user auth is being determined

//   // Fetch user info on initial load or page refresh
//   useEffect(() => {
//     const fetchLoggedInUser = async () => {
//       setLoading(true); // Start loading
//       try {
//         const response = await fetchCurrentUser();
//         if (response && response.success && response.data) {
//           setUser(response.data); // Set user in state
//         }
//       } catch (error) {
//         console.error('Error fetching user:', error);
//         setUser(null); // Clear user on error
//       } finally {
//         setLoading(false); // End loading state
//       }
//     };

//     fetchLoggedInUser();
//   }, []);

//   const loginUser = async (email, password) => {
//     setLoading(true);
//     try {
//       const response = await login(email, password);
//       if (response && response.success && response.data.user) {
//         setUser(response.data.user); // Set user in state after login
//       } else {
//         console.error('Login response is invalid:', response);
//       }
//     } catch (error) {
//       console.error('Login failed:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const registerUser = async (fullname, email, password, username, avatar) => {
//     setLoading(true);
//     try {
//       const response = await register(fullname, email, password, username, avatar);
//       if (response && response.success) {
//         alert('User registered successfully');
//       } else {
//         console.error('Registration failed:', response);
//       }
//     } catch (error) {
//       console.error('Registration failed:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const logoutUser = async () => {
//     setLoading(true);
//     try {
//       const response = await logout();
//       if (response?.success) {
//         setUser(null); // Clear user on logout
//       } else {
//         console.error('Logout failed:', response);
//       }
//     } catch (error) {
//       console.error('Logout failed:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ user, loginUser, logoutUser, loading, registerUser }}>
//       {!loading && children} {/* Only render children after auth check */}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;