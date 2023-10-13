import { SubmitButton } from "../../components";
import { NavLink } from "react-router-dom";
import "./login.css";

const Login = () => {
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
          <form className="login-page_form_container shadow">
            <h1 className="fw-bold fs-2 mt-5">Welcome to Centro Secretariat</h1>
            <div className="mt-5">
              <label htmlFor="uid" className="form-label fw-bold">
                UID
              </label>
              <input
                type="text"
                className="form-control rounded login-border-primary"
                id="uid"
                required
              />
            </div>
            <div className="mt-2">
              <label htmlFor="password" className="form-label fw-bold">
                Password
              </label>
              <input
                type="password"
                className="form-control rounded login-border-primary"
                id="password"
                required
              />
            </div>
            <div className="mt-4 mb-5">
              <input
                className="form-check-input border border-1 border-dark"
                type="checkbox"
                value="true"
                id="showPassord"
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
