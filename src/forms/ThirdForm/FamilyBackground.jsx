/* eslint-disable react/no-unescaped-entities */
import { PropTypes } from "prop-types";

const FamilyBackground = ({ setHelperCount }) => {
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
      <div id="familyBackground">
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
                <label htmlFor="firstname" className="form-label fw-bold">
                  FIRST NAME:
                </label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  className="form-control"
                  required
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
                  required
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
                  required
                />
              </div>
              <hr className="my-2 invisible" />
              <div className="col-md-8">
                <label htmlFor="lastname" className="form-label fw-bold">
                  COMPLETE ADDRESS:
                </label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  className="form-control"
                  required
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="lastname" className="form-label fw-bold">
                  CONTACT NUMBER:
                </label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  className="form-control"
                  required
                />
              </div>
              <hr className="my-2 invisible" />
              <div className="col-md-4">
                <label htmlFor="lastname" className="form-label fw-bold">
                  OCCUPATION:
                </label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  className="form-control"
                  required
                />
              </div>
              <div className="col-md-8">
                <label htmlFor="lastname" className="form-label fw-bold">
                  PLACE OF WORK:
                </label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  className="form-control"
                  required
                />
              </div>
              <hr className="my-2 invisible" />
              <div className="col-md-12">
                <label htmlFor="lastname" className="form-label fw-bold">
                  EDUCATIONAL ATTAINMENT:
                </label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  className="form-control"
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
                <label htmlFor="firstname" className="form-label fw-bold">
                  FIRST NAME:
                </label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  className="form-control"
                  required
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
                  required
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
                  required
                />
              </div>
              <hr className="my-2 invisible" />
              <div className="col-md-8">
                <label htmlFor="lastname" className="form-label fw-bold">
                  COMPLETE ADDRESS:
                </label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  className="form-control"
                  required
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="lastname" className="form-label fw-bold">
                  CONTACT NUMBER:
                </label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  className="form-control"
                  required
                />
              </div>
              <hr className="my-2 invisible" />
              <div className="col-md-4">
                <label htmlFor="lastname" className="form-label fw-bold">
                  OCCUPATION:
                </label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  className="form-control"
                  required
                />
              </div>
              <div className="col-md-8">
                <label htmlFor="lastname" className="form-label fw-bold">
                  PLACE OF WORK:
                </label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  className="form-control"
                  required
                />
              </div>
              <hr className="my-2 invisible" />
              <div className="col-md-12">
                <label htmlFor="lastname" className="form-label fw-bold">
                  EDUCATIONAL ATTAINMENT:
                </label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  className="form-control"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- END OF SECOND ROW --> */}
      </div>
      {/* <!-- End of Forms Under Family Background --> */}
    </>
  );
};

FamilyBackground.propTypes = {
  setHelperCount: PropTypes.func,
};

export default FamilyBackground;
