import { barangayOptions } from "../../extras/selectionData";
import { isRenewInfoValid } from "../../extras/handleFormError";
// import {
//   courseTakingOptions,
//   universityOptions,
// } from "../../extras/selectionData";
import { SubmitButton } from "../../components";
import { useState, useReducer, useEffect } from "react";
import {
  formRenewReducer,
  INITIAL_STATE,
} from "../../reducer/renewalFormReducer";
import axios from "../../api/axios";
import LoadingPage from "../../utils/LoadingPage";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constant";

const RenewalForm = () => {
  const [error, setError] = useState({});
  const [state, dispatch] = useReducer(formRenewReducer, INITIAL_STATE);
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [universityOptions, setUniversityOptions] = useState([]);
  const [courseTakingOptions, setCourseTakingOptions] = useState([]);

  useEffect(() => {
    const fetchingUniv = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/applications/univ/`);
        setUniversityOptions(() => res.data);
      } catch (err) {
        if (err.response) {
          // alert("Server responded with status code: " + err.response.status);
          console.error(
            `Server responded with status code: ${err.response.status}. ${err.response.data}`
          );
          console.debug("Response data: " + err.response);
        }
      }
    };
    fetchingUniv();

    const fetchingCourse = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/applications/courses/`);
        setCourseTakingOptions(() => res.data);
      } catch (err) {
        if (err.response) {
          // alert("Server responded with status code: " + err.response.status);
          console.error(
            `Server responded with status code: ${err.response.status}. ${err.response.data}`
          );
          console.debug("Response data: " + err.response);
        }
      }
    };
    fetchingCourse();
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    let errors = isRenewInfoValid(state);
    setError(errors);
    if (Object.keys(errors).length > 0) return;

    const formData = new FormData();

    for (const [key, value] of Object.entries(state)) {
      formData.append(key, value);
    }

    const patchData = async () => {
      setLoading(true);
      try {
        const res = await axios.patch("/applications/renew/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log(res);
        setLoading(false);
        alert("Renewal application submitted");
        navigate("/scholar");
      } catch (error) {
        setLoading(false);
        alert("Something went wrong");
        if (error.response.status === 401) {
          alert("Session has expired");
          navigate("/login");
        }
      }
    };
    patchData();
  };

  const handleChange = (e) => {
    dispatch({
      type: "RENEWAL_FORM_DATA",
      payload: {
        name: e.target.name,
        value: e.target.value,
      },
    });
  };

  const handleFile = (e) => {
    dispatch({
      type: "RENEWAL_FILE_DATA",
      payload: { name: e.target.name, value: e.target.files[0] },
    });
  };

  return (
    <>
      {isLoading && <LoadingPage />}
      <form
        method="post"
        encType="multipart/form-data"
        className="container mt-5"
      >
        {/* SCHOLAR INFORMATION */}
        <div className="card mx-auto mb-5" style={{ width: "80%" }}>
          <div className="card-header">
            <div className="container d-flex justify-content-between align-items-center">
              <div className="d-inline-flex gap-3 align-items-center">
                <div className="fs-5 fw-semibold">SCHOLARSHIP RENEWAL</div>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-8">
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
                  required
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="barangay" className="form-label fw-bold">
                  BARANGAY: <span className="text-danger">*</span>
                </label>
                <span className="ms-2 text-danger">{error?.barangay}</span>
                <select
                  name="barangay"
                  id="barangay"
                  className="form-select"
                  onChange={handleChange}
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

              <div className="col-md-4">
                <label htmlFor="fb_link" className="form-label fw-bold">
                  FB LINK: <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="personalized_facebook_link"
                  id="fb_link"
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="semester" className="form-label fw-bold">
                  SEMESTER: <span className="text-danger">*</span>
                </label>
                <span className="ms-2 text-danger">{error?.semester}</span>
                <select
                  name="semester"
                  id="semester"
                  className="form-select"
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

              <hr className="my-2 invisible" />

              <div className="col-md-4">
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

              <hr className="my-2 invisible" />

              <div className="col-md-4">
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
                  required
                >
                  <option selected defaultValue="" disabled>
                    Choose university...
                  </option>
                  {universityOptions.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.university_name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-md-4">
                <label htmlFor="course_taking" className="form-label fw-bold">
                  COURSE TAKING: <span className="text-danger">*</span>
                </label>
                <span className="ms-2 text-danger">{error?.course_taking}</span>
                <select
                  name="course_taking"
                  id="course_taking"
                  className="form-select"
                  onChange={handleChange}
                  required
                >
                  <option selected defaultValue="">
                    Choose course...
                  </option>
                  {courseTakingOptions.map((item, i) => (
                    <option key={i} value={item.id}>
                      {item.course_name}
                    </option>
                  ))}
                </select>
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
                  required
                >
                  <option selected defaultValue="">
                    Choose...
                  </option>
                  <option value="THREE YEARS">THREE (3) YEARS</option>
                  <option value="FOUR YEARS">FOUR (4) YEARS</option>
                  <option value="FIVE YEARS">FIVE (5) YEARS</option>
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
                  required
                >
                  <option selected defaultValue="">
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
                  required
                />
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
                    id="is_graduating_true"
                    value={1}
                    onChange={handleChange}
                    required
                  />
                  <label
                    className="form-check-label"
                    htmlFor="is_graduating_true"
                  >
                    Yes
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="is_graduating"
                    id="is_graduating_false"
                    value={0}
                    onChange={handleChange}
                    required
                  />
                  <label
                    className="form-check-label"
                    htmlFor="is_graduating_false"
                  >
                    No
                  </label>
                </div>
              </div>

              <hr className="my-2 invisible" />

              <div className="col-md-12">
                <label
                  htmlFor="guardian_voter_certificate"
                  className="form-label fw-bold"
                >
                  GUARDIAN VOTER CERTIFICATE:{" "}
                  <span className="text-danger">*</span>
                </label>
                <input
                  type="file"
                  name="guardians_voter_certificate"
                  id="guardian_voter_certificate"
                  className="form-control"
                  onChange={handleFile}
                  required
                />
              </div>

              <hr className="my-2 invisible" />

              <div className="col-md-8">
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
                  onChange={handleChange}
                  required
                />
              </div>

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
                    onChange={handleChange}
                    required
                  />
                </div>
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
                  onChange={handleChange}
                  required
                />
              </div>

              <hr className="my-2 invisible" />

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
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-4">
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
                  onChange={handleChange}
                  required
                />
              </div>

              <hr className="my-2 invisible" />

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
                  onChange={handleChange}
                  required
                />
              </div>

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
                  onChange={handleChange}
                  required
                />
              </div>

              <hr className="my-2 invisible" />

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

              <hr className="my-2 invisible" />
            </div>
          </div>
          <div className="card-footer d-flex justify-content-end">
            <SubmitButton onClick={handleOnSubmit}>Submit</SubmitButton>
          </div>
        </div>
      </form>
    </>
  );
};

export default RenewalForm;
