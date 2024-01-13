/* eslint-disable react/jsx-no-target-blank */
import { useState } from "react";
import { PropTypes } from "prop-types";
import { isMiscInfoValid } from "../../extras/handleFormError";
import { SubmitButton } from "../../components";
import axios from "axios";
import HelperOffcanvas from "../../components/Offcanvas/HelperOffcanvas";

axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const OthersForm = ({
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
      payload: {
        name: e.target.name,
        value: e.target.value,
      },
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
    let errors = isMiscInfoValid(state);
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
      <form
        id="scholasticInfo"
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
                  src="/assets/icons/Grant.png"
                  className="img-fluid"
                  alt="Grant Icon"
                  width={32}
                  height={32}
                />
                <div className="fs-5 text-white fw-semibold">
                  MISCELLANEOUS INFORMATION
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
              <div className="col-md-4">
                <label htmlFor="semester" className="form-label fw-bold">
                  SEMESTER: <span className="text-danger">*</span>
                </label>
                <span className="ms-2 text-danger">{error?.semester}</span>
                <select
                  name="semester"
                  id="semester"
                  className="form-select"
                  value={state.semester}
                  onChange={handleChange}
                  required
                >
                  <option selected="selected" defaultValue="">
                    Open this select menu
                  </option>
                  <option value="FIRST SEMESTER">FIRST SEMESTER</option>
                  <option value="SECOND SEMESTER">SECOND SEMESTER</option>
                </select>
              </div>

              <hr className="my-2 invisible" />

              <div className="col-md-4">
                <label
                  htmlFor="registration_form"
                  className="form-label fw-bold"
                >
                  REGISTRATION FORM FILE: <span className="text-danger">*</span>
                </label>
                <input
                  type="file"
                  name="registration_form"
                  id="registration_form"
                  className="form-control"
                  onChange={handleFile}
                  required
                />
              </div>

              <div className="col-md-4">
                <label
                  htmlFor="informative_copy_of_grades"
                  className="form-label fw-bold"
                >
                  INFORMATIVE COPY OF GRADES:{" "}
                  <span className="text-danger">*</span>
                </label>
                <input
                  type="file"
                  name="informative_copy_of_grades"
                  id="informative_copy_of_grades"
                  className="form-control"
                  onChange={handleFile}
                  required
                />
              </div>

              <div className="col-md-4">
                <label className="form-label fw-bold">
                  APPLYING FOR MERIT: <span className="text-danger">*</span>
                </label>
                <div className="form-check">
                  <label
                    className="form-check-label"
                    htmlFor="is_applying_for_merit"
                  >
                    Click if yes
                  </label>
                  <input
                    type="checkbox"
                    name="is_applying_for_merit"
                    id="is_applying_for_merit"
                    className="form-check-input"
                    value={1}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <hr className="my-2 invisible" />

              <div className="col-md-4">
                <label
                  htmlFor="total_units_enrolled"
                  className="form-label fw-bold"
                >
                  TOTAL UNITS ENROLLED: <span className="text-danger">*</span>
                </label>
                <span className="ms-2 text-danger">
                  {error?.total_units_enrolled}
                </span>
                <input
                  type="number"
                  name="total_units_enrolled"
                  id="total_units_enrolled"
                  className="form-control"
                  onChange={handleChange}
                  value={state.total_units_enrolled}
                  placeholder="e.g.: 12"
                  required
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="is_ladderized" className="form-label fw-bold">
                  LADDERIZED: <span className="text-danger">*</span>
                </label>
                <br />
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="is_ladderized"
                    id="is_ladderized_yes"
                    value={1}
                    onChange={handleChange}
                    required
                  />
                  <label
                    className="form-check-label"
                    htmlFor="is_ladderized_yes"
                  >
                    Yes
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="is_ladderized"
                    id="is_ladderized_no"
                    value={0}
                    onChange={handleChange}
                    required
                  />
                  <label
                    className="form-check-label"
                    htmlFor="is_ladderized_no"
                  >
                    No
                  </label>
                </div>
              </div>

              <div className="col-md-4">
                <label
                  htmlFor="number_of_semesters_before_graduating"
                  className="form-label fw-bold"
                >
                  NO. OF SEMESERS REMAINING:{" "}
                  <span className="text-danger">*</span>
                </label>
                <span className="ms-2 text-danger">
                  {error?.number_of_semesters_before_graduating}
                </span>
                <input
                  type="number"
                  name="number_of_semesters_before_graduating"
                  id="number_of_semesters_before_graduating"
                  className="form-control"
                  value={state.number_of_semesters_before_graduating}
                  onChange={handleChange}
                  placeholder="e.g.: 1"
                  required
                />
              </div>

              <hr className="my-2 invisible" />

              <div className="col-md-4">
                <label htmlFor="transferee" className="form-label fw-bold">
                  TRANSFEREE: (if not put N/A)
                  <span className="text-danger">*</span>
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

              <div className="col-md-4">
                <label htmlFor="shiftee" className="form-label fw-bold">
                  SHIFTEE: (if not put N/A)
                  <span className="text-danger">*</span>
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

              <div className="col-md-4">
                <label htmlFor="student_status" className="form-label fw-bold">
                  STUDENT STATUS: <span className="text-danger">*</span>
                </label>
                <span className="ms-2 text-danger">
                  {error?.student_status}
                </span>
                <select
                  name="student_status"
                  id="student_status"
                  className="form-select"
                  value={state.student_status}
                  onChange={handleChange}
                  required
                >
                  <option selected="selected" defaultValue="">
                    Open this select menu
                  </option>
                  <option value="REGULAR">Regular</option>
                  <option value="IRREGULAR">Irregular</option>
                  <option value="OCTOBERIAN">Octoberian</option>
                </select>
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
      {/* <!-- End of FORMS Under Other Scholastic Information and Requirements --> */}

      {/* Helper Offcanvas */}
      <HelperOffcanvas
        title="Miscellaneous Information Inquiry"
        element={<MiscSectionHelper />}
      />
    </>
  );
};

