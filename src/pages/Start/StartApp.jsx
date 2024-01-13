import { NavLink, useNavigate } from "react-router-dom";
// import { useRef, useEffect, useState,  } from "react";
import { useMemo } from "react";
import { Footer } from "../../components";
import AES from "crypto-js/aes";
import "./appstyle.css";

const StartApp = () => {
  const navigate = useNavigate();

  const securityQustions = {
    q1: "What city were you born in?",
    q2: "What is the name of your first pet?",
    q3: "What was the name of your first stuffed animal?",
    q4: "What is the first name of your first crush?",
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const security_question = e.target.security_question.value;
    const security_answer = e.target.security_answer.value;

    const formData = {
      security_question,
      security_answer,
    };

    const encryptSecurityData = AES.encrypt(
      JSON.stringify(formData),
      import.meta.env.VITE_SECRET_KEY
    );

    localStorage.setItem("formSecurityAccessData", encryptSecurityData);
    navigate("/forms");
  };

  const dateTimeOption = useMemo(() => {
    return {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    };
  }, []);

  return (
    <>
      <div className="row">
        <aside className="col-md-5 bg-light p-4">
          <h4 className="text-center fw-bold">
            ETHICAL CONSIDERATIONS & IMPORTANT REMINDERS
          </h4>
          <div className="cs-bg-primary p-4 rounded-3 text-white mt-4">
            <h5 className="fw-bold">PLEASE READ!</h5>
            <hr />
            <p className="d-flex flex-column gap-4">
              Before proceeding in answering and submitting your scholarship
              application through our website, make sure that you read the
              guidelines to ensure that you are providing the right details.
              Incorrect information might get your application rejected so make
              sure that you follow the instructions.
              <div>
                We make sure that we will guide your throughout the process of
                scholarship application. See the picture below:
              </div>
              <img src="assets/img/guideInfo.png" alt="Info Guide Picture" />
              <div>
                Each header has a question mark{" "}
                <i className="fs-4 fa-regular fa-circle-question"></i> button.
                Upon clicking the button, a sidebar window will show up that
                contains the information that will help you in answering the
                form.
              </div>
            </p>

            <p>
              Furthermore, the{" "}
              <span className="fw-bold">Centro Secretariat</span> assures that
              it will <span className="fw-bold">NOT:</span>
            </p>
            <ul>
              <li>
                obtain personal identifying information about you through your
                use of this system, unless you choose to provide such
                information.
              </li>
              <li>
                share any information it receives with any outside parties,
                except when and where applicable by the Privacy Act.
              </li>
            </ul>
          </div>

          <div className="p-4 mt-3">
            <h6 className="fw-bold">For more information, contact:</h6>
            <ol style={{ listStyle: "none" }}>
              <li>Legal Office Department</li>
              <li>Room 20X</li>
              <li>ABC City</li>
              <li>[Landline/Cellphone number]</li>
            </ol>
            <hr />
          </div>
        </aside>

        <main className="col-md-7 p-4">
          <h1 className="fw-bold">Application Information</h1>
          <div className="mx-auto p-4 mt-4">
            <div className="cs-bg-light cs-radius p-4">
              <h5 className="fw-bold">
                Please remember your security question and answer
              </h5>
              <p>
                If there are technical issues with the system, or you want to
                complete your application some other time, you can save your
                work and later, start where you left off. In order to access
                your application later, however, you will need: (1) your
                security question, and (2) the answer to your security question.
              </p>
              <p>
                To choose a security question, pick the one you like the best
                from the drop down list, type your answer to that question in
                the box below, and click Continue. Remember: In order to access
                your application later, you will need to know the answer exactly
                as you wrote it on this page (case-sensitive).
              </p>
            </div>

            <form
              method="post"
              className="container row mt-4"
              onSubmit={handleOnSubmit}
            >
              <div className="col-md-6">
                <div className="mb-3">
                  <label
                    htmlFor="security_question"
                    className="form-label fw-bold"
                  >
                    Security Question:
                  </label>
                  <div className="input-group">
                    <select
                      name="security_question"
                      id="security_question"
                      className="form-select"
                      required
                    >
                      <option
                        value={securityQustions["q1"]}
                        defaultValue={securityQustions["q1"]}
                      >
                        {securityQustions["q1"]}
                      </option>
                      <option value={securityQustions["q2"]}>
                        {securityQustions["q2"]}
                      </option>
                      <option value={securityQustions["q3"]}>
                        {securityQustions["q3"]}
                      </option>
                      <option value={securityQustions["q4"]}>
                        {securityQustions["q4"]}
                      </option>
                    </select>
                  </div>
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="security_answer"
                    className="form-label fw-bold"
                  >
                    Answer:
                  </label>
                  <input
                    type="text"
                    name="security_answer"
                    id="security_answer"
                    className="form-control"
                    placeholder="Your answer..."
                    required
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="p-2 border border-3 border-dark rounded d-flex justify-content-around align-items-center bg-light">
                  <img
                    src="/assets/img/logo_degree.png"
                    className="img-fluid"
                    width="100"
                    alt="logo"
                  />

                  <div className="d-flex flex-column justify-content-center py-2">
                    <h5 className="text-center">
                      Welcome to Centro Secretariat Scholarship Application
                    </h5>
                    <h6 className="fw-bold">Date:</h6>
                    <p className="text-center">
                      {new Intl.DateTimeFormat("en-ph", dateTimeOption).format(
                        new Date()
                      )}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 d-flex justify-content-center align-items-center">
                <div className="d-flex gap-3">
                  <NavLink
                    to="/startscholar"
                    className="btn cs-btn-secondary fw-bold fs-5 shadow-sm px-5"
                  >
                    Cancel
                  </NavLink>

                  <button className="btn cs-btn-primary fw-bold fs-5 shadow-sm px-5">
                    Continue
                  </button>
                </div>
              </div>
            </form>
          </div>

          <Footer />
        </main>
      </div>
    </>
  );
};

export default StartApp;
