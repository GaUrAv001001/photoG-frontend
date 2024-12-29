// import React, { createContext, useState, useEffect } from 'react';
// import { login, logout, fetchCurrentUser, register } from '../../services/authService';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // useEffect(() => {
//   //   const fetchLoggedInUser = async () => {
//   //     const token = localStorage.getItem('accessToken'); // Retrieve token from local storage
//   //     if (token) {
//   //       try {
//   //         const response = await fetchCurrentUser();
//   //         if (response && response.user) {
//   //           setUser(response.user);
//   //         } else {
//   //           setUser(null);
//   //         }
//   //       } catch (error) {
//   //         setUser(null);
//   //         console.log("User not logged in");
//   //       }
//   //     } else {
//   //       setUser(null);
//   //     }
//   //     setLoading(false);
//   //   };

//   //   fetchLoggedInUser();
//   // }, []);


//   useEffect(() => {
//     const fetchLoggedInUser = async () => {
//       const token = localStorage.getItem('accessToken'); // Retrieve token from local storage
//       if (token) {
//         try {
//           const response = await fetchCurrentUser();
//           if (response && response.user) {
//             setUser({ ...response.user, token }); // Assign token to the user object
//           } else {
//             setUser(null);
//           }
//         } catch (error) {
//           setUser(null);
//           console.log("User not logged in");
//         }
//       } else {
//         setUser(null);
//       }
//       setLoading(false);
//     };

//     fetchLoggedInUser();
//   }, []);

