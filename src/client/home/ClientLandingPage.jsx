import { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";
import "../clientcss.css";
import RenewalForm from "../Renewal/RenewalForm";
import HomeScholar from "./HomeScholar";
import Inquiries from "../Inquiries/Inquiries";

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
        return <Inquiries />;

      default:
        return;
    }
  };

  return (
    <>
      <header className="position-absolute top-0 left-0 z-3 w-100 p-3 cs-bg-client">
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
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 scholar-sidebar-hide">
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
                <i className="fa-solid fa-message"></i> Inquiries
              </li>
              <li
                className={
                  pageStep === 4
                    ? "scholar-nav-link active"
                    : "scholar-nav-link"
                }
                onClick={() => setPageStep(4)}
              >
                <i className="fa-solid fa-gear"></i> Settings
              </li>
            </ul>

            <button className="scholar-logout" onClick={() => logoutScholar()}>
              <i className="fa-solid fa-right-from-bracket"></i> Logout
            </button>
          </aside>
        </div>
        <div className="scholar-main col py-3">{PageDisplay(pageStep)}</div>
      </div>
    </>
  );
};

export default ClientLandingPage;
