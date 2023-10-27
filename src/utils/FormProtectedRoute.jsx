import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const FormProtectedRoute = () => {
  const { startApp, retrieveApp } = useContext(AuthContext);
  return startApp || retrieveApp ? <Outlet /> : <Navigate to="/startscholar" />;
};

export default FormProtectedRoute;
