// // components/RoleBasedRoute.jsx
// import React, { useContext } from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import AuthContext from './components/auth/authContext';

// const RoleBasedRoute = ({ element, requiredRoles }) => {
//   const { user } = useContext(AuthContext);
//   const location = useLocation();

// //   if (loading) {
// //     return <div>Loading...</div>; // Optional: Show a loading spinner or message
// //   }

//   if (!user || !requiredRoles.includes(user.role)) {
//     return <Navigate to="/" state={{ from: location, message: 'Access Denied' }} />;
//   }

//   return element;
// };

// export default RoleBasedRoute;



import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AuthContext from './components/auth/authContext';

const RoleBasedRoute = ({ element, requiredRoles }) => {
  const { user, loading } = useContext(AuthContext); // Include loading state
  const location = useLocation();

  if (loading) {
    // Show a loading spinner or placeholder while checking user roles
    return <div>Loading...</div>;
  }

  if (!user || !requiredRoles.includes(user.role)) {
    return (
      <Navigate
        to="/"
        state={{
          from: location,
          message: 'Access Denied',
        }}
      />
    );
  }

  return element;
};

export default RoleBasedRoute;
