import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constant";
import { useState } from "react";
import { SubmitButton } from "../../components";
import { useNavigate } from "react-router-dom";
import {
  universityOptions,
  courseTakingOptions,
} from "../../extras/selectionData";
import LoadingPage from "../../utils/LoadingPage";
import ServerErrorMessage from "../../utils/ServerErrorMessage";
import SuccessContext from "../../context/SuccessContext";

const ReviewAndProcess = () => {
  const [getFormData, setFormData] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [getUnivName, setUnivName] = useState({});
  const navigate = useNavigate();
  const param = useParams();
  const { id } = param;
  const [isLoading, setLoading] = useState(false);
  const [showError, setIsShownError] = useState(false);
  const [apiErrorMsg, setApiErrorMsg] = useState("");
  const { setSuccessDisplay } = useContext(SuccessContext);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const res = await axios.get(
          `${BASE_URL}/applications/review-and-process/${id}` // New and current method
        );
        console.log("from /applications/review-and-process/ GET method");
        console.log(res);
        if (res.status === 200) {
          setFormData(() => res.data);
          setUnivName(() =>
            universityOptions.find(
              (value) => value.id == res.data.university_attending
            )
          );
        }
      } catch (err) {
        setLoading(false);
        if (err.response) {
          // alert("Server responded with status code: " + err.response.status);
          setApiErrorMsg(
            `Server responded with status code: ${err.response.status}`
          );
          console.error("Response data: " + err.response.data);
        } else if (err.request) {
          // alert("No response received");
          setApiErrorMsg("No response received");
          console.error(err.request);
        } else {
          setApiErrorMsg(`Error creating request: ${err.message}`);
        }
      }
    };
    fetchDataFromAPI();
  }, [setFormData, id]);

  const handleSubmission = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();

    for (const [key, value] of Object.entries(getFormData)) {
      formData.append(key, value);
    }

    try {
      const res = await axios.post(
        `${BASE_URL}/applications/review-and-process/${id}/`, // New and current method
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (res.status === 201) {
        setLoading(false);
        window.open("http://127.0.0.1:8000/survey/1/", "_blank");
        setSuccessDisplay(true);
        navigate("/");
      }
    } catch (err) {
      setLoading(false);
      setIsShownError(true);
      if (err.response) {
        // alert("Server responded with status code: " + err.response.status);
        setApiErrorMsg(
          `Server responded with status code: ${err.response.status}`
        );
        console.error("Response data: " + err.response.data);
      } else if (err.request) {
        // alert("No response received");
        setApiErrorMsg("No response received");
        console.error(err.request);
      } else {
        setApiErrorMsg(`Error creating request: ${err.message}`);
      }
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setOpenModal(true);
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
      <div className="p-2 border border-3 border-dark rounded d-flex justify-content-around align-items-center bg-light mb-4 w-25 mx-auto mt-5">
        <div className="d-flex flex-column justify-content-center py-2">
          <h6 className="fw-bold">Your Application ID is:</h6>
          <p className="text-center text-danger fw-bold">
            {getFormData.application_reference_id}
          </p>
        </div>
      </div>

      <div className="text-danger text-center fw-bold mt-5 mb-2">
        **Double check if the provided name is correct. If not please change it
        with your correct name.**
      </div>

      {/* NATIONAL ID INFO */}
      <div className="card cs-bg-secondary-rounded shadow w-75 mx-auto mb-5 mt-1">
        <div className="card-header cs-bg-fadeblue">
          <div className="container d-flex justify-content-between align-items-center">
            <div className="d-inline-flex gap-3 align-items-center">
              <i className="fa-solid fa-user-large fs-3"></i>
              <div className="fs-5 text-white fw-semibold">
                INFO FROM NATIONAL ID
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
                type="text"
                name="firstname"
                id="firstname"
                className="form-control"
                value={getFormData.firstname}
                onChange={(e) =>
                  setFormData({ ...getFormData, firstname: e.target.value })
                }
              />
            </div>

            <div className="col-md-4">
              <label htmlFor="middlename" className="form-label fw-bold">
                MIDDLE NAME:
              </label>

              <input
                type="text"
                name="middlename"
                id="middlename"
                className="form-control"
                value={getFormData.middlename}
                onChange={(e) =>
                  setFormData({ ...getFormData, middlename: e.target.value })
                }
              />
            </div>

            <div className="col-md-4">
              <label htmlFor="lastname" className="form-label fw-bold">
                LAST NAME:
              </label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                className="form-control"
                value={getFormData.lastname}
                onChange={(e) =>
                  setFormData({ ...getFormData, lastname: e.target.value })
                }
              />
            </div>
          </div>
        </div>
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
                className="form-control bg-secondary-subtle"
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
                className="form-control bg-secondary-subtle"
                value={getFormData.gender == 1 ? "Male" : "Female"}
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
                className="form-control bg-secondary-subtle"
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
                className="form-control bg-secondary-subtle"
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
                className="form-control bg-secondary-subtle"
                value={getFormData.house_address}
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
                className="form-control bg-secondary-subtle"
                value={getFormData.barangay}
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
                className="form-control bg-secondary-subtle"
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
                className="form-control bg-secondary-subtle"
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
                className="form-control bg-secondary-subtle"
                readOnly
                // value={getFormData.university_attending}
                value={getUnivName}
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="course_taking" className="form-label fw-bold">
                COURSE TAKING:
              </label>
              <input
                name="course_taking"
                id="course_taking"
                className="form-control bg-secondary-subtle"
                readOnly
                // value={getFormData.course_taking}
                value={courseTakingOptions[getFormData.course_taking]}
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
                className="form-control bg-secondary-subtle"
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
                className="form-control bg-secondary-subtle"
                type="text"
                name="is_graduating"
                id="is_graduating"
                value={getFormData.is_graduating ? "Yes" : "No"}
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
                className="form-control bg-secondary-subtle"
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
                className="form-control bg-secondary-subtle"
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
                className="form-control bg-secondary-subtle"
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
                className="form-control bg-secondary-subtle"
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
                className="form-control bg-secondary-subtle"
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
                className="form-control bg-secondary-subtle"
                value={getFormData.jhs_school}
                readOnly
              />
            </div>

            <div className="col-md-4">
              <label htmlFor="jhs_school_type" className="form-label fw-bold">
                SCHOOL TYPE:
              </label>
              <input
                className="form-control bg-secondary-subtle"
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
                className="form-control bg-secondary-subtle"
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
                className="form-control bg-secondary-subtle"
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
                className="form-control bg-secondary-subtle"
                value={getFormData.shs_school}
                readOnly
              />
            </div>

            <div className="col-md-4">
              <label htmlFor="shs_school_type" className="form-label fw-bold">
                SCHOOL TYPE:
              </label>
              <input
                className="form-control bg-secondary-subtle"
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
                className="form-control bg-secondary-subtle"
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
                className="form-control bg-secondary-subtle"
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
                className="form-control bg-secondary-subtle"
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
                className="form-control bg-secondary-subtle"
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
                  className="form-control bg-secondary-subtle"
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
                className="form-control bg-secondary-subtle"
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
                className="form-control bg-secondary-subtle"
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
                className="form-control bg-secondary-subtle"
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
                className="form-control bg-secondary-subtle"
                value={getFormData.semester}
                readOnly
              />
            </div>

            <div className="col-md-4">
              <label className="form-label fw-bold">APPLYING FOR MERIT:</label>
              <input
                type="text"
                name="is_applying_for_merit"
                id="is_applying_for_merit"
                className="form-control bg-secondary-subtle"
                value={getFormData.is_applying_for_merit ? "Yes" : "No"}
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
                className="form-control bg-secondary-subtle"
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
                className="form-control bg-secondary-subtle"
                type="text"
                name="is_ladderized"
                id="is_ladderized_yes"
                value={getFormData.is_ladderized ? "Yes" : "No"}
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
                className="form-control bg-secondary-subtle"
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
                className="form-control bg-secondary-subtle"
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
                className="form-control bg-secondary-subtle"
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
                className="form-control bg-secondary-subtle"
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
          {/* <button
            type="button"
            className="btn cs-btn-secondary fw-bold fs-5 shadow-sm px-5"
            onClick={() => navigate("/startscholar")}
          >
            Cancel
          </button> */}
          <SubmitButton onClick={handleOnSubmit}>Proceed</SubmitButton>
        </div>
      </div>

      {/* MODAL */}
      {openModal && (
        <form
          method="post"
          encType="multipart/form-data"
          className="cs-modal-container"
        >
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
                onClick={handleSubmission}
              >
                I Understand
              </button>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default ReviewAndProcess;
