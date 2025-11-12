// src/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import isActive from "./isActive";

const ProtectedRoute = ({ children }) => {
  if (!isActive()) {
    // If not logged in → redirect to login
    return <Navigate to="/login" replace />;
  }
  return children; // show protected content
};

export default ProtectedRoute;
