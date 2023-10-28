/* eslint-disable react/no-unescaped-entities */
import { PropTypes } from "prop-types";
// import { useReducer } from "react";
// import { formReducer, INITIAL_retrievedData? } from "../../reducer/formReducer";

const EducationalBackground = ({
  setHelperCount,
  setStepCount,
  dispatcher,
  retrievedData,
  // saveProgress,
}) => {
  // const [retrievedData?, dispatch] = useReducer(formReducer, INITIAL_retrievedData?);

  const handleChange = (e) => {
    dispatcher({
      type: "EDUC_DATA",
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
            <div className="p-3 cs-bg-grayish rounded">
              <img src="/assets/img/family-silhouette.png" alt="Icon 3" />
            </div>
            <p className="mt-1 mb-0">Family Background</p>
            <div className="bg-secondary p-1 rounded-pill w-100"></div>
          </li>

          <li className="d-flex justify-content-center align-items-center flex-column">
            <div className="p-3 cs-bg-grayish rounded">
              <img src="/assets/img/registration.png" alt="Icon 4" />
            </div>
            <p className="mt-1 mb-0">Others</p>
            <div className="bg-secondary p-1 rounded-pill w-100"></div>
          </li>
        </ul>
      </div>
      {/* End of stepper */}

      {/* <!-- Forms under Educational Background --> */}
      <form
        id="educBackground"
        method="post"
        onSubmit={() => {
          setStepCount((step) => step + 1);
        }}
      >
        {/* <!-- First Row --> */}
        <div className="card cs-bg-secondary-rounded shadow w-75 mx-auto mb-5">
          <div className="card-header cs-bg-fadeblue">
            <div className="container d-flex justify-content-between align-items-center">
              <div className="d-inline-flex gap-3 align-items-center">
                <img
                  src="/assets/icons/primary.png"
                  className="img-fluid"
                  alt="Grant Icon"
                  width={32}
                  height={32}
                />
                <div className="fs-5 text-white fw-semibold">
                  PRIMARY EDUCATION
                </div>
              </div>
              <button
                className="cs-btn-nolayout"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
                onClick={() => setHelperCount(2)}
              >
                <i className="fs-2 fa-regular fa-circle-question"></i>
              </button>
            </div>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-8">
                <label htmlFor="p_schoolName" className="form-label fw-bold">
                  SCHOOL NAME:
                </label>
                <input
                  type="text"
                  name="p_schoolName"
                  id="p_schoolName"
                  className="form-control"
                  onChange={handleChange}
                  value={retrievedData?.p_schoolName}
                  required
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="p_schoolType" className="form-label fw-bold">
                  SCHOOL TYPE:
                </label>
                <br />
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="p_schoolType"
                    id="p_schoolType"
                    value={retrievedData?.p_schoolType ?? "private"}
                    onChange={handleChange}
                    required
                  />
                  <label className="form-check-label" htmlFor="p_schoolType">
                    Private
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="p_schoolType"
                    id="p_schoolType"
                    value={retrievedData?.p_schoolType ?? "public"}
                    onChange={handleChange}
                    required
                  />
                  <label className="form-check-label" htmlFor="inlineRadio1">
                    Public
                  </label>
                </div>
              </div>

              <hr className="my-2 invisible" />

              <div className="col-md-8">
                <label htmlFor="p_schoolAddress" className="form-label fw-bold">
                  SCHOOL ADDRESS:
                </label>
                <input
                  type="text"
                  name="p_schoolAddress"
                  id="p_schoolAddress"
                  className="form-control"
                  value={retrievedData?.p_schoolAddress}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-4">
                <label
                  htmlFor="p_startgradYeare"
                  className="form-label fw-bold"
                >
                  YR. STARTED - GRADUATED:
                </label>
                <select
                  name="p_startgradYear"
                  id="p_startgradYear"
                  className="form-select"
                  onChange={handleChange}
                  value={retrievedData?.p_startgradYear}
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
            </div>
          </div>
        </div>
        {/* <!-- End of First Row --> */}

        {/* <!-- Second Row --> */}
        <div className="card cs-bg-secondary-rounded shadow w-75 mx-auto mb-5">
          <div className="card-header cs-bg-fadeblue">
            <div className="container d-flex justify-content-between align-items-center">
              <div className="d-inline-flex gap-3 align-items-center">
                <img
                  src="/assets/icons/secondary.png"
                  className="img-fluid"
                  alt="Grant Icon"
                  width={32}
                  height={32}
                />
                <div className="fs-5 text-white fw-semibold">
                  SECONDARY EDUCATION
                </div>
              </div>
              <button
                className="cs-btn-nolayout"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
                onClick={() => setHelperCount(3)}
              >
                <i className="fs-2 fa-regular fa-circle-question"></i>
              </button>
            </div>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-8">
                <label htmlFor="s_schoolName" className="form-label fw-bold">
                  SCHOOL NAME:
                </label>
                <input
                  type="text"
                  name="s_schoolName"
                  id="s_schoolName"
                  className="form-control"
                  value={retrievedData?.s_schoolName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="s_schoolType" className="form-label fw-bold">
                  SCHOOL TYPE:
                </label>
                <br />
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="s_schoolType"
                    id="s_schoolType"
                    value={retrievedData?.s_schoolName ?? "private"}
                    onChange={handleChange}
                    required
                  />
                  <label className="form-check-label" htmlFor="s_schoolType">
                    Private
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="s_schoolType"
                    id="s_schoolType"
                    value={retrievedData?.s_schoolName ?? "public"}
                    onChange={handleChange}
                    required
                  />
                  <label className="form-check-label" htmlFor="s_schoolType">
                    Public
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End of Second Row --> */}

        {/* <!-- Buttons Per Sections --> */}
        <div className="mt-5 d-flex justify-content-between align-items-center w-75 mx-auto mb-5">
          <div className="align-self-start">
            {/* <button
              type="button"
              className="btn btn-success rounded-pill cs-btn-border fw-bold fs-5 shadow-sm px-5"
              onClick={() => saveProgress()}
            >
              Save Progress
            </button> */}
          </div>
          <div className="d-flex gap-3">
            <button
              type="button"
              className="btn cs-btn-secondary fw-bold fs-5 shadow-sm px-5"
              onClick={() => setStepCount((step) => step - 1)}
            >
              Back
            </button>
            <button className="btn cs-btn-primary fw-bold fs-5 shadow-sm px-5">
              Next
            </button>
          </div>
        </div>
      </form>
      {/* <!-- End of Forms Under Educational Background --> */}
    </>
  );
};

EducationalBackground.propTypes = {
  setHelperCount: PropTypes.func,
  setStepCount: PropTypes.func,
  dispatcher: PropTypes.func,
  saveProgress: PropTypes.func,
  retrievedData: PropTypes.object,
};

export default EducationalBackground;
