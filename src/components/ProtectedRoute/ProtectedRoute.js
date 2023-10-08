import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({isloggedIn, element: Component, ...props}){
  return(
    isloggedIn ? <Component{...props}/> : <Navigate to = "/" replace/>
  )
}
export default ProtectedRoute;