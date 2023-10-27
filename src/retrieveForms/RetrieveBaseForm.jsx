import PersonalInformation from "./FirstForm/PersonalInformation";
import EducationalBackground from "./SecondForm/EducationalBackground";
import FamilyBackground from "./ThirdForm/FamilyBackground";
import OthersForm from "./FoutrhForm/OthersForm";
import helperMenuContents from "../extras/helperData";
import { useState, useReducer, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { formReducer, INITIAL_STATE } from "../reducer/formReducer";
import CryptoJS from "crypto-js";

const RetrieveBaseForm = () => {
  const [helperCount, setHelperCount] = useState(0);
  const [stepCount, setStepCount] = useState(1);
  const [scholarId, setScholarId] = useState("");
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);
  const [retrievedFormData, setRetrieveFormData] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      const encryptFormData = CryptoJS.AES.encrypt(
        JSON.stringify(state),
        import.meta.env.VITE_SECRET_KEY
      );
      localStorage.setItem("encryptedFormData", encryptFormData);
      e.returnValue = "";
    };

    if (location.pathname === "/forms") {
      window.addEventListener("beforeunload", handleBeforeUnload, {
        capture: true,
      });
    }

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [state, location]);

  useEffect(() => {
    const getScholarId = localStorage.getItem("formSecurityAccessData")
      ? localStorage.getItem("formSecurityAccessData")
      : "";
    if (!getScholarId) return;
    const decryptScholarId = CryptoJS.AES.decrypt(
      getScholarId,
      import.meta.env.VITE_SECRET_KEY
    );

    const decryptedData = JSON.parse(
      decryptScholarId.toString(CryptoJS.enc.Utf8)
    );

    setScholarId(decryptedData.application_id);

    ///
  }, []);

  useEffect(() => {
    const getEncryptData = localStorage.getItem("encryptedFormData");
    const decryptFormData = CryptoJS.AES.decrypt(
      getEncryptData,
      import.meta.env.VITE_SECRET_KEY
    );
    setRetrieveFormData(
      JSON.parse(decryptFormData.toString(CryptoJS.enc.Utf8))
    );
  }, [retrievedFormData]);

  const saveProgress = () => {
    const encryptFormData = CryptoJS.AES.encrypt(
      JSON.stringify(state),
      import.meta.env.VITE_SECRET_KEY
    );
    localStorage.setItem("encryptedFormData", encryptFormData);
    alert("Progress Saved!");
  };

  const PageDisplay = (step) => {
    switch (step) {
      case 1:
        return (
          <PersonalInformation
            setHelperCount={setHelperCount}
            setStepCount={setStepCount}
            dispatcher={dispatch}
            retrievedData={retrievedFormData}
            saveProgress={saveProgress}
          />
        );
      case 2:
        return (
          <EducationalBackground
            setHelperCount={setHelperCount}
            setStepCount={setStepCount}
            dispatcher={dispatch}
            retrievedData={retrievedFormData}
            saveProgress={saveProgress}
          />
        );
      case 3:
        return (
          <FamilyBackground
            setHelperCount={setHelperCount}
            setStepCount={setStepCount}
            dispatcher={dispatch}
            retrievedData={retrievedFormData}
            saveProgress={saveProgress}
          />
        );
      case 4:
        return (
          <OthersForm
            setHelperCount={setHelperCount}
            setStepCount={setStepCount}
            dispatcher={dispatch}
            retrievedData={retrievedFormData}
            saveProgress={saveProgress}
          />
        );
    }
  };

  return (
    <>
      <div className="container mt-5 position-relative">
        <div className="p-2 border border-3 border-dark rounded d-flex justify-content-around align-items-center bg-light mb-4 w-25 mx-auto">
          {/* <input
            ref={applicantIdRef}
            type="hidden"
            name="application_id"
            value={generatedId}
          /> */}
          <div className="d-flex flex-column justify-content-center py-2">
            <h6 className="fw-bold">Your Application ID is:</h6>
            <p className="text-center text-danger fw-bold">{scholarId}</p>
          </div>
        </div>
        {PageDisplay(stepCount)}
        {/* <div className="mt-5 d-flex justify-content-end align-items-center w-75 mx-auto mb-5">
          <div className="d-flex gap-3">
            {FormReturnButton()}
            {FormProceedButton()}
          </div>
        </div> */}
        {/* <div className="mt-5 d-flex justify-content-start align-items-center w-75 mx-auto mb-5">
          <button className="btn btn-success rounded-pill cs-btn-border fw-bold fs-5 shadow-sm px-5 mb-5">
            Save
          </button>
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
                // onClick={() => {
                //   console.log(formProgressData);
                // }}
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

export default RetrieveBaseForm;
