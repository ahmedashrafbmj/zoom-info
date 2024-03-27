
import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
// import { Outlet,Navigate } from "react-router-dom";
const Protected = (isLoggedIn) => {
  // const { userDetails, isLoggedIn } = useSelector((state) => state.authentication);

  //  const { isLoggedIn } = props;
  // let token = localStorage.removeItem("token");
  // let token = localStorage.getItem("setToken");
console.log(isLoggedIn,"heeellooooo");
console.log("heeell");

  const isUserLoggedIn = isLoggedIn ;
  return isUserLoggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default Protected;