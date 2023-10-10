import { PropTypes } from "prop-types";

const OthersForm = ({ setHelperCount, setStepCount, dispatcher, state }) => {
  const handleChange = (e) => {
    dispatcher({
      type: "OTHER_DATA",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  return (
    <>
      {/* Stepper */}
      <div className="container d-flex justify-content-center mb-5">
        <ul className="p-4 rounded cs-bg-secondary cs-border-top shadow d-flex gap-5">
          <li className="d-flex justify-content-center align-items-center flex-column">
            <div className="p-3 bg-warning rounded">
              <img src="/assets/img/information.png" alt="Icon 1" />
            </div>
            <p className="mt-1 mb-0">Personal Information</p>
            <div className="bg-success p-1 rounded-pill w-100"></div>
          </li>

          <li className="d-flex justify-content-center align-items-center flex-column">
            <div className="p-3 bg-warning rounded">
              <img src="/assets/img/open-book.png" alt="Icon 2" />
            </div>
            <p className="mt-1 mb-0">Educational Background</p>
            <div className="bg-success p-1 rounded-pill w-100"></div>
          </li>

          <li className="d-flex justify-content-center align-items-center flex-column">
            <div className="p-3 bg-warning rounded">
              <img src="/assets/img/family-silhouette.png" alt="Icon 3" />
            </div>
            <p className="mt-1 mb-0">Family Background</p>
            <div className="bg-success p-1 rounded-pill w-100"></div>
          </li>

          <li className="d-flex justify-content-center align-items-center flex-column">
            <div className="p-3 bg-warning rounded">
              <img src="/assets/img/registration.png" alt="Icon 4" />
            </div>
            <p className="mt-1 mb-0">Others</p>
            <div className="bg-success p-1 rounded-pill w-100"></div>
          </li>
        </ul>
      </div>
      {/* End of stepper */}

      {/* <!-- FORMS Under Other Scholastic Information and Requirements --> */}
      <form id="scholasticInfo" method="post">
        {/* <!-- FIRST ROW --> */}
        <div className="card cs-bg-secondary-rounded shadow w-75 mx-auto mb-5">
          <div className="card-header cs-bg-fadeblue">
            <div className="container d-flex justify-content-between align-items-center">
              <div className="d-inline-flex gap-3 align-items-center">
                <img
                  src="/assets/icons/Grant.png"
                  className="img-fluid"
                  alt="Grant Icon"
                  width={32}
                  height={32}
                />
                <div className="fs-5 text-white fw-semibold">
                  SCHOLASTIC INFORMATION
                </div>
              </div>
              <button
                className="cs-btn-nolayout"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
                onClick={() => setHelperCount(6)}
              >
                <i className="fs-2 fa-regular fa-circle-question"></i>
              </button>
            </div>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-7">
                <label
                  htmlFor="num_units_enrolled"
                  className="form-label fw-bold"
                >
                  NO. UNITS ENROLLED:
                </label>
                <input
                  type="number"
                  name="num_units_enrolled"
                  id="num_units_enrolled"
                  className="form-control"
                  onChange={handleChange}
                  value={state.num_units_enrolled}
                  required
                />
              </div>
              <div className="col-md-5">
                <label htmlFor="isLadderized" className="form-label fw-bold">
                  LADDERIZED:
                </label>
                <br />
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="isLadderized"
                    id="isLadderized"
                    value={state.isLadderized ?? "yes"}
                    onChange={handleChange}
                    required
                  />
                  <label className="form-check-label" htmlFor="isLadderized">
                    Yes
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="isLadderized"
                    id="isLadderized"
                    value={state.isLadderized ?? "no"}
                    onChange={handleChange}
                    required
                  />
                  <label className="form-check-label" htmlFor="isLadderized">
                    No
                  </label>
                </div>
              </div>

              <hr className="my-2 invisible" />

              <div className="col-md-6">
                <label
                  htmlFor="num_sem_remaining"
                  className="form-label fw-bold"
                >
                  NO. OF SEMESERS REMAINING:
                </label>
                <input
                  type="number"
                  name="num_sem_remaining"
                  id="num_sem_remaining"
                  className="form-control"
                  value={state.num_sem_remaining}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="student_status" className="form-label fw-bold">
                  STUDENT STATUS:
                </label>
                <select
                  name="student_status"
                  id="student_status"
                  className="form-select"
                  value={state.student_status}
                  onChange={handleChange}
                  required
                >
                  <option selected="selected" disabled>
                    Open this select menu
                  </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>

              <hr className="my-2 invisible" />

              <div className="col-md-6">
                <label htmlFor="transferee" className="form-label fw-bold">
                  TRANSFEREE:
                </label>
                <input
                  type="text"
                  name="transferee"
                  id="transferee"
                  className="form-control"
                  placeholder="Name of the last school attended"
                  value={state.transferee}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="shiftee" className="form-label fw-bold">
                  SHIFTEE:
                </label>
                <input
                  type="text"
                  name="shiftee"
                  id="shiftee"
                  className="form-control"
                  placeholder="Name of the last school attended"
                  value={state.shiftee}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- END OF FIRST ROW --> */}

        {/* <!-- SECOND ROW --> */}
        {/* <div className="card cs-bg-secondary-rounded shadow w-75 mx-auto mb-5">
          <div className="card-header cs-bg-fadeblue">
            <i className="fa-solid fa-file"></i>
            <span className="text-white ms-2 fw-bold lead">
              REQUIRED DOCUMENTS
            </span>
          </div>
          <div className="card-body">
            <h1>body</h1>
          </div>
        </div> */}
        {/* <!-- END OF SECOND ROW --> */}

        {/* <!-- Buttons Per Sections --> */}
        <div className="mt-5 d-flex justify-content-end align-items-center w-75 mx-auto mb-5">
          <div className="d-flex gap-3">
            <button
              type="button"
              className="btn cs-btn-secondary fw-bold fs-5 shadow-sm px-5"
              onClick={() => setStepCount((step) => step - 1)}
            >
              Back
            </button>
            <button
              type="button"
              className="btn cs-btn-primary fw-bold fs-5 shadow-sm px-5"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Finish
            </button>
          </div>
        </div>
      </form>
      {/* <!-- End of FORMS Under Other Scholastic Information and Requirements --> */}

      {/* <!-- Buttons Per Sections --> */}
      {/* <div className="mt-5 d-flex justify-content-end align-items-center w-75 mx-auto mb-5">
        <div className="d-flex gap-3">
          <a className="btn cs-btn-secondary fw-bold fs-5 shadow-sm px-5">
            Cancel
          </a>
          <a
            className="btn cs-btn-primary fw-bold fs-5 shadow-sm px-5"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Finish
          </a>
        </div>
      </div> */}
    </>
  );
};

OthersForm.propTypes = {
  setHelperCount: PropTypes.func,
  setStepCount: PropTypes.func,
  dispatcher: PropTypes.func,
  state: PropTypes.object,
};

export default OthersForm;
