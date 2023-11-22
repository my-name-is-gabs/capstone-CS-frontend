import PersonalInformation from "./1st Form/PersonalInformation";
import EducationalBackground from "./2nd Form/EducationalBackground";
import FamilyBackground from "./3rd Form/FamilyBackground";
import OthersForm from "./4th Form/OthersForm";
import helperMenuContents from "../extras/helperData";
import { useState, useReducer, useEffect, useLayoutEffect } from "react";
import ReviewForm from "./5th Form/ReviewForm";
import { formReducer, INITIAL_STATE } from "../reducer/formReducer";
import CryptoJS from "crypto-js";

const RetrieveBaseForm = () => {
  const [helperCount, setHelperCount] = useState(0);
  const [stepCount, setStepCount] = useState(1);
  const [scholarId, setScholarId] = useState("");
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);
  const [retrievedFormData, setRetrieveFormData] = useState({});

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

  useLayoutEffect(() => {
    const getEncryptData = localStorage.getItem("encryptedFormData");
    const decryptFormData = CryptoJS.AES.decrypt(
      getEncryptData,
      import.meta.env.VITE_SECRET_KEY
    );
    setRetrieveFormData(
      JSON.parse(decryptFormData.toString(CryptoJS.enc.Utf8))
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    Object.entries(retrievedFormData).forEach((entry) => {
      const [key, value] = entry;
      dispatch({
        type: "FORM_DATA",
        payload: { name: key, value: value },
      });
    });
  }, [dispatch, retrievedFormData]);

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

      case 5:
        return <ReviewForm setStepCount={setStepCount} state={state} />;

      default:
        return;
    }
  };

  return (
    <>
      <div className="container mt-5 position-relative">
        <div className="p-2 border border-3 border-dark rounded d-flex justify-content-around align-items-center bg-light mb-4 w-25 mx-auto">
          <div className="d-flex flex-column justify-content-center py-2">
            <h6 className="fw-bold">Your Application ID is:</h6>
            <p className="text-center text-danger fw-bold">{scholarId}</p>
          </div>
        </div>
        {PageDisplay(stepCount)}
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
    </>
  );
};

export default RetrieveBaseForm;
