import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../context/AuthContext";

// eslint-disable-next-line react/prop-types
const PrivateRouting = () => {
  const { scholar } = useContext(AuthContext);

  if (scholar?.role === "SCHOLAR" && scholar?.isActive) {
    return <Outlet />;
  } else {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.setItem("invalidAccess", "Invalid access, unauthorized user!");
    return <Navigate to="/login" />;
  }
  // return scholar?.role === "SCHOLAR" && scholar?.isActive ? (
  //   <Outlet />
  // ) : (
  //   <Navigate to="/login" />
  // );
};

export default PrivateRouting;
