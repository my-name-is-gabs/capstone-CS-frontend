import PersonalInformation from "./FirstForm/PersonalInformation";
import EducationalBackground from "./SecondForm/EducationalBackground";
import FamilyBackground from "./ThirdForm/FamilyBackground";
import OthersForm from "./FoutrhForm/OthersForm";
import helperMenuContents from "../extras/helperData";
import { useState, useReducer } from "react";
// import { NavButton } from "../components";
import { formReducer, INITIAL_STATE } from "../reducer/formReducer";

const BaseForm = () => {
  const [helperCount, setHelperCount] = useState(0);
  const [stepCount, setStepCount] = useState(1);
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);

  const PageDisplay = (step) => {
    switch (step) {
      case 1:
        return (
          <PersonalInformation
            setHelperCount={setHelperCount}
            setStepCount={setStepCount}
            dispatcher={dispatch}
            state={state}
          />
        );
      case 2:
        return (
          <EducationalBackground
            setHelperCount={setHelperCount}
            setStepCount={setStepCount}
            dispatcher={dispatch}
            state={state}
          />
        );
      case 3:
        return (
          <FamilyBackground
            setHelperCount={setHelperCount}
            setStepCount={setStepCount}
            dispatcher={dispatch}
            state={state}
          />
        );
      case 4:
        return (
          <OthersForm
            setHelperCount={setHelperCount}
            setStepCount={setStepCount}
            dispatcher={dispatch}
            state={state}
          />
        );
    }
  };

  return (
    <>
      <div className="container mt-5">
        {PageDisplay(stepCount)}
        {/* <div className="mt-5 d-flex justify-content-end align-items-center w-75 mx-auto mb-5">
          <div className="d-flex gap-3">
            {FormReturnButton()}
            {FormProceedButton()}
          </div>
        </div> */}
      </div>

      {/* Offcanvas */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
            {helperMenuContents[helperCount].title}
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          {helperMenuContents[helperCount].body}
        </div>
      </div>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        data-bs-backdrop="false"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5 fw-bold" id="exampleModalLabel">
                AGREEMENT
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
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
            <div className="modal-footer">
              {/* <button
                type="button"
                className="btn cs-btn-primary fw-bold fs-5 shadow-sm px-4"
              >
                I Understand
              </button> */}
              {/* <NavButton
                linkRef="/"
                btnBG="btn-warning"
                className="btn cs-btn-primary fw-bold fs-5 shadow-sm px-4"
                onClick={() => console.log(state)}
              >
                I Understand
              </NavButton> */}
              <button
                className="btn cs-btn-primary fw-bold fs-5 shadow-sm px-4"
                onClick={() => console.log(state)}
              >
                I Understand
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BaseForm;
