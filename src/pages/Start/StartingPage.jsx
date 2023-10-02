/* eslint-disable react/no-unescaped-entities */
import "./startApps.css";

const StartingPage = () => {
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
                Learn about the
                <a href="#">different types of scholarships</a> offered in
                Taguig City.
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
          <div
            className="cs-border-box mx-auto p-4 mt-4"
            style={{ width: "90%" }}
          >
            <form action="" method="post">
              <div className="mx-4 mb-3">
                <label className="mb-2 fw-bold">
                  Enter the code as shown below
                </label>
                <div className="col-md-6">
                  <div className="input-group">
                    <input
                      type="text"
                      name="captcha"
                      id="captcha"
                      className="form-control"
                    />
                  </div>
                  <div className="input-group">
                    <h1>captcha place</h1>
                  </div>
                </div>
              </div>
              <div className="mx-4 mb-3">
                <div className="cs-startapp-div p-4">
                  <p className="mb-4">
                    Select your scholarship type and make suer you have the
                    necessary documents and information you will need.
                  </p>
                  <a href="#">Start an Application</a>
                </div>
              </div>
              <div className="mx-4 mb-3">
                <div className="cs-retrieveapp-div p-4">
                  <p className="mb-4">
                    Select your scholarship type and make suer you have the
                    necessary documents and information you will need.
                  </p>
                  <a href="#">Retrieve an Application</a>
                </div>
              </div>
              <div className="mx-4 mb-3">
                <div className="cs-monitor-div p-4">
                  <p className="mb-4">
                    If you already applied and have an existing account you can
                    monitor and check the progress of your scholarship
                    application.
                  </p>
                  <a href="#">Monitor your Application</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default StartingPage;
