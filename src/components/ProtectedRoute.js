import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";

// ProtectedRoute will now return a JSX element instead of a Route component
const ProtectedRoute = ({ element: Component, ...rest }) => {
  const { user } = useAuth();

  // If user is authenticated, return the component, otherwise redirect to login
  return user ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
