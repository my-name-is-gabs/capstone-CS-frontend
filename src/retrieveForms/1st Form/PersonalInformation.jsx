import { PropTypes } from "prop-types";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { SubmitButton } from "../../components";
import { barangayOptions, religionOptions } from "../../extras/selectionData";
import { isPersonalInfoValid } from "../../extras/handleFormError";

const PersonalInformation = ({
  setHelperCount,
  setStepCount,
  dispatcher,
  state,
}) => {
  const [error, setError] = useState({});

  const handleChange = (e) => {
    dispatcher({
      type: "FORM_DATA",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const handleFile = (e) => {
    dispatcher({
      type: "FILE_DATA",
      payload: { name: e.target.name, value: e.target.files[0] },
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    let errors = isPersonalInfoValid(state);
    setError(errors);
    if (Object.keys(errors).length > 0) return;
    setStepCount((step) => step + 1);
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
          encType="multipart/form-data"
          method="post"
          onSubmit={handleOnSubmit}
        >
          {/* First Row */}
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
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="national_id" className="form-label fw-bold">
                    Upload National ID: <span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    type="file"
                    id="national_id"
                    name="national_id"
                    onChange={handleFile}
                  />
                </div>

                <div className="col-md-6">
                  <label
                    htmlFor="scholarship_type"
                    className="form-label fw-bold"
                  >
                    SCHOLARSHIP TYPE: <span className="text-danger">*</span>
                  </label>
                  <span className="ms-2 text-danger">
                    {error?.scholarship_type}
                  </span>
                  <select
                    name="scholarship_type"
                    id="scholarship_type"
                    className="form-select"
                    onChange={handleChange}
                    value={state.scholarship_type}
                    required
                  >
                    <option selected="selected" defaultValue>
                      Choose Scholar Type...
                    </option>
                    <option value="BASIC PLUS SUC">BASIC PLUS SUC</option>
                    <option value="SUC_LCU">SUC/LCU</option>
                    <option value="BASIC SCHOLARSHIP">BASIC SCHOLARSHIP</option>
                    <option value="HONORS">HONORS</option>
                    <option value="PRIORITY">PRIORITY</option>
                    <option value="PREMIER">PREMIER</option>
                  </select>
                </div>

                <hr className="my-2 invisible" />

                <div className="col-md-4">
                  <label htmlFor="gender" className="form-label fw-bold">
                    GENDER: <span className="text-danger">*</span>
                  </label>
                  <span className="ms-2 text-danger">{error?.gender}</span>
                  <select
                    name="gender"
                    id="gender"
                    className="form-select"
                    onChange={handleChange}
                    value={state.gender}
                    required
                  >
                    <option selected defaultValue>
                      Choose...
                    </option>
                    <option value={1}>Male</option>
                    <option value={2}>Female</option>
                  </select>
                </div>

                <div className="col-md-4">
                  <label htmlFor="birthdate" className="form-label fw-bold">
                    DATE OF BIRTH: <span className="text-danger">*</span>
                  </label>
                  <input
                    type="date"
                    name="birthdate"
                    id="birthdate"
                    className="form-control"
                    onChange={handleChange}
                    value={state.birthdate}
                    required
                  />
                </div>

                <div className="col-md-4">
                  <label htmlFor="email" className="form-label fw-bold">
                    EMAIL: <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    name="email_address"
                    id="email"
                    className="form-control"
                    onChange={handleChange}
                    value={state.email_address}
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
                    name="house_address"
                    id="address"
                    className="form-control"
                    onChange={handleChange}
                    value={state.house_address}
                    required
                  />
                </div>

                <hr className="my-2 invisible" />

                <div className="col-md-6">
                  <label htmlFor="voter_cert" className="form-label fw-bold">
                    VOTER CERTIFICATE: <span className="text-danger">*</span>
                  </label>
                  <input
                    type="file"
                    name="voter_certificate"
                    id="voter_cert"
                    className="form-control"
                    onChange={handleFile}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="barangay" className="form-label fw-bold">
                    BARANGAY: <span className="text-danger">*</span>
                  </label>
                  <span className="ms-2 text-danger">{error?.barangay}</span>
                  <select
                    name="barangay"
                    id="barangay"
                    className="form-select"
                    onChange={handleChange}
                    value={state.barangay}
                    required
                  >
                    <option selected defaultValue>
                      Select a Barangay...
                    </option>
                    {barangayOptions.map((brgy, i) => (
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
                  <span className="ms-2 text-danger">{error?.religion}</span>
                  <select
                    name="religion"
                    id="religion"
                    className="form-select"
                    onChange={handleChange}
                    value={state.religion}
                    required
                  >
                    <option selected defaultValue>
                      Select a religion...
                    </option>
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
                    name="personalized_facebook_link"
                    id="fb_link"
                    className="form-control"
                    onChange={handleChange}
                    value={state.personalized_facebook_link}
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Buttons Per Sections --> */}
          <div className="mt-5 d-flex justify-content-end align-items-center w-75 mx-auto mb-5">
            <div className="d-flex gap-3">
              <NavLink
                to="/startscholar"
                className="btn cs-btn-secondary fw-bold fs-5 shadow-sm px-5"
                onClick={() => {
                  localStorage.removeItem("encryptedFormData");
                  localStorage.removeItem("formSecurityAccessData");
                  localStorage.removeItem("_grecaptcha");
                }}
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
  state: PropTypes.object,
  retrievedData: PropTypes.object,
};

export default PersonalInformation;
