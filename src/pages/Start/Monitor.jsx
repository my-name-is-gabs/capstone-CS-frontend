import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import { BASE_URL } from "../../constant";
import { SubmitButton } from "../../components";
import AuthContext from "../../context/AuthContext";

const Monitor = () => {
  const [applicantID, setApplicantID] = useState("");
  const [isError, setError] = useState(false);
  const navigate = useNavigate();
  const { monitorApp, setMonitorApp } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(
        `${BASE_URL}/applications/tracking/${applicantID}`
      );
      if (res.status === 200) {
        setMonitorApp(!monitorApp);
        navigate(`/monitor/${applicantID}`);
      }
    } catch (error) {
      setError(true);
      setApplicantID("");
    }
  };

  return (
    <>
      {isError && (
        <div
          className="alert alert-danger alert-dismissible fade show text-center fw-bold"
          role="alert"
        >
          Application ID does not exist
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => setError(false)}
          ></button>
        </div>
      )}

      <div className="cs-full-container my-5">
        <div className="container">
          <h3 className="fw-bold">Track your Scholarship Application!</h3>
        </div>
        <div className="cs-bg-secondary rounded p-5 align-self-center mt-3 col-md-6 col-lg-6 shadow">
          <form method="post" onSubmit={handleSubmit}>
            <div className="px-4 mb-3">
              <label className="form-label fw-bold">Application ID:</label>
              <input
                type="text"
                name="applicant_id_tracking"
                id="applicant_id_tracking"
                className="form-control cs-outline"
                onChange={(e) => setApplicantID(e.target.value)}
              />
            </div>

            <div className="mt-5 d-flex justify-content-center align-items-center">
              <div className="d-flex gap-3">
                <NavLink
                  to="/startscholar"
                  className="btn cs-btn-secondary fw-bold fs-6 shadow-sm px-5"
                >
                  Cancel
                </NavLink>
                <SubmitButton className="btn cs-btn-primary fw-bold fs-6 shadow-sm px-5">
                  Continue
                </SubmitButton>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Monitor;
