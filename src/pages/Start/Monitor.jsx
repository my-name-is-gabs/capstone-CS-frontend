import { NavLink } from "react-router-dom";

const Monitor = () => {
  return (
    <>
      <div className="cs-full-container my-5">
        <div className="container">
          <h3 className="fw-bold">Track your Scholarship Application!</h3>
        </div>
        <div className="cs-bg-secondary rounded p-5 align-self-center mt-3 col-md-6 col-lg-6 shadow">
          <form action="" method="post">
            <div className="px-4 mb-3">
              <label className="form-label fw-bold">Application ID:</label>
              <input
                type="text"
                name="app_id_retrieve"
                id=""
                className="form-control cs-outline"
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
                <NavLink
                  to="/monitorapp"
                  className="btn cs-btn-primary fw-bold fs-6 shadow-sm px-5"
                >
                  Continue
                </NavLink>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Monitor;
