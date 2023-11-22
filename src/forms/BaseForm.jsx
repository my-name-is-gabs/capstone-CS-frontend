import PersonalInformation from "./1st Form/PersonalInformation";
import EducationalBackground from "./2nd Form/EducationalBackground";
import FamilyBackground from "./3rd Form/FamilyBackground";
import OthersForm from "./4th Form/OthersForm";
import helperMenuContents from "../extras/helperData";
import { useState, useReducer, useEffect } from "react";
// import { useLocation } from "react-router-dom";
import { formReducer, INITIAL_STATE } from "../reducer/formReducer";
import CryptoJS from "crypto-js";
import ReviewForm from "./5th Form/ReviewForm";

const BaseForm = () => {
  const [helperCount, setHelperCount] = useState(0);
  const [stepCount, setStepCount] = useState(1);
  const [scholarId, setScholarId] = useState("");
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);
  // const location = useLocation();

  // useEffect(() => {
  //   const handleBeforeUnload = (e) => {
  //     e.preventDefault();
  //     const encryptFormData = CryptoJS.AES.encrypt(
  //       JSON.stringify(state),
  //       import.meta.env.VITE_SECRET_KEY
  //     );
  //     localStorage.setItem("encryptedFormData", encryptFormData);
  //     e.returnValue = "";
  //   };

  //   if (window.location.pathname === "/forms") {
  //     window.addEventListener("beforeunload", handleBeforeUnload, {
  //       capture: true,
  //     });
  //   }

  //   return () => {
  //     window.removeEventListener("beforeunload", handleBeforeUnload);
  //   };
  // }, [state, location]);

  useEffect(() => {
    const handleOffline = (e) => {
      e.preventDefault();
      const encryptFormData = CryptoJS.AES.encrypt(
        JSON.stringify(state),
        import.meta.env.VITE_SECRET_KEY
      );
      localStorage.setItem("encryptedFormData", encryptFormData);
      e.returnValue = "";
    };
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("offline", handleOffline);
    };
  }, [state]);

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
    dispatch({
      type: "FORM_DATA",
      payload: { name: "application_reference_id", value: scholarId },
    });
  }, [scholarId]);

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
            state={state}
            saveProgress={saveProgress}
          />
        );
      case 2:
        return (
          <EducationalBackground
            setHelperCount={setHelperCount}
            setStepCount={setStepCount}
            dispatcher={dispatch}
            state={state}
            saveProgress={saveProgress}
          />
        );
      case 3:
        return (
          <FamilyBackground
            setHelperCount={setHelperCount}
            setStepCount={setStepCount}
            dispatcher={dispatch}
            state={state}
            saveProgress={saveProgress}
          />
        );
      case 4:
        return (
          <OthersForm
            setHelperCount={setHelperCount}
            setStepCount={setStepCount}
            dispatcher={dispatch}
            state={state}
            saveProgress={saveProgress}
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

export default BaseForm;
