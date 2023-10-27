/* eslint-disable react/no-unescaped-entities */
import { PropTypes } from "prop-types";
// import { useReducer } from "react";
// import { formReducer, INITIAL_retrievedData? } from "../../reducer/formReducer";

const FamilyBackground = ({
  setHelperCount,
  setStepCount,
  dispatcher,
  saveProgress,
  retrievedData,
}) => {
  // const [retrievedData?, dispatch] = useReducer(formReducer, INITIAL_retrievedData?);

  const handleChange = (e) => {
    dispatcher({
      type: "EDUC_DATA",
      payload: { name: e.target.name, value: e.target.value },
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
        method="post"
        onSubmit={() => {
          setStepCount((step) => step + 1);
        }}
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
                  FATHER'S INFORMATION
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
              <div className="col-md-4">
                <label
                  htmlFor="father_firstName"
                  className="form-label fw-bold"
                >
                  FIRST NAME:
                </label>
                <input
                  type="text"
                  name="father_firstName"
                  id="father_firstName"
                  className="form-control"
                  value={retrievedData?.father_firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-4">
                <label
                  htmlFor="father_middleName"
                  className="form-label fw-bold"
                >
                  MIDDLE NAME:
                </label>
                <input
                  type="text"
                  name="father_middleName"
                  id="father_middleName"
                  className="form-control"
                  value={retrievedData?.father_middleName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="father_lastName" className="form-label fw-bold">
                  LAST NAME:
                </label>
                <input
                  type="text"
                  name="father_lastName"
                  id="father_lastName"
                  className="form-control"
                  value={retrievedData?.father_lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <hr className="my-2 invisible" />
              <div className="col-md-8">
                <label htmlFor="father_address" className="form-label fw-bold">
                  COMPLETE ADDRESS:
                </label>
                <input
                  type="text"
                  name="father_address"
                  id="father_address"
                  className="form-control"
                  value={retrievedData?.father_address}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="father_contact" className="form-label fw-bold">
                  CONTACT NUMBER:
                </label>
                <input
                  type="text"
                  name="father_contact"
                  id="father_contact"
                  className="form-control"
                  value={retrievedData?.father_contact}
                  onChange={handleChange}
                  required
                />
              </div>
              <hr className="my-2 invisible" />
              <div className="col-md-4">
                <label
                  htmlFor="father_occupation"
                  className="form-label fw-bold"
                >
                  OCCUPATION:
                </label>
                <input
                  type="text"
                  name="father_occupation"
                  id="father_occupation"
                  className="form-control"
                  value={retrievedData?.father_occupation}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-8">
                <label
                  htmlFor="father_placeOfWork"
                  className="form-label fw-bold"
                >
                  PLACE OF WORK:
                </label>
                <input
                  type="text"
                  name="father_placeOfWork"
                  id="father_placeOfWork"
                  className="form-control"
                  value={retrievedData?.father_placeOfWork}
                  onChange={handleChange}
                  required
                />
              </div>
              <hr className="my-2 invisible" />
              <div className="col-md-12">
                <label
                  htmlFor="father_educAttainment"
                  className="form-label fw-bold"
                >
                  EDUCATIONAL ATTAINMENT:
                </label>
                <input
                  type="text"
                  name="father_educAttainment"
                  id="father_educAttainment"
                  className="form-control"
                  value={retrievedData?.father_educAttainment}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- END OF FIRST ROW --> */}

        {/* <!-- SECOND ROW --> */}
        <div className="card cs-bg-secondary-rounded shadow w-75 mx-auto mb-5">
          <div className="card-header cs-bg-fadeblue">
            <div className="container d-flex justify-content-between align-items-center">
              <div className="d-inline-flex gap-3 align-items-center">
                <img
                  src="/assets/icons/mother.png"
                  className="img-fluid"
                  alt="Grant Icon"
                  width={32}
                  height={32}
                />
                <div className="fs-5 text-white fw-semibold">
                  MOTHER'S INFORMATION
                </div>
              </div>
              <button
                className="cs-btn-nolayout"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
                onClick={() => setHelperCount(5)}
              >
                <i className="fs-2 fa-regular fa-circle-question"></i>
              </button>
            </div>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-4">
                <label
                  htmlFor="mother_firstName"
                  className="form-label fw-bold"
                >
                  FIRST NAME:
                </label>
                <input
                  type="text"
                  name="mother_firstName"
                  id="mother_firstName"
                  className="form-control"
                  value={retrievedData?.mother_firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-4">
                <label
                  htmlFor="mother_middleName"
                  className="form-label fw-bold"
                >
                  MIDDLE NAME:
                </label>
                <input
                  type="text"
                  name="mother_middleName"
                  id="mother_middleName"
                  className="form-control"
                  value={retrievedData?.mother_middleName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="mother_lastName" className="form-label fw-bold">
                  LAST NAME:
                </label>
                <input
                  type="text"
                  name="mother_lastName"
                  id="mother_lastName"
                  className="form-control"
                  value={retrievedData?.mother_lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <hr className="my-2 invisible" />
              <div className="col-md-8">
                <label htmlFor="mother_address" className="form-label fw-bold">
                  COMPLETE ADDRESS:
                </label>
                <input
                  type="text"
                  name="mother_address"
                  id="mother_address"
                  className="form-control"
                  value={retrievedData?.mother_address}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="mother_contact" className="form-label fw-bold">
                  CONTACT NUMBER:
                </label>
                <input
                  type="text"
                  name="mother_contact"
                  id="mother_contact"
                  className="form-control"
                  value={retrievedData?.mother_contact}
                  onChange={handleChange}
                  required
                />
              </div>
              <hr className="my-2 invisible" />
              <div className="col-md-4">
                <label
                  htmlFor="mother_occupation"
                  className="form-label fw-bold"
                >
                  OCCUPATION:
                </label>
                <input
                  type="text"
                  name="mother_occupation"
                  id="mother_occupation"
                  className="form-control"
                  value={retrievedData?.mother_occupation}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-8">
                <label
                  htmlFor="mother_placeOfWork"
                  className="form-label fw-bold"
                >
                  PLACE OF WORK:
                </label>
                <input
                  type="text"
                  name="mother_placeOfWork"
                  id="mother_placeOfWork"
                  className="form-control"
                  value={retrievedData?.mother_placeOfWork}
                  onChange={handleChange}
                  required
                />
              </div>
              <hr className="my-2 invisible" />
              <div className="col-md-12">
                <label
                  htmlFor="mother_educAttainment"
                  className="form-label fw-bold"
                >
                  EDUCATIONAL ATTAINMENT:
                </label>
                <input
                  type="text"
                  name="mother_educAttainment"
                  id="mother_educAttainment"
                  className="form-control"
                  value={retrievedData?.mother_educAttainment}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- END OF SECOND ROW --> */}

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
            <button className="btn cs-btn-primary fw-bold fs-5 shadow-sm px-5">
              Next
            </button>
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
