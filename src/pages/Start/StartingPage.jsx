/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Footer } from "../../components";
import "./appstyle.css";
import { NavLink } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import axios from "../../api/axios";

const StartingPage = () => {
  const [captcha, setCaptcha] = useState("");
  const [isOngoing, setOngoing] = useState(false);
  const { startApp, setStartApp } = useContext(AuthContext);
  const [securityExist] = useState(
    localStorage.getItem("formSecurityAccessData")
      ? localStorage.getItem("formSecurityAccessData")
      : false
  );

  useEffect(() => {
    axios
      .get("/head/get-is-ongoing/")
      .then((res) => setOngoing(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-md-5 bg-light p-4">
          <h4 className="text-center fw-bold">
            Online Application for Resident Scholarship
          </h4>
          <div className="cs-bg-primary p-4 rounded-3 text-white mt-4">
            <h5 className="fw-bold">Welcome, Iskolar!</h5>
            <hr />
            <p>
              The first step in applying for resident scholarship of
              <big>Taguig City</big> is to complete your application. It takes
              approximately XX minutes to do this. After you submit your
              application, you shoouuld be email regarding your application
              status on the email address you've used in the application.
            </p>
          </div>
          <div className="p-4 mt-3">
            <h5 className="fw-bold">Important: Before you start</h5>
            <hr />
            <ol>
              <li>
                Learn about the{" "}
                <a href="http://tinyurl.com/5bh4bxs5">
                  different types of scholarships
                </a>{" "}
                offered in Taguig City.
              </li>
              <li className="fw-bold">
                This website is designed to be accessed by [BROWSER, X, Y, Z]
                regardless of the medium being used by the user.
              </li>
              <li>Gather your personal and academic documents.</li>
              <li>
                Ensure that the email you used for the application is active.
              </li>
            </ol>
          </div>
          <div className="cs-bg-light p-4 rounded-3 mt-3">
            <h5 className="fw-bold">Additional Information</h5>
            <hr />
            <ol>
              <li>
                <big className="fw-bold">Write down the Application ID</big>{" "}
                displayed on the{" "}
                <big className="fw-bold">top right hand corner</big> of the
                page. If you close your browser window, you will need your ID to
                access your application again.
              </li>
              <li>
                <big className="fw-bold">
                  Try to save your application frequently.
                </big>
                Upon unintetional exit of the submission forms, you will lose
                all unsaved information.
              </li>
            </ol>
          </div>
        </div>

        <div className="col-md-7 p-4">
          <h1 className="fw-bold">Get Started</h1>
          {isOngoing ? (
            <div
              className="cs-border-box mx-auto p-4 mt-4"
              style={{ width: "90%" }}
            >
              <form action="" method="post">
                <div className="mx-4 mb-3">
                  <ReCAPTCHA
                    sitekey={import.meta.env.VITE_RECAPTCHA_KEY}
                    onChange={(val) => {
                      setCaptcha(val);
                      setStartApp(!startApp);
                    }}
                  />
                </div>

                {captcha && (
                  <>
                    <div className="mx-4 mb-3">
                      <div className="cs-startapp-div p-4">
                        <p className="mb-4">
                          Select your scholarship type and make suer you have
                          the necessary documents and information you will need.
                        </p>
                        <NavLink to="/startapp">Start an Application</NavLink>
                      </div>
                    </div>
                    {securityExist && (
                      <div className="mx-4 mb-3">
                        <div className="cs-retrieveapp-div p-4">
                          <p className="mb-4">
                            Select your scholarship type and make suer you have
                            the necessary documents and information you will
                            need.
                          </p>
                          <NavLink to="/retrieve">
                            Retrieve an Application
                          </NavLink>
                        </div>
                      </div>
                    )}
                    <div className="mx-4 mb-3">
                      <div className="cs-monitor-div p-4">
                        <p className="mb-4">
                          If you already applied and have an existing account
                          you can monitor and check the progress of your
                          scholarship application.
                        </p>
                        <NavLink to="/monitor">
                          Monitor your Application
                        </NavLink>
                      </div>
                    </div>
                  </>
                )}
              </form>
            </div>
          ) : (
            <h1 className="display-5 mt-4">
              Scholarship application is not yet open
            </h1>
          )}

          <Footer />
        </div>
      </div>
    </>
  );
};

export default StartingPage;
