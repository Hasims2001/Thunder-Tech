import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const isAuth = useSelector((store) => store.authReducer.isAuth);
  console.log(isAuth, "isAuth privatge");
  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return children;
};
