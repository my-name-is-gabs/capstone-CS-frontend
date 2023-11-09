/* eslint-disable react/no-unescaped-entities */
import { PropTypes } from "prop-types";
import { isGuardianInfoValid } from "../../extras/handleFormError";
import { useState } from "react";
import { SubmitButton } from "../../components";

const FamilyBackground = ({
  setHelperCount,
  setStepCount,
  dispatcher,
  retrievedData,
}) => {
  const [error, setError] = useState({});

  const handleChange = (e) => {
    dispatcher({
      type: "FORM_DATA",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    let errors = isGuardianInfoValid(retrievedData);
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
            <div className="p-3 cs-bg-grayish rounded">
              <img src="/assets/img/registration.png" alt="Icon 4" />
            </div>
            <p className="mt-1 mb-0">Others</p>
            <div className="bg-secondary p-1 rounded-pill w-100"></div>
          </li>
        </ul>
      </div>
      {/* End of stepper */}

      {/* <!-- Forms Under Family Background --> */}
      <form
        id="familyBackground"
        encType="multipart/form-data"
        method="post"
        onSubmit={handleOnSubmit}
      >
        {/* <!-- FIRST ROW --> */}
        <div className="card cs-bg-secondary-rounded shadow w-75 mx-auto mb-5">
          <div className="card-header cs-bg-fadeblue">
            <div className="container d-flex justify-content-between align-items-center">
              <div className="d-inline-flex gap-3 align-items-center">
                <img
                  src="/assets/icons/father.png"
                  className="img-fluid"
                  alt="Grant Icon"
                  width={32}
                  height={32}
                />
                <div className="fs-5 text-white fw-semibold">
                  GUARDIAN'S BACKGROUND INFORMATION
                </div>
              </div>
              <button
                className="cs-btn-nolayout"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
                onClick={() => setHelperCount(4)}
              >
                <i className="fs-2 fa-regular fa-circle-question"></i>
              </button>
            </div>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-12">
                <label
                  htmlFor="guardian_complete_name"
                  className="form-label fw-bold"
                >
                  FULL NAME: <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="guardian_complete_name"
                  id="guardian_complete_name"
                  className="form-control"
                  value={retrievedData?.guardian_complete_name}
                  onChange={handleChange}
                  required
                />
              </div>

              <hr className="my-2 invisible" />

              <div className="col-md-12">
                <label
                  htmlFor="guardian_complete_address"
                  className="form-label fw-bold"
                >
                  COMPLETE ADDRESS: <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="guardian_complete_address"
                  id="guardian_complete_address"
                  className="form-control"
                  value={retrievedData?.guardian_complete_address}
                  onChange={handleChange}
                  required
                />
              </div>

              <hr className="my-2 invisible" />

              <div className="col-md-4">
                <label
                  htmlFor="guardian_contact_number"
                  className="form-label fw-bold"
                >
                  CONTACT NUMBER: <span className="text-danger">*</span>
                </label>
                {error.guardian_contact_number && (
                  <>
                    <span className="ms-2 text-danger">
                      {error.guardian_contact_number}
                    </span>
                  </>
                )}
                <input
                  type="tel"
                  name="guardian_contact_number"
                  id="guardian_contact_number"
                  className="form-control"
                  value={retrievedData?.guardian_contact_number}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-4">
                <label
                  htmlFor="guardian_occupation"
                  className="form-label fw-bold"
                >
                  OCCUPATION: <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="guardian_occupation"
                  id="guardian_occupation"
                  className="form-control"
                  value={retrievedData?.guardian_occupation}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-4">
                <label
                  htmlFor="guardian_place_of_work"
                  className="form-label fw-bold"
                >
                  PLACE OF WORK: <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="guardian_place_of_work"
                  id="guardian_place_of_work"
                  className="form-control"
                  value={retrievedData?.guardian_place_of_work}
                  onChange={handleChange}
                  required
                />
              </div>

              <hr className="my-2 invisible" />

              <div className="col-md-12">
                <label
                  htmlFor="guardian_educational_attainment"
                  className="form-label fw-bold"
                >
                  EDUCATIONAL ATTAINMENT: <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="guardian_educational_attainment"
                  id="guardian_educational_attainment"
                  className="form-control"
                  value={retrievedData?.guardian_educational_attainment}
                  onChange={handleChange}
                  required
                />
              </div>

              <hr className="my-2 invisible" />

              <div className="col-md-12">
                <label
                  htmlFor="guardians_voter_certificate"
                  className="form-label fw-bold"
                >
                  VOTER CERTIFICATE: <span className="text-danger">*</span>
                </label>
                <input
                  type="file"
                  name="guardians_voter_certificate"
                  id="guardians_voter_certificate"
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- END OF FIRST ROW --> */}

        {/* <!-- Buttons Per Sections --> */}
        <div className="mt-5 d-flex justify-content-between align-items-center w-75 mx-auto mb-5">
          <div className="d-flex gap-3">
            <button
              type="button"
              className="btn cs-btn-secondary fw-bold fs-5 shadow-sm px-5"
              onClick={() => setStepCount((step) => step - 1)}
            >
              Back
            </button>
            <SubmitButton>Next</SubmitButton>
          </div>
        </div>
      </form>
      {/* <!-- End of Forms Under Family Background --> */}
    </>
  );
};

FamilyBackground.propTypes = {
  setHelperCount: PropTypes.func,
  setStepCount: PropTypes.func,
  dispatcher: PropTypes.func,
  retrievedData: PropTypes.object,
  saveProgress: PropTypes.func,
};

export default FamilyBackground;