//   // const loginUser = async (email, password) => {
//   //   setLoading(true);
//   //   try {
//   //     const response = await login(email, password);
//   //     if (response && response.data.user) {
//   //       setUser(response.data.user);
//   //     }
//   //   } catch (error) {
//   //     console.error("Login failed:", error);
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   const registerUser = async(fullname, email, password, username, avatar)=>{
//     setLoading(true)
//     try {
//       const response = await register(fullname, email, password, username, avatar);
//       if(response && response.data.user){
//         alert("User registered successfully")
//         console.log("User registered successfully");
//       }
//     } catch (error) {
//       console.error("Registration failed:", error);
//     } finally{
//       setLoading(false);
//     }
//   }

//   const loginUser = async (email, password) => {
//     setLoading(true);
//     try {
//       const response = await login(email, password);
//       if (response && response.data.user) {
//         const { user } = response.data;
//         const { accessToken } = response.data;
//         setUser({ ...user, token: accessToken }); // Assign token to the user object
//       }
//     } catch (error) {
//       console.error("Login failed:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const logoutUser = async () => {
//     setLoading(true);
//     try {
//       const response = await logout();
//       if (response?.success) {
//         setUser(null);
//       } else {
//         console.error("Logout failed");
//       }
//     } catch (error) {
//       console.error("Logout failed:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ user, loginUser, logoutUser, loading, registerUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;


// code 2

// import React, { createContext, useState, useEffect } from 'react';
// import { login, logout, fetchCurrentUser, register } from '../../services/authService';
// import axios from 'axios';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchLoggedInUser = async () => {
//       const token = localStorage.getItem('accessToken');
//       if (token) {
//         try {
//           const response = await fetchCurrentUser();
//           if (response && response.user) {
//             setUser({ ...response.user, token }); // Assign token to the user object
//           } else {
//             setUser(null);
//           }
//         } catch (error) {
//           setUser(null);
//           console.log('User not logged in');
//         }
//       } else {
//         setUser(null);
//       }
//       setLoading(false);
//     };

//     fetchLoggedInUser();
//   }, []);

//   // const loginUser = async (email, password) => {
//   //   setLoading(true);
//   //   try {
//   //     const response = await login(email, password);
//   //     if (response && response.data.user) {
//   //       const { user } = response.data;
//   //       const { accessToken } = response.data.data;
//   //       setUser({ ...user, token: accessToken });
//   //     }
//   //   } catch (error) {
//   //     console.error('Login failed:', error);
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   const loginUser = async (email, password) => {
//     setLoading(true);
//     try {
//       const response = await login(email, password);
  
//       // Check if response contains success and the nested data object
//       if (response && response.success && response.data) {
//         const { user, accessToken } = response.data; // Destructure from response.data
  
//         if (user && accessToken) {
//           // Set user state and store access token
//           setUser({ ...user, token: accessToken });
//           localStorage.setItem('accessToken', accessToken); // Store the access token
//         } else {
//           console.error('User or token missing in login response.');
//         }
//       } else {
//         console.error('Invalid login response:', response);
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
//       if (response && response.data.user) {
//         alert('User registered successfully');
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
//         setUser(null);
//       } else {
//         console.error('Logout failed');
//       }
//     } catch (error) {
//       console.error('Logout failed:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ user, loginUser, logoutUser, loading, registerUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;


// code 3 
// import React, { createContext, useState, useEffect } from 'react';
// import { login, logout, fetchCurrentUser, register } from '../../services/authService';
// import axios from 'axios';
// axios.defaults.withCredentials = true;

// const AuthContext = createContext();
// axios.withCredentials = true;

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchLoggedInUser = async () => {
//       let token = localStorage.getItem('accessToken');
//       if (!token) {
//         setLoading(false);
//         return;
//       }
  
//       try {
//         const response = await fetchCurrentUser();
//         console.log('Fetched User:', response);
//         if (response && response.success && response.data.user) {
//           setUser({ ...response.data.user, token });
//         } else {
//           localStorage.removeItem('accessToken'); // Remove invalid token
//           setUser(null);
//         }
//       } catch (error) {
//         console.error('Error fetching user:', error);
//         localStorage.removeItem('accessToken'); // Remove token on error
//         setUser(null);
//       }
//       setLoading(false);
//     };
  
//     fetchLoggedInUser();
//   }, []);
  
  

//   const loginUser = async (email, password) => {
//     setLoading(true);
//     try {
//       const response = await login(email, password);
//       if (response && response.success && response.data) {
//         const { user, accessToken } = response.data;
//         if (user && accessToken) {
//           setUser({ ...user, token: accessToken });
//           localStorage.setItem('accessToken', accessToken);
//           console.log('Token Stored 1:', localStorage.getItem('accessToken'));
//         } else {
//           console.error('User or token missing in login response.');
//         }
//       } else {
//         console.error('Invalid login response:', response);
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
//         setUser(null);
//       } else {
//         console.error('Logout failed');
//       }
//     } catch (error) {
//       console.error('Logout failed:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ user, loginUser, logoutUser, loading, registerUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;




// code 4

// import React, { createContext, useState, useEffect } from 'react';
// import { login, logout, fetchCurrentUser, register } from '../../services/authService';
// import axios from 'axios';
// axios.defaults.withCredentials = true;

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchLoggedInUser = async () => {
//       try {
//         const response = await fetchCurrentUser();
//         console.log('Fetched User:', response);

//         if (response && response.success && response.data.user) {
//           setUser(response.data.user);
//         } else {
//           setUser(null); // Clear user if not valid
//         }
//       } catch (error) {
//         console.error('Error fetching user:', error);
//         setUser(null); // Clear user on error
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchLoggedInUser();
//   }, []);
  
//   const loginUser = async (email, password) => {
//     setLoading(true);
//     try {
//       const response = await login(email, password);
//       if (response && response.success && response.data) {
//         const { user } = response.data;
//         if (user) {
//           setUser(user); // No need to store token manually
//         } else {
//           console.error('User missing in login response.');
//         }
//       } else {
//         console.error('Invalid login response:', response);
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
//         setUser(null); // Clear user after logout
//       } else {
//         console.error('Logout failed');
//       }
//     } catch (error) {
//       console.error('Logout failed:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ user, loginUser, logoutUser, loading, registerUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;


// code 4 sub 

// import React, { createContext, useState, useEffect } from 'react';
// import { login, logout, fetchCurrentUser, register } from '../../services/authService';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Fetch user info on initial load
//   useEffect(() => {
//     const fetchLoggedInUser = async () => {
//       setLoading(true);
//       try {
//         const response = await fetchCurrentUser();
//         console.log("fetched USER: ", response)
//         if (response) {
//           setUser(response.data); // Set user in state
//           console.log("fetcjed usr: ", response.data);
//           setLoading(false)
//         } else {
//           setUser(null); // If no user, clear state
//           setLoading(false)
//         }
//       } catch (error) {
//         console.error('Error fetching user:', error);
//         setUser(null); // Clear user on error
//         setLoading(false)
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
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;



// code 5
import React, { createContext, useState, useEffect } from 'react';
import { login, logout, fetchCurrentUser, register } from '../../services/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Indicates whether user auth is being determined

  // Fetch user info on initial load or page refresh
  useEffect(() => {
    const fetchLoggedInUser = async () => {
      setLoading(true); // Start loading
      try {
        const response = await fetchCurrentUser();
        if (response && response.success && response.data) {
          setUser(response.data); // Set user in state
        }
      } catch (error) {
        console.error('Error fetching user:', error);
        setUser(null); // Clear user on error
      } finally {
        setLoading(false); // End loading state
      }
    };

    fetchLoggedInUser();
  }, []);

  const loginUser = async (email, password) => {
    setLoading(true);
    try {
      const response = await login(email, password);
      if (response && response.success && response.data.user) {
        setUser(response.data.user); // Set user in state after login
      } else {
        console.error('Login response is invalid:', response);
      }
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const registerUser = async (fullname, email, password, username, avatar) => {
    setLoading(true);
    try {
      const response = await register(fullname, email, password, username, avatar);
      if (response && response.success) {
        alert('User registered successfully');
      } else {
        console.error('Registration failed:', response);
      }
    } catch (error) {
      console.error('Registration failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = async () => {
    setLoading(true);
    try {
      const response = await logout();
      if (response?.success) {
        setUser(null); // Clear user on logout
      } else {
        console.error('Logout failed:', response);
      }
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loginUser, logoutUser, loading, registerUser }}>
      {!loading && children} {/* Only render children after auth check */}
    </AuthContext.Provider>
  );
};

export default AuthContext;
