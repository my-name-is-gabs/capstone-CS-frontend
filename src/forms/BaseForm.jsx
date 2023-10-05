import PersonalInformation from "./FirstForm/PersonalInformation";
import EducationalBackground from "./SecondForm/EducationalBackground";
import FamilyBackground from "./ThirdForm/FamilyBackground";
import OthersForm from "./FoutrhForm/OthersForm";
// import { MAX_FORM_COUNT } from "../constant";
import helperMenuContents from "../extras/helperData";
import { useState } from "react";

const BaseForm = () => {
  const [helperCount, setHelperCount] = useState(0);

  return (
    <>
      <form className="container mt-5">
        <PersonalInformation setHelperCount={setHelperCount} />
        <EducationalBackground setHelperCount={setHelperCount} />
        <FamilyBackground setHelperCount={setHelperCount} />
        <OthersForm setHelperCount={setHelperCount} />
      </form>

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