const MiscSectionHelper = () => {
  return (
    <>
      <div className="d-flex flex-column gap-4 p-2">
        <div className="d-inline-flex flex-column gap-2">
          <h5 className="fw-bold">Semester</h5>
          <p>
            First Semester and Second Semester are the only option based on the
            Taguig LGU scholarship program as our prospect client for this
            system. To learn more, you can visit their website.{" "}
            <a
              target="_blank"
              rel="noopener norefferer"
              href="http://tinyurl.com/5bh4bxs5"
            >
              Click me!
            </a>
          </p>
        </div>

        <div className="d-inline-flex flex-column gap-2">
          <h5 className="fw-bold">Registration Form File</h5>
          <p>
            Upload the scanned copy PDF file of your registration form from your
            current university attending.
          </p>
        </div>

        <div className="d-inline-flex flex-column gap-2">
          <h5 className="fw-bold">Informative Copy of Grades</h5>
          <p>
            Upload the scanned copy PDF file of your informative copy of grades
            from your current university attending.
          </p>
        </div>

        <div className="d-inline-flex flex-column gap-2">
          <h5 className="fw-bold">Applying for Merit</h5>
          <p>
            Tick the checkbox if you are applying for a merit. By applying for a
            merit, you will receive an additional incentives. However, this only
            applies if you are valid for the merit.
          </p>
        </div>

        <div className="d-inline-flex flex-column gap-2">
          <h5 className="fw-bold">Total Units Enrolled</h5>
          <p>Total the units of the current ongoing semester.</p>
        </div>

        <div className="d-inline-flex flex-column gap-2">
          <h5 className="fw-bold">Ladderize</h5>
          <p>If you are a ladderize student click yes, if not just click no.</p>
        </div>

        <div className="d-inline-flex flex-column gap-2">
          <h5 className="fw-bold">Number of Semester Remaining</h5>
          <p>
            Indicate the number of semester remaining before the school year
            ends.
          </p>
        </div>

        <div className="d-inline-flex flex-column gap-2">
          <h5 className="fw-bold">Student Status</h5>
          <p>
            Indicate if you are a Regular, Irregular, or Octoberian student. An
            Octoberian student is referenced from Taguig City scholarship
            program. To learn more you can visit their website{" "}
            <a
              target="_blank"
              rel="noopener norefferer"
              href="http://tinyurl.com/5bh4bxs5"
            >
              click me
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
};

OthersForm.propTypes = {
  setHelperCount: PropTypes.func,
  setStepCount: PropTypes.func,
  dispatcher: PropTypes.func,
  state: PropTypes.object,
  saveProgress: PropTypes.func,
};

export default OthersForm;
