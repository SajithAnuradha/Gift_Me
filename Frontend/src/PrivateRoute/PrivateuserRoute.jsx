import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext.jsx";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
// import { Spinner } from "flowbite-react";

function PrivateuserRoute({ children }) {
  const {role, token } = useContext(StoreContext);
  console.log(role, token);
 
  const loaction = useLocation();

  if (role==='user' && token) {
    return children;
  }
  toast.error("Please login")
  return <Navigate to="/" state={{ from: loaction }} replace></Navigate>;
}

export default PrivateuserRoute;