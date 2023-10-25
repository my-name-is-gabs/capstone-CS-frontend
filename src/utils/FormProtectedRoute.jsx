import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const FormProtectedRoute = () => {
  const { startApp } = useContext(AuthContext);
  return startApp ? <Outlet /> : <Navigate to="/startscholar" />;
};

export default FormProtectedRoute;
