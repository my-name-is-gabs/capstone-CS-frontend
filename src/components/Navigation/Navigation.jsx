import { NavLink } from "react-router-dom";
import NavButton from "../Buttons/NavButton";

const Navigation = () => {
  const checkActiveLink = ({ isActive }) => {
    return isActive ? "nav-link active" : "nav-link";
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm border border-bottom-4 border-dark">
        <div className="container">
          <NavLink className="navbar-brand fw-bold" to="/">
            <img
              src="/assets/img/logo_degree.png"
              alt="Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            ABC Scholarship
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className={checkActiveLink} to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={checkActiveLink} to="/guidelines">
                  Guidelines
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavButton btnBG="btn-warning" linkRef="/startscholar">
                  Be a Scholar!
                </NavButton>
              </li>
              <li className="nav-item">
                <NavButton btnBG="btn-primary" linkRef="/login">
                  Login
                </NavButton>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
