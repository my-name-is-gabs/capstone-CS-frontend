import PersonalInformation from "./1st Form/PersonalInformation";
import EducationalBackground from "./2nd Form/EducationalBackground";
import FamilyBackground from "./3rd Form/FamilyBackground";
import OthersForm from "./4th Form/OthersForm";
// import helperMenuContents from "../extras/helperData";
import { useState, useReducer, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { formReducer, INITIAL_STATE } from "../reducer/formReducer";
import CryptoJS from "crypto-js";
import ReviewForm from "./5th Form/ReviewForm";

const BaseForm = () => {
  // const [helperCount, setHelperCount] = useState(0);
  const [stepCount, setStepCount] = useState(1);
  // const [scholarId, setScholarId] = useState("");
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);
  const location = useLocation();
  const navigate = useNavigate();

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

    if (window.location.pathname === "/forms") {
      window.addEventListener("unload", handleBeforeUnload, {
        capture: true,
      });
    }

    return () => {
      window.removeEventListener("unload", handleBeforeUnload);
    };
  }, [state, location]);

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

  const saveProgress = () => {
    const encryptFormData = CryptoJS.AES.encrypt(
      JSON.stringify(state),
      import.meta.env.VITE_SECRET_KEY
    );
    localStorage.setItem("encryptedFormData", encryptFormData);
    alert("Progress Saved!");
  };

  const cancelProgress = () => {
    const encryptFormData = CryptoJS.AES.encrypt(
      JSON.stringify(state),
      import.meta.env.VITE_SECRET_KEY
    );
    localStorage.setItem("encryptedFormData", encryptFormData);
    alert("You can get back to it later! Just go to the Retrieve Application.");
    navigate("/startapp");
  };

  const PageDisplay = (step) => {
    switch (step) {
      case 1:
        return (
          <PersonalInformation
            // setHelperCount={setHelperCount}
            setStepCount={setStepCount}
            dispatcher={dispatch}
            state={state}
            saveProgress={saveProgress}
            cancelProgress={cancelProgress}
          />
        );
      case 2:
        return (
          <EducationalBackground
            // setHelperCount={setHelperCount}
            setStepCount={setStepCount}
            dispatcher={dispatch}
            state={state}
            saveProgress={saveProgress}
          />
        );
      case 3:
        return (
          <FamilyBackground
            // setHelperCount={setHelperCount}
            setStepCount={setStepCount}
            dispatcher={dispatch}
            state={state}
            saveProgress={saveProgress}
          />
        );
      case 4:
        return (
          <OthersForm
            // setHelperCount={setHelperCount}
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
        {PageDisplay(stepCount)}
      </div>

      {/* Offcanvas Helper */}
      {/* <div
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
      </div> */}
    </>
  );
};

export default BaseForm;
