import { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";
import "../clientcss.css";
import RenewalForm from "../Renewal/RenewalForm";
import HomeScholar from "./HomeScholar";
import SettingPage from "../Profile Settings/SettingPage";
import axios from "../../api/axios";

window.addEventListener("load", async () => {
  const refresh_token = localStorage.getItem("refresh_token");
  if (window.location.pathname === "/scholar") {
    try {
      const res = await axios.post(
        "/api/token/refresh/",
        JSON.stringify({ refresh: refresh_token })
      );
      localStorage.setItem("access_token", res.data);
    } catch (error) {
      alert("error in refresh token");
    }
  }
});

const ClientLandingPage = () => {
  let { scholar, logoutScholar } = useContext(AuthContext);
  const [pageStep, setPageStep] = useState(1);

  const PageDisplay = (step) => {
    switch (step) {
      case 1:
        return <HomeScholar user={scholar.username} />;

      case 2:
        return <RenewalForm />;

      case 3:
        return <SettingPage />;

      default:
        return;
    }
  };

  return (
    <>
      <header className="position-fixed top-0 left-0 z-3 w-100 p-3 cs-bg-client">
        <div className="d-flex ms-3">
          <img
            src="/assets/img/logo_degree.png"
            width={64}
            height={64}
            className="align-self-center"
            alt="Logo"
          />
          <div className="d-block text-white">
            <h3 className="fw-bold border-bottom border-2 border-white pb-2">
              ABC City
            </h3>
            <p className="fs-6">Scholarship Programs</p>
          </div>
        </div>
      </header>

      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 scholar-sidebar-hide position-fixed w-100">
          <aside className="scholar-sidebar col-auto col-md-2">
            <ul className="scholar-navs">
              <li
                className={
                  pageStep === 1
                    ? "scholar-nav-link active"
                    : "scholar-nav-link"
                }
                onClick={() => setPageStep(1)}
              >
                <i className="fa-solid fa-house"></i> Home
              </li>
              <li
                className={
                  pageStep === 2
                    ? "scholar-nav-link active"
                    : "scholar-nav-link"
                }
                onClick={() => setPageStep(2)}
              >
                <i className="fa-solid fa-file-pen"></i> Renew
              </li>

              <li
                className={
                  pageStep === 3
                    ? "scholar-nav-link active"
                    : "scholar-nav-link"
                }
                onClick={() => setPageStep(3)}
              >
                <i className="fa-solid fa-gear"></i> Settings
              </li>
            </ul>

            <button className="scholar-logout" onClick={() => logoutScholar()}>
              <i className="fa-solid fa-right-from-bracket"></i> Logout
            </button>
          </aside>
        </div>
        <div className="scholar-main col py-3" style={{ marginLeft: "240px" }}>
          {PageDisplay(pageStep)}
        </div>
      </div>
    </>
  );
};

export default ClientLandingPage;
