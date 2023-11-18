import { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../constant";
import { useState } from "react";
import { SubmitButton } from "../../components";
import { useNavigate } from "react-router-dom";

axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const ReviewForm = () => {
  const [getFormData, setFormData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const res = await axios.get(
          `${BASE_URL}/application/review-and-process/`
        );
        console.log("from reviewform");
        console.log(res.data);
        if (res.status === 200) {
          setFormData(res.data);
        }
      } catch (err) {
        if (err.response) {
          alert("Server responded with status code: " + err.response.status);
          console.error("Response data: " + err.response.data);
        } else if (err.request) {
          alert("No response received");
          console.error(err.request);
        } else {
          alert("Error creating request: " + err.message);
        }
      }
    };
    fetchDataFromAPI();
  }, [setFormData]);

  const handleSubmission = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${BASE_URL}/application/review-and-process/`,
        getFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(res.data);
      if (res.status === 200) {
        navigate("/success");
        localStorage.removeItem("encryptedFormData");
        localStorage.removeItem("formSecurityAccessData");
        localStorage.removeItem("_grecaptcha");
      }
    } catch (err) {
      if (err.response) {
        alert("Server responded with status code: " + err.response.status);
        console.error("Response data: " + err.response.data);
      } else if (err.request) {
        alert("No response received");
        console.error(err.request);
      } else {
        alert("Error creating request: " + err.message);
      }
    }
  };

  return (
    <>
      <div className="p-2 border border-3 border-dark rounded d-flex justify-content-around align-items-center bg-light mb-4 w-25 mx-auto mt-5">
        <div className="d-flex flex-column justify-content-center py-2">
          <h6 className="fw-bold">Your Application ID is:</h6>
          <p className="text-center text-danger fw-bold">
            {getFormData.application_reference_id}
          </p>
        </div>
      </div>

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
                value={getFormData.scholarship_type}
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
                value={getFormData.gender}
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
                value={getFormData.birthdate}
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
                value={getFormData.email_address}
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
                value={getFormData.house_address}
                readOnly
              />
            </div>

            <hr className="my-2 invisible" />

            <div className="col-md-6">
              <label htmlFor="barangay" className="form-label fw-bold">
                BARANGAY:
              </label>
              <select
                name="barangay"
                id="barangay"
                className="form-control"
                value={getFormData.barangay}
                readOnly
              />
            </div>

            <hr className="my-2 invisible" />

            <div className="col-md-6">
              <label htmlFor="barangay" className="form-label fw-bold">
                RELIGION:
              </label>
              <input
                name="religion"
                id="religion"
                className="form-control"
                value={getFormData.religion}
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
                value={getFormData.personalized_facebook_link}
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
                value={getFormData.university_attending}
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
                value={getFormData.course_taking}
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
                value={getFormData.year_level}
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
                value={getFormData.is_graduating}
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
                value={getFormData.course_duration}
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
                value={getFormData.elementary_school}
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
                value={getFormData.elementary_school_type}
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
                value={getFormData.elementary_school_address}
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
                value={getFormData.elementary_start_end}
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
                value={getFormData.jhs_school}
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
                value={getFormData.jhs_school_type}
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
                value={getFormData.jhs_school_address}
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
                value={getFormData.jhs_start_end}
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
                value={getFormData.shs_school}
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
                value={getFormData.shs_school_type}
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
                value={getFormData.shs_school_address}
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
                value={getFormData.shs_start_end}
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
                value={getFormData.guardian_complete_name}
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
                value={getFormData.guardian_complete_address}
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
                  value={getFormData.guardian_contact_number}
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
                value={getFormData.guardian_occupation}
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
                value={getFormData.guardian_place_of_work}
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
                value={getFormData.guardian_educational_attainment}
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
                value={getFormData.semester}
                readOnly
              />
            </div>

            <div className="col-md-4">
              <label className="form-label fw-bold">APPLYING FOR MERIT:</label>
              <input
                type="text"
                name="is_applyingForMerit"
                id="is_applyingForMerit"
                className="form-control"
                value={getFormData.is_applyingForMerit}
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
                value={getFormData.total_units_enrolled}
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
                value={getFormData.is_ladderized}
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
                value={getFormData.number_of_semesters_before_graduating}
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
                value={getFormData.transferee}
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
                value={getFormData.shiftee}
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
                value={getFormData.student_status}
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
            onClick={() => navigate("/forms")}
          >
            Cancel
          </button>
          <SubmitButton onClick={handleSubmission}>Proceed</SubmitButton>
        </div>
      </div>
    </>
  );
};

export default ReviewForm;
