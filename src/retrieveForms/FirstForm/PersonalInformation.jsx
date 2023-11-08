import { PropTypes } from "prop-types";
import { NavLink } from "react-router-dom";
import { useRef, useState } from "react";
import { SubmitButton } from "../../components";
import { barangayOptions, religionOptions } from "../../extras/selectionData";

const PersonalInformation = ({
  setHelperCount,
  setStepCount,
  dispatcher,
  retrievedData,
}) => {
  const fNameRef = useRef(null);
  const mNameRef = useRef(null);
  const lNameRef = useRef(null);

  const [districtLevel, setDistrictLevel] = useState("one");

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
                    value={retrievedData?.firstName}
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
                    value={retrievedData?.middleName}
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
                    value={retrievedData?.lastName}
                  />
                </div>
                <hr className="my-2 invisible" />

                <div className="col-md-4">
                  <label htmlFor="sex" className="form-label fw-bold">
                    SEX: <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="sex"
                    id="sex"
                    className="form-control"
                    onChange={handleChange}
                    value={retrievedData?.sex}
                    required
                  />
                </div>

                <div className="col-md-4">
                  <label htmlFor="dateOfBirth" className="form-label fw-bold">
                    DATE OF BIRTH: <span className="text-danger">*</span>
                  </label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    id="dateOfBirth"
                    className="form-control"
                    onChange={handleChange}
                    value={retrievedData?.dateOfBirth}
                    required
                  />
                </div>

                <div className="col-md-4">
                  <label htmlFor="email" className="form-label fw-bold">
                    EMAIL: <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    onChange={handleChange}
                    value={retrievedData?.email}
                    required
                  />
                </div>

                <hr className="my-2 invisible" />

                <div className="col-md-12">
                  <label htmlFor="address" className="form-label fw-bold">
                    ADDRESS (House No./Street):{" "}
                    <span className="text-danger">*</span>
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

                <hr className="my-2 invisible" />

                <div className="col-md-6">
                  <label htmlFor="district" className="form-label fw-bold">
                    DISCTRICT: <span className="text-danger">*</span>
                  </label>
                  <select
                    name="district"
                    id="district"
                    className="form-select"
                    onChange={handleChange}
                    value={retrievedData?.district}
                    required
                  >
                    <option value="1" onClick={() => setDistrictLevel("one")}>
                      1
                    </option>
                    <option value="2" onClick={() => setDistrictLevel("two")}>
                      2
                    </option>
                  </select>
                </div>

                <div className="col-md-6">
                  <label htmlFor="barangay" className="form-label fw-bold">
                    BARANGAY: <span className="text-danger">*</span>
                  </label>
                  <select
                    name="barangay"
                    id="barangay"
                    className="form-select"
                    onChange={handleChange}
                    value={retrievedData?.barangay}
                    required
                  >
                    {barangayOptions[districtLevel].map((brgy, i) => (
                      <>
                        <option key={i} value={brgy}>
                          {brgy}
                        </option>
                      </>
                    ))}
                  </select>
                </div>

                <hr className="my-2 invisible" />

                <div className="col-md-6">
                  <label htmlFor="barangay" className="form-label fw-bold">
                    RELIGION: <span className="text-danger">*</span>
                  </label>
                  <select
                    name="religion"
                    id="religion"
                    className="form-select"
                    onChange={handleChange}
                    value={retrievedData?.religion}
                    required
                  >
                    {religionOptions.map((religionName, i) => (
                      <>
                        <option key={i} value={religionName}>
                          {religionName}
                        </option>
                      </>
                    ))}
                  </select>
                </div>

                <div className="col-md-6">
                  <label htmlFor="fb_link" className="form-label fw-bold">
                    FB LINK: <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="fb_link"
                    id="fb_link"
                    className="form-control"
                    onChange={handleChange}
                    value={retrievedData?.fb_link}
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Buttons Per Sections --> */}
          <div className="mt-5 d-flex justify-content-end align-items-center w-75 mx-auto mb-5">
            {/* <div className="align-self-start">
              <button
                type="button"
                className="btn btn-success rounded-pill cs-btn-border fw-bold fs-5 shadow-sm px-5"
                onClick={() => saveProgress()}
              >
                Save Progress
              </button>
            </div> */}
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
