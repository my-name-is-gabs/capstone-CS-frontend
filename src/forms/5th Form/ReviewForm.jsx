/* eslint-disable react/prop-types */
import axios from "axios";
import { BASE_URL } from "../../constant";
import { SubmitButton } from "../../components";
import { useNavigate } from "react-router-dom";
import {
  universityOptions,
  courseTakingOptions,
} from "../../extras/selectionData";
import { useState } from "react";
import LoadingPage from "../../utils/LoadingPage";
import ServerErrorMessage from "../../utils/ServerErrorMessage";

axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const ReviewForm = ({ setStepCount, state }) => {
  const navigate = useNavigate();
  const [getUnivName] = useState(() =>
    universityOptions.find((value) => value.id == state.university_attending)
  );
  const [isLoading, setLoading] = useState(false);
  const [showError, setIsShownError] = useState(false);
  const [apiErrorMsg, setApiErrorMsg] = useState("");

  const sendingData = async () => {
    setLoading(true);
    const formData = new FormData();

    for (const [key, value] of Object.entries(state)) {
      formData.append(key, value);
    }

    try {
      const res = await axios.post(`${BASE_URL}/applications/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      localStorage.removeItem("encryptedFormData");
      localStorage.removeItem("formSecurityAccessData");
      localStorage.removeItem("_grecaptcha");
      if (res.status === 200) {
        setLoading(false);
        navigate(`/review_and_process/${state.application_reference_id}`);
      }
    } catch (err) {
      setLoading(false);
      setIsShownError(true);
      if (err.response) {
        // alert("Server responded with status code: " + err.response.status);
        setApiErrorMsg(
          `Server responded with status code: ${err.response.status}. ${err.response.data}`
        );
        console.error("Response data: " + err.message);
      } else if (err.request) {
        // alert("No response received");
        setApiErrorMsg("No response received");
        console.error(err.request);
      } else {
        // alert("Error creating request: " + err.message);
        setApiErrorMsg(`Error creating request: ${err.message}`);
      }
    }
  };

  return (
    <>
      {showError && (
        <ServerErrorMessage
          setIsShownError={setIsShownError}
          message={apiErrorMsg}
        />
      )}
      {isLoading && <LoadingPage />}

      <div className="text-danger text-center fw-bold mt-5 mb-2">
        **Please take time to review your details before submitting the form**
      </div>

      {/* PERSONAL INFO SECTION */}
      <div className="card cs-bg-secondary-rounded shadow w-75 mx-auto mb-5 mt-1">
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
            <div className="col-md-6">
              <label htmlFor="scholarship_type" className="form-label fw-bold">
                SCHOLARSHIP TYPE:
              </label>
              <input
                name="scholarship_type"
                id="scholarship_type"
                className="form-control"
                value={state.scholarship_type}
                readOnly
              />
            </div>

            <hr className="my-2 invisible" />

            <div className="col-md-4">
              <label htmlFor="gender" className="form-label fw-bold">
                GENDER:
              </label>

              <input
                name="gender"
                id="gender"
                className="form-control"
                value={state.gender == 1 ? "Male" : "Female"}
                readOnly
              />
            </div>

            <div className="col-md-4">
              <label htmlFor="birthdate" className="form-label fw-bold">
                DATE OF BIRTH:
              </label>
              <input
                type="date"
                name="birthdate"
                id="birthdate"
                className="form-control"
                value={state.birthdate}
                readOnly
              />
            </div>

            <div className="col-md-4">
              <label htmlFor="email" className="form-label fw-bold">
                EMAIL:
              </label>
              <input
                type="email"
                name="email_address"
                id="email"
                className="form-control"
                value={state.email_address}
                readOnly
              />
            </div>

            <hr className="my-2 invisible" />

            <div className="col-md-12">
              <label htmlFor="address" className="form-label fw-bold">
                ADDRESS (House No./Street):{" "}
              </label>
              <input
                type="text"
                name="house_address"
                id="address"
                className="form-control"
                value={state.house_address}
                readOnly
              />
            </div>

            <hr className="my-2 invisible" />

            <div className="col-md-6">
              <label htmlFor="barangay" className="form-label fw-bold">
                BARANGAY:
              </label>
              <input
                name="barangay"
                id="barangay"
                className="form-control"
                value={state.barangay}
                readOnly
              />
            </div>

            <hr className="my-2 invisible" />

            <div className="col-md-6">
              <label htmlFor="religion" className="form-label fw-bold">
                RELIGION:
              </label>
              <input
                name="religion"
                id="religion"
                className="form-control"
                value={state.religion}
                readOnly
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="fb_link" className="form-label fw-bold">
                FB LINK:
              </label>
              <input
                type="text"
                name="personalized_facebook_link"
                id="fb_link"
                className="form-control"
                value={state.personalized_facebook_link}
                readOnly
              />
            </div>
          </div>
        </div>
      </div>

      {/* EDUC SECTION */}
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
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <label
                htmlFor="university_attending"
                className="form-label fw-bold"
              >
                UNIVERSITY ATTENDING:
              </label>
              <input
                name="university_attending"
                id="university_attending"
                className="form-control"
                readOnly
                value={getUnivName.name}
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="course_taking" className="form-label fw-bold">
                COURSE TAKING:
              </label>
              <input
                name="course_taking"
                id="course_taking"
                className="form-control"
                readOnly
                value={courseTakingOptions[state.course_taking]}
              />
            </div>

            <hr className="my-2 invisible" />

            <div className="col-md-4">
              <label htmlFor="year_level" className="form-label fw-bold">
                YEAR LEVEL:
              </label>
              <input
                name="year_level"
                id="year_level"
                className="form-control"
                readOnly
                value={state.year_level}
              />
            </div>

            <div className="col-md-4">
              <label htmlFor="is_graduating" className="form-label fw-bold">
                IS GRADUATING:
              </label>
              <br />
              <input
                className="form-control"
                type="text"
                name="is_graduating"
                id="is_graduating"
                value={state.is_graduating ? "Yes" : "No"}
                readOnly
              />
            </div>

            <div className="col-md-4">
              <label htmlFor="course_duration" className="form-label fw-bold">
                COURSE DURATION:
              </label>
              <input
                name="course_duration"
                id="course_duration"
                className="form-control"
                readOnly
                value={state.course_duration}
              />
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
              <label htmlFor="elementary_school" className="form-label fw-bold">
                SCHOOL NAME:
              </label>
              <input
                type="text"
                name="elementary_school"
                id="elementary_school"
                className="form-control"
                value={state.elementary_school}
                readOnly
              />
            </div>

            <div className="col-md-4">
              <label
                htmlFor="elementary_school_type"
                className="form-label fw-bold"
              >
                SCHOOL TYPE:
              </label>
              <input
                className="form-control"
                type="text"
                name="elementary_school_type"
                id="elementary_school_type_private"
                value={state.elementary_school_type}
                readOnly
              />
            </div>

            <hr className="my-2 invisible" />

            <div className="col-md-8">
              <label
                htmlFor="elementary_school_address"
                className="form-label fw-bold"
              >
                SCHOOL ADDRESS:
              </label>
              <input
                type="text"
                name="elementary_school_address"
                id="elementary_school_address"
                className="form-control"
                value={state.elementary_school_address}
                readOnly
              />
            </div>

            <div className="col-md-4">
              <label
                htmlFor="elementary_start_end"
                className="form-label fw-bold"
              >
                S.Y. GRADUATED (START-END):{" "}
              </label>
              <input
                type="text"
                name="elementary_start_end"
                id="elementary_start_end"
                className="form-control"
                value={state.elementary_start_end}
                readOnly
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
                SCHOOL NAME:
              </label>
              <input
                type="text"
                name="jhs_school"
                id="jhs_school"
                className="form-control"
                value={state.jhs_school}
                readOnly
              />
            </div>

            <div className="col-md-4">
              <label htmlFor="jhs_school_type" className="form-label fw-bold">
                SCHOOL TYPE:
              </label>
              <input
                className="form-control"
                type="text"
                name="jhs_school_type"
                id="jhs_school_type_private"
                value={state.jhs_school_type}
                readOnly
              />
            </div>

            <hr className="my-2 invisible" />

            <div className="col-md-8">
              <label
                htmlFor="jhs_school_address"
                className="form-label fw-bold"
              >
                SCHOOL ADDRESS:
              </label>
              <input
                type="text"
                name="jhs_school_address"
                id="jhs_school_address"
                className="form-control"
                value={state.jhs_school_address}
                readOnly
              />
            </div>

            <div className="col-md-4">
              <label htmlFor="jhs_start_end" className="form-label fw-bold">
                S.Y. GRADUATED (START-END):{" "}
              </label>
              <input
                type="text"
                name="jhs_start_end"
                id="jhs_start_end"
                className="form-control"
                value={state.jhs_start_end}
                readOnly
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
                SCHOOL NAME:
              </label>
              <input
                type="text"
                name="shs_school"
                id="shs_school"
                className="form-control"
                value={state.shs_school}
                readOnly
              />
            </div>

            <div className="col-md-4">
              <label htmlFor="shs_school_type" className="form-label fw-bold">
                SCHOOL TYPE:
              </label>
              <input
                className="form-control"
                type="text"
                name="shs_school_type"
                id="shs_school_type_private"
                value={state.shs_school_type}
                readOnly
              />
            </div>

            <hr className="my-2 invisible" />

            <div className="col-md-8">
              <label
                htmlFor="shs_school_address"
                className="form-label fw-bold"
              >
                SCHOOL ADDRESS:
              </label>
              <input
                type="text"
                name="shs_school_address"
                id="shs_school_address"
                className="form-control"
                value={state.shs_school_address}
                readOnly
              />
            </div>

            <div className="col-md-4">
              <label htmlFor="shs_start_end" className="form-label fw-bold">
                S.Y. GRADUATED (START-END):{" "}
              </label>
              <input
                type="text"
                name="shs_start_end"
                id="shs_start_end"
                className="form-control"
                value={state.shs_start_end}
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End of Fourth Row EDUC SECTION--> */}

      {/* GUARDIAN SECTION */}
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
                {"GUARDIAN'S"} BACKGROUND INFORMATION
              </div>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-12">
              <label
                htmlFor="guardian_complete_name"
                className="form-label fw-bold"
              >
                FULL NAME:
              </label>
              <input
                type="text"
                name="guardian_complete_name"
                id="guardian_complete_name"
                className="form-control"
                value={state.guardian_complete_name}
                readOnly
              />
            </div>

            <hr className="my-2 invisible" />

            <div className="col-md-12">
              <label
                htmlFor="guardian_complete_address"
                className="form-label fw-bold"
              >
                COMPLETE ADDRESS:
              </label>
              <input
                type="text"
                name="guardian_complete_address"
                id="guardian_complete_address"
                className="form-control"
                value={state.guardian_complete_address}
                readOnly
              />
            </div>

            <hr className="my-2 invisible" />

            <div className="col-md-4">
              <label
                htmlFor="guardian_contact_number"
                className="form-label fw-bold"
              >
                CONTACT NUMBER:
              </label>

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
                  readOnly
                />
              </div>
            </div>

            <div className="col-md-4">
              <label
                htmlFor="guardian_occupation"
                className="form-label fw-bold"
              >
                OCCUPATION:
              </label>
              <input
                type="text"
                name="guardian_occupation"
                id="guardian_occupation"
                className="form-control"
                value={state.guardian_occupation}
                readOnly
              />
            </div>

            <div className="col-md-4">
              <label
                htmlFor="guardian_place_of_work"
                className="form-label fw-bold"
              >
                PLACE OF WORK:
              </label>
              <input
                type="text"
                name="guardian_place_of_work"
                id="guardian_place_of_work"
                className="form-control"
                value={state.guardian_place_of_work}
                readOnly
              />
            </div>

            <hr className="my-2 invisible" />

            <div className="col-md-12">
              <label
                htmlFor="guardian_educational_attainment"
                className="form-label fw-bold"
              >
                EDUCATIONAL ATTAINMENT:
              </label>
              <input
                type="text"
                name="guardian_educational_attainment"
                id="guardian_educational_attainment"
                className="form-control"
                value={state.guardian_educational_attainment}
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- END OF FIRST ROW --> */}

      {/* MISC SECTION */}
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
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-4">
              <label htmlFor="semester" className="form-label fw-bold">
                SEMESTER:
              </label>
              <input
                name="semester"
                id="semester"
                className="form-control"
                value={state.semester}
                readOnly
              />
            </div>

            <div className="col-md-4">
              <label className="form-label fw-bold">APPLYING FOR MERIT:</label>
              <input
                type="text"
                name="is_applying_for_merit"
                id="is_applying_for_merit"
                className="form-control"
                value={state.is_applying_for_merit ? "Yes" : "No"}
                readOnly
              />
            </div>

            <hr className="my-2 invisible" />

            <div className="col-md-4">
              <label
                htmlFor="total_units_enrolled"
                className="form-label fw-bold"
              >
                TOTAL UNITS ENROLLED:
              </label>

              <input
                type="number"
                name="total_units_enrolled"
                id="total_units_enrolled"
                className="form-control"
                readOnly
                value={state.total_units_enrolled}
              />
            </div>

            <div className="col-md-4">
              <label htmlFor="is_ladderized" className="form-label fw-bold">
                LADDERIZED:
              </label>
              <br />
              <input
                className="form-control"
                type="text"
                name="is_ladderized"
                id="is_ladderized_yes"
                value={state.is_ladderized ? "Yes" : "No"}
                readOnly
              />
            </div>

            <div className="col-md-4">
              <label
                htmlFor="number_of_semesters_before_graduating"
                className="form-label fw-bold"
              >
                NO. OF SEMESERS REMAINING:{" "}
              </label>
              <input
                type="number"
                name="number_of_semesters_before_graduating"
                id="number_of_semesters_before_graduating"
                className="form-control"
                value={state.number_of_semesters_before_graduating}
                readOnly
              />
            </div>

            <hr className="my-2 invisible" />

            <div className="col-md-4">
              <label htmlFor="transferee" className="form-label fw-bold">
                TRANSFEREE: (if not put N/A)
              </label>
              <input
                type="text"
                name="transferee"
                id="transferee"
                className="form-control"
                value={state.transferee}
                readOnly
              />
            </div>

            <div className="col-md-4">
              <label htmlFor="shiftee" className="form-label fw-bold">
                SHIFTEE: (if not put N/A)
              </label>
              <input
                type="text"
                name="shiftee"
                id="shiftee"
                className="form-control"
                value={state.shiftee}
                readOnly
              />
            </div>

            <div className="col-md-4">
              <label htmlFor="student_status" className="form-label fw-bold">
                STUDENT STATUS:
              </label>
              <input
                name="student_status"
                id="student_status"
                className="form-control"
                value={state.student_status}
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- END OF FIRST ROW --> */}

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
          <SubmitButton onClick={sendingData}>Proceed</SubmitButton>
        </div>
      </div>

      {/* {openModal && (
        <div className="cs-modal-container">
          <div className="cs-modal">
            <div className="cs-modal-header">
              <h1 className="modal-title fs-5 fw-bold" id="exampleModalLabel">
                AGREEMENT
              </h1>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={() => setOpenModal(false)}
              ></button>
            </div>
            <div className="cs-modal-body">
              <p className="p-3">
                I hereby certify that <b>ALL</b> the answers given above are
                <b> TRUE</b> and <b>CORRECT</b>. I further acknowledge that{" "}
                <b>
                  ANY ACT OF DISHONESTY OR FALSIFICATION MAY BE A GROUND FOR MY
                  DISQUALIFICATION
                </b>{" "}
                from this scholarship program. I also understand that this
                submission of application does <b>NOT AUTOMATICALLY QUALIFY</b>{" "}
                me for the scholarship grant and that I will abide by the
                decision of the ABC City Scholarship Screening Committee.
              </p>
            </div>
            <div className="cs-modal-footer">
              <button
                className="btn cs-btn-primary fw-bold fs-5 shadow-sm px-4"
                onClick={sendingData}
              >
                I Understand
              </button>
            </div>
          </div>
        </div>
      )} */}
    </>
  );
};

export default ReviewForm;
