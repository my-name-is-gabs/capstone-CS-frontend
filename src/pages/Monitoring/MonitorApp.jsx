import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
// import StepContent from "@mui/material/StepContent";
import { grey } from "@mui/material/colors";
// import { dummyData } from "../../extras/dummyData";
import "./monitorApp.css";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constant";

const MonitorApp = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [scholarTrack, setScholarTrack] = useState([]);
  const [scholarInfo, setScholarInfo] = useState({});
  const { id } = useParams();

  const dateTimeOption = useMemo(() => {
    return {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    };
  }, []);

  useEffect(() => {
    const fetchingData = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/applications/tracking/${id}`);
        setScholarInfo(res.data);
        setScholarTrack(res.data.status_updates);
        setActiveStep(
          res.data.status_updates[res.data.status_updates.length - 1]
            .current_step
        );
      } catch (error) {
        console.error(error);
      }
    };
    fetchingData();
  }, [id]);

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
          <Stepper activeStep={activeStep} sx={stepStyle} alternativeLabel>
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
                  <p className="text-center text-danger fw-bold">{id}</p>
                  <h6 className="fw-bold">Date:</h6>
                  <p className="text-center">
                    {new Intl.DateTimeFormat("en-ph", dateTimeOption).format(
                      new Date()
                    )}
                  </p>
                </div>
              </div>

              <div className="d-block">
                <h5 className="fw-bold">Applicant Name:</h5>
                <p>{`${
                  String(scholarInfo.firstname).slice(0, 1) +
                  String(scholarInfo.firstname).slice(1).toLowerCase()
                } ${String(scholarInfo.middlename).slice(0, 1)}. ${
                  String(scholarInfo.lastname).slice(0, 1) +
                  String(scholarInfo.lastname).slice(1).toLowerCase()
                }`}</p>
              </div>

              <div className="d-block">
                <h5 className="fw-bold">E-mail Address:</h5>
                <p className="text-break">{scholarInfo.email_address}</p>
              </div>
            </div>
          </div>

          {/* CONTAINER 2 */}
          <div className="col-md-8 p-5 cs-bg-secondary rounded shadow">
            <div className="cs-monitor-container">
              {scholarTrack.map((value, index) => (
                <>
                  {value.isActive && <div className="cs-monitor-line"></div>}
                  <div key={index} className="cs-monitor-card">
                    <div className="cs-monitor-dt">
                      <span className={value.is_active && "fw-bold"}>
                        {new Intl.DateTimeFormat("en-ph", {
                          month: "short",
                          day: "2-digit",
                        }).format(new Date(value.date_accomplished))}
                      </span>{" "}
                      <br />{" "}
                      <small
                        className={`text-secondary ${
                          value.isActive && "fw-bold"
                        }`}
                      >
                        {new Intl.DateTimeFormat("en-ph", {
                          hour: "2-digit",
                          minute: "2-digit",
                        }).format(new Date(value.date_accomplished))}
                      </small>
                    </div>
                    <img
                      src={`/assets/${
                        value.is_active ? "bead-blue.png" : "bead-grey.png"
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
