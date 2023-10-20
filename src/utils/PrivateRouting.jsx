import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../context/AuthContext";

// eslint-disable-next-line react/prop-types
const PrivateRouting = () => {
  const { scholar, setError } = useContext(AuthContext);

  if (scholar.role === "SCHOLAR" && scholar.isActive) {
    return <Outlet />;
  } else {
    setError("Unuathorized Access!");
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    return <Navigate to="/login" />;
  }
  // return scholar.role === "SCHOLAR" && scholar.isActive ? (
  //   <Outlet />
  // ) : (
  //   <Navigate to="/login" />
  // );
};

export default PrivateRouting;
