import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const RoleBasedRoute = ({ element, requiredRoles }) => {
  const { user, loading } = useSelector((state) => state.auth);
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
          message: "Access Denied",
        }}
      />
    );
  }

  return <>{element}</>; // Ensure proper JSX rendering
};

export default RoleBasedRoute;
