/* eslint-disable react/no-unescaped-entities */
import { PropTypes } from "prop-types";
import { isGuardianInfoValid } from "../../extras/handleFormError";
import { useState } from "react";
import { SubmitButton } from "../../components";
import HelperOffcanvas from "../../components/Offcanvas/HelperOffcanvas";

const FamilyBackground = ({
  setStepCount,
  dispatcher,
  state,
  saveProgress,
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
    let errors = isGuardianInfoValid(state);
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
                  value={state.guardian_complete_name}
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
                  value={state.guardian_complete_address}
                  placeholder="e.g.: house_number street_name unit/floor(if applicable), city"
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
                <span className="ms-2 text-danger">
                  {error?.guardian_contact_number}
                </span>
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon1">
                    +63
                  </span>

                  <input
                    type="tel"
                    name="guardian_contact_number"
                    id="guardian_contact_number"
                    className="form-control"
                    value={state.guardian_contact_number}
                    onChange={handleChange}
                    placeholder="9XX-XXX-XXX"
                    required
                  />
                </div>
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
                  value={state.guardian_occupation}
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
                  value={state.guardian_place_of_work}
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
                  value={state.guardian_educational_attainment}
                  onChange={handleChange}
                  placeholder="e.g.: College Graduate, Master's Graduate, Doctorate Graduate, Diploma Holder, etc"
                  required
                />
              </div>

              <hr className="my-2 invisible" />

              <div className="col-md-12">
                <label
                  htmlFor="guardian_voter_certificate"
                  className="form-label fw-bold"
                >
                  VOTER CERTIFICATE: <span className="text-danger">*</span>
                </label>
                <input
                  type="file"
                  name="guardians_voter_certificate"
                  id="guardian_voter_certificate"
                  className="form-control"
                  onChange={handleFile}
                  accept=".png, .jpg, .jpeg"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- END OF FIRST ROW --> */}

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

      {/* Helper Offcanvas */}
      <HelperOffcanvas
        title="Guardian's Information Inquiry"
        element={<GuardianSectionHelper />}
      />
    </>
  );
};

const GuardianSectionHelper = () => {
  return (
    <>
      <div className="d-flex flex-column gap-4 p-2">
        <div className="d-inline-flex flex-column gap-2">
          <h5 className="fw-bold">Contact Number</h5>
          <p>The contact number should start with 9 not with 0.</p>
        </div>

        <div className="d-inline-flex flex-column gap-2">
          <h5 className="fw-bold">Educational Attainment</h5>
          <p>
            Indicate if the guardian is a College Graduate, Master's Graduate,
            Doctorate Graduate, Diploma Holder, etc.
          </p>
        </div>

        <div className="d-inline-flex flex-column gap-2">
          <h5 className="fw-bold">Guardian's Voter Certificate</h5>
          <figure className="figure">
            <img
              src="assets/img/parent_voter_samp.jpg"
              alt="Applicant Voter Cert"
              className="img-fluid img-thumbnail"
              width={350}
            />
            <figcaption className="figure-caption text-center">
              Guardian Voter Certificate Sample
            </figcaption>
          </figure>
          <p>
            You should upload the image of your guardian's voter certificate.
            The file format should either be <b>.png</b>/<b>.jpeg</b>/
            <b>.jpg</b>
          </p>
          <p>
            Taguig City LGU requires the scholar to submit their {"guardian's"}{" "}
            voter certificate to prove that they are a resident of the city.
          </p>
        </div>
      </div>
    </>
  );
};

FamilyBackground.propTypes = {
  setHelperCount: PropTypes.func,
  setStepCount: PropTypes.func,
  dispatcher: PropTypes.func,
  state: PropTypes.object,
  saveProgress: PropTypes.func,
};

export default FamilyBackground;
