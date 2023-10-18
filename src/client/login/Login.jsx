import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { SubmitButton } from "../../components";
import AuthContext from "../../context/AuthContext";
import axios from "../../api/axios";
import "./login.css";

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [error, setError] = useState(true);

  const [formData, updateFormData] = useState(
    Object.freeze({
      username: "",
      password: "",
    })
  );

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);

    axios
      .post(`/api/token/`, {
        username: formData.username,
        password: formData.password,
      })
      .then((res) => {
        localStorage.setItem("access_token", res.data.access);
        localStorage.setItem("refresh_token", res.data.refresh);
        axios.defaults.headers["Authorization"] =
          "JWT " + localStorage.setItem("access_token", res.data.access);

        const role = res.data?.role;
        console.log(role);
        setAuth({
          username: formData.username,
          password: formData.password,
          role,
        });
        setError(false);
      })
      .catch((err) => {
        if (!err?.response) {
          setError(true);
          setErrorMsg("Login Failed");
        }
      });

    // const response = await axios.post("http://127.0.0.1:8000/api/token/", {
    //   username: formData.username,
    //   password: formData.password,
    // });

    // console.log(response);

    // const response = await fetch("http://127.0.0.1:8000/api/token/", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // });

    // const data = await response.json();

    // console.log(data);
    // console.log(response);
  };

  return (
    <>
      <div className="login-page_container">
        <aside className="login-page_sidebar">
          <div className="login-page_header">
            <img src="/assets/img/logo_degree.png" alt="Logo" />
            <div className="d-block text-white">
              <h3 className="fw-bold head-title">ABC City</h3>
              <p className="fs-5">Scholarship Programs</p>
            </div>
          </div>
          <div className="display-6 fw-bold text-white p-4 mt-4">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit.”
          </div>
        </aside>
        <main className="login-page_main">
          <div className={error ? "alert alert-danger" : "d-none"} role="alert">
            {errorMsg}
          </div>

          <form
            className="login-page_form_container shadow"
            onSubmit={handleSubmit}
          >
            <h1 className="fw-bold fs-2 mt-5">Welcome to Centro Secretariat</h1>
            <div className="mt-5">
              <label htmlFor="username" className="form-label fw-bold">
                Username
              </label>
              <input
                type="text"
                className="form-control rounded login-border-primary"
                id="username"
                name="username"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mt-2">
              <label htmlFor="password" className="form-label fw-bold">
                Password
              </label>
              <input
                type={showPass ? "text" : "password"}
                className="form-control rounded login-border-primary"
                id="password"
                name="password"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mt-4 mb-5">
              <input
                className="form-check-input border border-1 border-dark"
                type="checkbox"
                id="showPassord"
                onClick={() => setShowPass(!showPass)}
              />
              <label className="form-check-label ms-2" htmlFor="showPassord">
                Show Password
              </label>
            </div>

            <div className="d-flex justify-content-center gap-3">
              <NavLink
                to="/"
                className="btn cs-btn-secondary fw-bold fs-5 shadow-sm px-4"
              >
                Cancel
              </NavLink>
              <SubmitButton>Login</SubmitButton>
            </div>
          </form>
        </main>
      </div>
    </>
  );
};

export default Login;
