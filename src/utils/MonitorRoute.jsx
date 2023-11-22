import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const MonitorRoute = () => {
  const { monitorApp } = useContext(AuthContext);
  return monitorApp ? <Outlet /> : <Navigate to="/monitor" />;
};

export default MonitorRoute;
