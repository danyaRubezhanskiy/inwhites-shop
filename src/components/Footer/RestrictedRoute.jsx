import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const RestrictedRoute = ({ component, redirectTo = "/" }) => {
  const selectIsLoggedIn = useSelector((state) => state.auth.token);
  return selectIsLoggedIn ? <Navigate to={redirectTo} replace /> : component;
};

export default RestrictedRoute;
