// import React, {useContext} from 'react'
// import { Navigate, useLocation } from 'react-router-dom'
// import AuthContext from './components/auth/authContext'

// function PrivateRoutes({element, ...rest}) {

//     const {user} = useContext(AuthContext);
//     const location = useLocation();

//     if (!user) {
//         // Redirect to home with a query parameter
//         return <Navigate to="/" state={{ from: location, message: 'Please log in to access this page.' }} />;
//       }
    
//       return element;
// }

// export default PrivateRoutes


import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AuthContext from './components/auth/authContext';

function PrivateRoutes({ element }) {
  const { user, loading } = useContext(AuthContext); // Include loading state
  const location = useLocation();

  if (loading) {
    // Show a loading spinner or placeholder while checking user authentication
    return <div>Loading...</div>;
  }

  if (!user) {
    // Redirect to home with a query parameter
    return (
      <Navigate
        to="/"
        state={{
          from: location,
          message: 'Please log in to access this page.',
        }}
      />
    );
  }

  return element;
}

export default PrivateRoutes;
