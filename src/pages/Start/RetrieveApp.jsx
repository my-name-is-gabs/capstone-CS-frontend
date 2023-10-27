import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import cryptoJs from "crypto-js";
import AuthContext from "../../context/AuthContext";
import "./appstyle.css";

const RetrieveApp = () => {
  const navigate = useNavigate();
  const { retrieveApp, setRetrieveApp } = useContext(AuthContext);
  const [retrievedSecurity, setRetrieveSecurity] = useState(null);
  const [error, setError] = useState("");

  const securityQustions = {
    q1: "What city were you born in?",
    q2: "What is the name of your first pet?",
    q3: "What was the name of your first stuffed animal?",
    q4: "What is the first name of your first crush?",
  };

  useEffect(() => {
    const getData = localStorage.getItem("formSecurityAccessData");
    const decrypt = cryptoJs.AES.decrypt(
      getData,
      import.meta.env.VITE_SECRET_KEY
    );
    setRetrieveSecurity(JSON.parse(decrypt.toString(cryptoJs.enc.Utf8)));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setError("");
    }, 6000);
  }, [error]);

  const onSubmit = (e) => {
    e.preventDefault();

    const appIdRetrieve = e.target.appIdRetrieve.value;
    const retrieveSQ = e.target.retrieveSQ.value;
    const retrieveSA = e.target.retrieveSA.value;

    try {
      if (
        retrievedSecurity.application_id === appIdRetrieve &&
        retrievedSecurity.security_question === retrieveSQ &&
        retrievedSecurity.security_answer === retrieveSA
      ) {
        setRetrieveApp(!retrieveApp);
        navigate("/retrieveForm");
      } else {
        setError("Incorrect credentials");
        e.target.appIdRetrieve.value = "";
        e.target.retrieveSA.value = "";
      }
    } catch (err) {
      console.error("Error! no valid inputs");
    }
  };

  return (
    <>
      <div className="cs-full-container my-5">
        <div className="container">
          <h1 className="fw-bold">Pick up where you left off!</h1>
        </div>
        <div className="cs-bg-secondary rounded p-5 align-self-center mt-3 col-md-6 col-lg-6 shadow">
          <form action="" method="post" onSubmit={onSubmit}>
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
            <div className="px-4 mb-3">
              <label className="form-label fw-bold">Application ID:</label>
              <input
                type="text"
                name="appIdRetrieve"
                id=""
                className="form-control cs-outline"
              />
            </div>

            <div className="px-4 mb-3">
              <label htmlFor="security_question" className="form-label fw-bold">
                Security Question:
              </label>
              <div className="input-group">
                <select
                  name="retrieveSQ"
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

            <div className="px-4 mb-3">
              <label className="form-label fw-bold">Answer:</label>
              <input
                type="text"
                name="retrieveSA"
                id=""
                className="form-control cs-outline"
              />
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
      </div>
    </>
  );
};

export default RetrieveApp;
