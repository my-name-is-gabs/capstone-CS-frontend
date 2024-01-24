import { useContext } from "react";
import { Footer } from "../../components";
import "./home.css";
import SuccessContext from "../../context/SuccessContext";
import { NavLink } from "react-router-dom";

const Home = () => {
  const { isSuccessDisplay, setSuccessDisplay } = useContext(SuccessContext);

  return (
    <>
      {isSuccessDisplay && (
        <div
          className={`alert alert-info alert-dismissible fade show text-center ${
            isSuccessDisplay ? "" : "d-none"
          }`}
          role="alert"
        >
          Thank you for your participation. Your scholarship application for the
          <strong> Nth Semester</strong> of{" "}
          <strong>
            S.Y {new Date().getFullYear()}-{new Date().getFullYear() + 1}
          </strong>{" "}
          has been successfully submitted. Please keep your eyes on our email in
          regards to your application’s status.
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => setSuccessDisplay(false)}
          ></button>
        </div>
      )}

      <div className="cs-center-items">
        <div className="container-fluid mx-auto">
          <div className="d-flex justify-content-center align-items-center gap-4">
            <div className="row">
              <div className="col-md-6">
                <img
                  src="assets/img/taguig_banner.jpg"
                  alt="Taguig Banner"
                  className="img-fluid"
                  width={900}
                />
              </div>
              <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
                <h1 className="p-4 text-center fw-bold display-5">
                  Welcome to <br />{" "}
                  <span style={{ color: "#1a4798", fontSize: "4rem" }}>
                    CITY OF
                  </span>{" "}
                  <span style={{ color: "#ed1c24", fontSize: "4rem" }}>
                    TAGUIG
                  </span>
                </h1>
                <div className="align-self-center">
                  <NavLink
                    className="btn btn-warning border-1 fw-bold fs-4 border border-1 border-dark"
                    to="/guidelines"
                  >
                    Get Started!
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
