/* eslint-disable react/no-unescaped-entities */
import { PropTypes } from "prop-types";
import { isEducInfoValid } from "../../extras/handleFormError";
import { useState } from "react";
import { SubmitButton } from "../../components";
import {
  courseTakingOptions,
  universityOptions,
} from "../../extras/selectionData";

const EducationalBackground = ({
  setHelperCount,
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

  const handleOnSubmit = (e) => {
    e.preventDefault();
    let errors = isEducInfoValid(state);
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
      <form id="educBackground" method="post" onSubmit={handleOnSubmit}>
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
                  CURRENT EDUCATION
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
              <div className="col-md-6">
                <label
                  htmlFor="university_attending"
                  className="form-label fw-bold"
                >
                  UNIVERSITY ATTENDING: <span className="text-danger">*</span>
                </label>
                <span className="ms-2 text-danger">
                  {error?.university_attending}
                </span>
                <select
                  name="university_attending"
                  id="university_attending"
                  className="form-select"
                  onChange={handleChange}
                  value={state.university_attending}
                  required
                >
                  <option selected defaultValue={null}>
                    Choose university...
                  </option>
                  {universityOptions.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-md-6">
                <label htmlFor="course_taking" className="form-label fw-bold">
                  COURSE TAKING: <span className="text-danger">*</span>
                </label>
                <span className="ms-2 text-danger">{error?.course_taking}</span>
                <select
                  name="course_taking"
                  id="course_taking"
                  className="form-select"
                  onChange={handleChange}
                  value={state.course_taking}
                  required
                >
                  <option selected defaultValue={null}>
                    Choose course...
                  </option>
                  {courseTakingOptions.map((item, i) => (
                    <option key={i} value={i + 1}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <hr className="my-2 invisible" />

              <div className="col-md-4">
                <label htmlFor="year_level" className="form-label fw-bold">
                  YEAR LEVEL: <span className="text-danger">*</span>
                </label>
                <span className="ms-2 text-danger">{error?.year_level}</span>
                <select
                  name="year_level"
                  id="year_level"
                  className="form-select"
                  onChange={handleChange}
                  value={state.year_level}
                  required
                >
                  <option selected defaultValue={null}>
                    Choose...
                  </option>
                  <option value="FIRST YEAR">FIRST YEAR</option>
                  <option value="SECOND YEAR">SECOND YEAR</option>
                  <option value="THIRD YEAR">THIRD YEAR</option>
                  <option value="FOURTH YEAR">FOURTH YEAR</option>
                  <option value="FIFTH YEAR">FIFTH YEAR</option>
                </select>
              </div>

              <div className="col-md-4">
                <label htmlFor="is_graduating" className="form-label fw-bold">
                  IS GRADUATING: <span className="text-danger">*</span>
                </label>
                <br />
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="is_graduating"
                    id="is_graduating"
                    value={state.is_graduating ?? "true"}
                    onChange={handleChange}
                    required
                  />
                  <label className="form-check-label" htmlFor="is_graduating">
                    Yes
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="is_graduating"
                    id="is_graduating"
                    value={state.is_graduating ?? "false"}
                    onChange={handleChange}
                    required
                  />
                  <label className="form-check-label" htmlFor="inlineRadio1">
                    No
                  </label>
                </div>
              </div>

              <div className="col-md-4">
                <label htmlFor="course_duration" className="form-label fw-bold">
                  COURSE DURATION: <span className="text-danger">*</span>
                </label>
                <span className="ms-2 text-danger">
                  {error?.course_duration}
                </span>
                <select
                  name="course_duration"
                  id="course_duration"
                  className="form-select"
                  onChange={handleChange}
                  value={state.course_duration}
                  required
                >
                  <option selected defaultValue={null}>
                    Choose...
                  </option>
                  <option value="THREE YEARS">THREE (3) YEARS</option>
                  <option value="FOUR YEARS">FOUR (4) YEARS</option>
                  <option value="FIVE YEARS">FIVE (5) YEARS</option>
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
                  ELEMENTARY SCHOOL
                </div>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-8">
                <label
                  htmlFor="elementary_school"
                  className="form-label fw-bold"
                >
                  SCHOOL NAME: <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="elementary_school"
                  id="elementary_school"
                  className="form-control"
                  value={state.elementary_school}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-4">
                <label
                  htmlFor="elementary_school_type"
                  className="form-label fw-bold"
                >
                  SCHOOL TYPE: <span className="text-danger">*</span>
                </label>
                <br />
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="elementary_school_type"
                    id="elementary_school_type_private"
                    value={"PRIVATE"}
                    onChange={handleChange}
                    required
                  />
                  <label
                    className="form-check-label"
                    htmlFor="elementary_school_type_private"
                  >
                    Private
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="elementary_school_type"
                    id="elementary_school_type_public"
                    value={"PUBLIC"}
                    onChange={handleChange}
                    required
                  />
                  <label
                    className="form-check-label"
                    htmlFor="elementary_school_type_public"
                  >
                    Public
                  </label>
                </div>
              </div>

              <hr className="my-2 invisible" />

              <div className="col-md-8">
                <label
                  htmlFor="elementary_school_address"
                  className="form-label fw-bold"
                >
                  SCHOOL ADDRESS: <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="elementary_school_address"
                  id="elementary_school_address"
                  className="form-control"
                  value={state.elementary_school_address}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-4">
                <label
                  htmlFor="elementary_start_end"
                  className="form-label fw-bold"
                >
                  S.Y. GRADUATED (START-END):{" "}
                  <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="elementary_start_end"
                  id="elementary_start_end"
                  className="form-control"
                  value={state.elementary_start_end}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End of Second Row --> */}

        {/* <!-- Third Row --> */}
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
                  JUNIOR HIGH SCHOOL
                </div>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-8">
                <label htmlFor="jhs_school" className="form-label fw-bold">
                  SCHOOL NAME: <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="jhs_school"
                  id="jhs_school"
                  className="form-control"
                  value={state.jhs_school}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="jhs_school_type" className="form-label fw-bold">
                  SCHOOL TYPE: <span className="text-danger">*</span>
                </label>
                <br />
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="jhs_school_type"
                    id="jhs_school_type_private"
                    value={"PRIVATE"}
                    onChange={handleChange}
                    required
                  />
                  <label
                    className="form-check-label"
                    htmlFor="jhs_school_type_private"
                  >
                    Private
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="jhs_school_type"
                    id="jhs_school_type_public"
                    value={"PUBLIC"}
                    onChange={handleChange}
                    required
                  />
                  <label
                    className="form-check-label"
                    htmlFor="jhs_school_type_public"
                  >
                    Public
                  </label>
                </div>
              </div>

              <hr className="my-2 invisible" />

              <div className="col-md-8">
                <label
                  htmlFor="jhs_school_address"
                  className="form-label fw-bold"
                >
                  SCHOOL ADDRESS: <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="jhs_school_address"
                  id="jhs_school_address"
                  className="form-control"
                  value={state.jhs_school_address}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="jhs_start_end" className="form-label fw-bold">
                  S.Y. GRADUATED (START-END):{" "}
                  <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="jhs_start_end"
                  id="jhs_start_end"
                  className="form-control"
                  value={state.jhs_start_end}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End of Third Row --> */}

        {/* <!-- Fourth Row --> */}
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
                  SENIOR HIGH SCHOOL
                </div>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-8">
                <label htmlFor="shs_school" className="form-label fw-bold">
                  SCHOOL NAME: <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="shs_school"
                  id="shs_school"
                  className="form-control"
                  value={state.shs_school}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="shs_school_type" className="form-label fw-bold">
                  SCHOOL TYPE: <span className="text-danger">*</span>
                </label>
                <br />
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="shs_school_type"
                    id="shs_school_type_private"
                    value={"PRIVATE"}
                    onChange={handleChange}
                    required
                  />
                  <label
                    className="form-check-label"
                    htmlFor="shs_school_type_private"
                  >
                    Private
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="shs_school_type"
                    id="shs_school_type_public"
                    value={"PUBLIC"}
                    onChange={handleChange}
                    required
                  />
                  <label
                    className="form-check-label"
                    htmlFor="shs_school_type_public"
                  >
                    Public
                  </label>
                </div>
              </div>

              <hr className="my-2 invisible" />

              <div className="col-md-8">
                <label
                  htmlFor="shs_school_address"
                  className="form-label fw-bold"
                >
                  SCHOOL ADDRESS: <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="shs_school_address"
                  id="shs_school_address"
                  className="form-control"
                  value={state.shs_school_address}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="shs_start_end" className="form-label fw-bold">
                  S.Y. GRADUATED (START-END):{" "}
                  <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="shs_start_end"
                  id="shs_start_end"
                  className="form-control"
                  value={state.shs_start_end}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End of Fourth Row --> */}

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
      {/* <!-- End of Forms Under Educational Background --> */}
    </>
  );
};

EducationalBackground.propTypes = {
  setHelperCount: PropTypes.func,
  setStepCount: PropTypes.func,
  dispatcher: PropTypes.func,
  state: PropTypes.object,
  saveProgress: PropTypes.func,
};

export default EducationalBackground;
