import PersonalInformation from "./1st Form/PersonalInformation";
import EducationalBackground from "./2nd Form/EducationalBackground";
import FamilyBackground from "./3rd Form/FamilyBackground";
import OthersForm from "./4th Form/OthersForm";
import { useState, useReducer, useEffect, useLayoutEffect } from "react";
import ReviewForm from "./5th Form/ReviewForm";
import { formReducer, INITIAL_STATE } from "../reducer/formReducer";
import CryptoJS from "crypto-js";
import { useLocation, useNavigate } from "react-router-dom";

const RetrieveBaseForm = () => {
  const [stepCount, setStepCount] = useState(1);
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);
  const [retrievedFormData, setRetrieveFormData] = useState({});
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
            setStepCount={setStepCount}
            dispatcher={dispatch}
            state={state}
            cancelProgress={cancelProgress}
          />
        );
      case 2:
        return (
          <EducationalBackground
            setStepCount={setStepCount}
            dispatcher={dispatch}
            state={state}
          />
        );
      case 3:
        return (
          <FamilyBackground
            setStepCount={setStepCount}
            dispatcher={dispatch}
            state={state}
          />
        );
      case 4:
        return (
          <OthersForm
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
        {PageDisplay(stepCount)}
      </div>
    </>
  );
};

export default RetrieveBaseForm;
