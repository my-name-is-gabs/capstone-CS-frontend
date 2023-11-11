import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
// import StepContent from "@mui/material/StepContent";
import { grey } from "@mui/material/colors";
import { dummyData } from "../../extras/dummyData";
import "./monitorApp.css";

const MonitorApp = () => {
  const stepStyle = {
    "& .Mui-active": {
      "& .MuiSvgIcon-root": {
        color: grey[800],
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
          <Stepper activeStep={3} sx={stepStyle} alternativeLabel>
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
                <p className="text-break">johndoe123@gmail.com</p>
              </div>
            </div>
          </div>

          {/* CONTAINER 2 */}
          <div className="col-md-8 p-5 cs-bg-secondary rounded shadow">
            <div className="cs-monitor-container">
              {dummyData.map((value, index) => (
                <>
                  {value.isActive && <div className="cs-monitor-line"></div>}
                  <div key={index} className="cs-monitor-card">
                    <div className="cs-monitor-dt">
                      <span className={value.isActive && "fw-bold"}>
                        {value.date}
                      </span>{" "}
                      <br />{" "}
                      <small
                        className={`text-secondary ${
                          value.isActive && "fw-bold"
                        }`}
                      >
                        {value.time}
                      </small>
                    </div>
                    <img
                      src={`/assets/${
                        value.isActive ? "bead-blue.png" : "bead-grey.png"
                      }`}
                      className="mx-3"
                      width={16}
                      alt="bead-grey"
                    />
                    <div className="cs-monitor-desc text-break">
                      {value.description}
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MonitorApp;
