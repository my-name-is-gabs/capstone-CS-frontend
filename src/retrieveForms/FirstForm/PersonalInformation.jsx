import { PropTypes } from "prop-types";
import { NavLink } from "react-router-dom";
// import { formReducer, INITIAL_STATE } from "../../reducer/formReducer";
import { useRef } from "react";
import { SubmitButton } from "../../components";

const PersonalInformation = ({
  setHelperCount,
  setStepCount,
  dispatcher,
  retrievedData,
  saveProgress,
}) => {
  const fNameRef = useRef(null);
  const mNameRef = useRef(null);
  const lNameRef = useRef(null);
  const sexRef = useRef(null);
  const dobRef = useRef(null);

  const handleChange = (e) => {
    dispatcher({
      type: "PERSONAL_DATA",
      payload: { name: e.target.name, value: e.target.value },
    });
    handleDefaultValues();
  };

  const handleDefaultValues = () => {
    dispatcher({
      type: "PERSONAL_DATA",
      payload: { name: fNameRef.current.name, value: fNameRef.current.value },
    });
    dispatcher({
      type: "PERSONAL_DATA",
      payload: { name: mNameRef.current.name, value: mNameRef.current.value },
    });
    dispatcher({
      type: "PERSONAL_DATA",
      payload: { name: lNameRef.current.name, value: lNameRef.current.value },
    });
    dispatcher({
      type: "PERSONAL_DATA",
      payload: { name: sexRef.current.name, value: sexRef.current.value },
    });
    dispatcher({
      type: "PERSONAL_DATA",
      payload: { name: dobRef.current.name, value: dobRef.current.value },
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
            <div className="p-3 cs-bg-grayish rounded">
              <img src="/assets/img/open-book.png" alt="Icon 2" />
            </div>
            <p className="mt-1 mb-0">Educational Background</p>
            <div className="bg-secondary p-1 rounded-pill w-100"></div>
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

      <div id="personalInfo">
        {/* <!-- Under Personal Information --> */}

        <form
          action=""
          method="post"
          onSubmit={(e) => {
            e.preventDefault();
            setStepCount((step) => step + 1);
          }}
        >
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
                    SCHOLARSHIP TYPE
                  </div>
                </div>
                <button
                  className="cs-btn-nolayout"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                  onClick={() => setHelperCount(0)}
                >
                  <i className="fs-2 fa-regular fa-circle-question"></i>
                </button>
              </div>
            </div>
            <div className="card-body">
              <div className="col-md-5">
                <label htmlFor="scholarshipType" className="form-label fw-bold">
                  Type:
                </label>
                <select
                  name="scholar_type"
                  id="scholarshpType"
                  className="form-select"
                  onChange={handleChange}
                  value={retrievedData?.scholar_type}
                  required
                >
                  <option selected="selected" disabled>
                    Open this select menu...
                  </option>
                  <option value="Premier">Premier</option>
                  <option value="Full">Full</option>
                  <option value="Priority">Priority</option>
                  <option value="Basic">Basic</option>
                  <option value="SUC/LUC">SUC/LUC</option>
                </select>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div
            className={`card cs-bg-secondary-rounded shadow w-75 mx-auto mb-5`}
          >
            <div className="card-header cs-bg-fadeblue">
              <div className="container d-flex justify-content-between align-items-center">
                <div className="d-inline-flex gap-3 align-items-center">
                  <i className="fa-solid fa-user-large fs-3"></i>
                  <div className="fs-5 text-white fw-semibold">
                    PERSONAL INFORMATION
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-4">
                  <label htmlFor="firstname" className="form-label fw-bold">
                    FIRST NAME:
                  </label>
                  <input
                    ref={fNameRef}
                    type="text"
                    name="firstName"
                    id="firstname"
                    className="form-control bg-body-secondary"
                    required
                    readOnly
                    value={"John"}
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="middleName" className="form-label fw-bold">
                    MIDDLE NAME:
                  </label>
                  <input
                    ref={mNameRef}
                    type="text"
                    name="middleName"
                    id="middleName"
                    className="form-control bg-body-secondary"
                    required
                    readOnly
                    value={"D"}
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="lastName" className="form-label fw-bold">
                    LAST NAME:
                  </label>
                  <input
                    ref={lNameRef}
                    type="text"
                    name="lastName"
                    id="lastName"
                    className="form-control bg-body-secondary"
                    required
                    readOnly
                    value={"Doe"}
                  />
                </div>
                <hr className="my-2 invisible" />

                <div className="col-md-4">
                  <label htmlFor="sex" className="form-label fw-bold">
                    SEX:
                  </label>
                  <input
                    ref={sexRef}
                    type="text"
                    name="sex"
                    id="sex"
                    className="form-control bg-body-secondary"
                    required
                    readOnly
                    value={"Male"}
                  />
                </div>

                <div className="col-md-4">
                  <label htmlFor="dateOfBirth" className="form-label fw-bold">
                    DATE OF BIRTH:
                  </label>
                  <input
                    ref={dobRef}
                    type="text"
                    name="dateOfBirth"
                    id="dateOfBirth"
                    className="form-control bg-body-secondary"
                    required
                    readOnly
                    value={"08 January 1999"}
                  />
                </div>

                <hr className="my-2 invisible" />

                <div className="col-md-8">
                  <label htmlFor="address" className="form-label fw-bold">
                    ADDRESS (House No./Street):
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    className="form-control"
                    onChange={handleChange}
                    value={retrievedData?.address}
                    required
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="barangay" className="form-label fw-bold">
                    BARANGAY:
                  </label>
                  <select
                    name="barangay"
                    id="barangay"
                    className="form-select"
                    onChange={handleChange}
                    value={retrievedData?.barangay}
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

          {/* <!-- Buttons Per Sections --> */}
          <div className="mt-5 d-flex justify-content-between align-items-center w-75 mx-auto mb-5">
            <div className="align-self-start">
              <button
                type="button"
                className="btn btn-success rounded-pill cs-btn-border fw-bold fs-5 shadow-sm px-5"
                onClick={() => saveProgress()}
              >
                Save Progress
              </button>
            </div>
            <div className="d-flex gap-3">
              <NavLink
                to="/startscholar"
                className="btn cs-btn-secondary fw-bold fs-5 shadow-sm px-5"
              >
                Cancel
              </NavLink>
              <SubmitButton>Next</SubmitButton>
            </div>
          </div>
        </form>
      </div>
      {/* End of Forms Under Personal Information */}
    </>
  );
};

PersonalInformation.propTypes = {
  setHelperCount: PropTypes.func,
  setStepCount: PropTypes.func,
  dispatcher: PropTypes.func,
  retrievedData: PropTypes.object,
  saveProgress: PropTypes.func,
};

export default PersonalInformation;
