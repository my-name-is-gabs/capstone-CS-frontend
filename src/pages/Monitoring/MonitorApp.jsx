import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { grey } from "@mui/material/colors";
import "./monitorApp.css";

const MonitorApp = () => {
  const stepStyle = {
    "& .Mui-active": {
      "& .MuiSvgIcon-root": {
        color: grey[500],
      },
    },
    "& .Mui-completed": {
      "& .MuiSvgIcon-root": {
        color: "success.main",
      },
    },
  };

  return (
    <>
      <div className="container mt-5">
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={1} sx={stepStyle} alternativeLabel>
            <Step>
              <StepLabel>Application Submitted</StepLabel>
            </Step>
            <Step>
              <StepLabel>Application Retrieved</StepLabel>
            </Step>
            <Step>
              <StepLabel>Under Evaluation</StepLabel>
            </Step>
            <Step>
              <StepLabel>Evaluation Report</StepLabel>
            </Step>
          </Stepper>
        </Box>

        <div className="row gap-3 mt-4">
          {/* CONTAINER 1 */}
          <div className="col-md-3">
            <div className="p-4 border border-3 border-dark rounded cs-bg-secondary">
              <div className="d-flex justify-content-around align-items-center">
                <div className="d-flex flex-column justify-content-center py-0">
                  <h6 className="fw-bold">Your Application ID is:</h6>
                  <p className="text-center text-danger fw-bold">XXYZZ000</p>
                  <h6 className="fw-bold">Date:</h6>
                  <p className="text-center">MM/DD/YYYY</p>
                </div>
              </div>

              <div className="d-block">
                <h5 className="fw-bold">Applicant Name:</h5>
                <p>John Doe</p>
              </div>

              <div className="d-block">
                <h5 className="fw-bold">E-mail Address:</h5>
                <p>johndoe123@gmail.com</p>
              </div>
            </div>
          </div>

          {/* CONTAINER 2 */}
          <div className="col-md-8 p-5 cs-bg-secondary rounded shadow">
            <div className="monitor--data-container">
              <div className="dt--container">
                <strong>10/11/23 - 13:58 PM</strong>
              </div>
              <div className="monitor--text">
                Scholarship Application submitted.
              </div>
            </div>

            <div className="monitor--data-container">
              <div className="dt--container">
                <strong>10/11/23 - 13:58 PM</strong>
              </div>
              <div className="monitor--text">
                Scholarship Application retrieved by [Scholarship Officer’s
                Name].
              </div>
            </div>

            <div className="monitor--data-container">
              <div className="dt--container">
                <strong>10/11/23 - 13:58 PM</strong>
              </div>
              <div className="monitor--text">
                Scholarship Application is being reviewed and evaluated.
              </div>
            </div>

            <div className="monitor--data-container">
              <div className="dt--container">
                <strong>10/11/23 - 13:58 PM</strong>
              </div>
              <div className="monitor--text">Category A is being reviewed.</div>
            </div>

            <div className="monitor--data-container">
              <div className="dt--container">
                <strong>10/11/23 - 13:58 PM</strong>
              </div>
              <div className="monitor--text">
                Evaluation of your scholarship application is finished.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MonitorApp;
