import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoutes({ element }) {
  const { user, loading } = useSelector((state) => state.auth);
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
          message: "Please log in to access this page.",
        }}
      />
    );
  }

  return <>{element}</>; // Ensure proper JSX rendering
}

export default PrivateRoutes;
