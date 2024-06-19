import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext.jsx";
import { Navigate, useLocation } from "react-router-dom";
// import { Spinner } from "flowbite-react";

function PrivateadminRoute({ children }) {
  const { token ,role} = useContext(StoreContext);

  const loaction = useLocation();
//   console.log(user, loading, token);

//   if (loading) {
//     return (
//       <div className="text-center">
//         <Spinner aria-label="Center-aligned spinner example" />
//       </div>
//     );
//   }


  if (role==='admin' && token) {
   
    return children;
  }

  return <Navigate to="/" state={{ from: loaction }} replace></Navigate>;
}

export default PrivateadminRoute;