/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import axios from "../api/axios";
import jwt_decode from "jwt-decode"; //decrepit
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

/**
 *
 * The AuthProvider contains the login authentiation logic and the form authentication logic for private routing.
 *
 */

export const AuthProvider = ({ children }) => {
  // handling login
  const [scholar, setScholar] = useState(() =>
    localStorage.getItem("access_token")
      ? jwt_decode(localStorage.getItem("access_token"))
      : null
  );
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validUser = localStorage.getItem("invalidAccess")
    ? localStorage.getItem("invalidAccess")
    : "";

  useEffect(() => {
    setTimeout(() => {
      setError("");
      localStorage.removeItem("invalidAccess");
    }, 6000);
  }, [error]);

  useEffect(() => {
    setError(validUser);
  }, [validUser]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "/api/token/",
        JSON.stringify({
          username: e.target.username.value,
          password: e.target.password.value,
        })
      );

      localStorage.setItem("access_token", res.data.access);
      localStorage.setItem("refresh_token", res.data.refresh);

      setScholar(jwt_decode(res.data.access));
      axios.defaults.headers["Authorization"] =
        "JWT " + localStorage.getItem("access_token");

      navigate("/scholar");
    } catch (err) {
      if (err.response.status === 401) {
        setError("Wrong credentials!");
        e.target.username.value = "";
        e.target.password.value = "";
      }
    }
  };

  const logoutScholar = () => {
    setScholar(null);
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    navigate("/login");
  };
  // end of handling login

  // handling Form routing
  const [startApp, setStartApp] = useState(false);
  //end of handling Form routing

  // handling MONITOR routing
  const [monitorApp, setMonitorApp] = useState(false);

  // handling retrieval of form data
  const [retrieveApp, setRetrieveApp] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        scholar,
        handleLogin,
        logoutScholar,
        error,
        setError,
        startApp,
        setStartApp,
        retrieveApp,
        setRetrieveApp,
        monitorApp,
        setMonitorApp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
