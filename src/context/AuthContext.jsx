/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import axios from "../api/axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [scholar, setScholar] = useState(() =>
    localStorage.getItem("access_token")
      ? jwt_decode(localStorage.getItem("access_token"))
      : null
  );
  const [error, setError] = useState("");
  const navigate = useNavigate();

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
        setError("Invalid credentials");
        e.target.username.value = "";
        e.target.password.value = "";
      }
    }
  };

  return (
    <AuthContext.Provider value={{ scholar, handleLogin, error, setError }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
