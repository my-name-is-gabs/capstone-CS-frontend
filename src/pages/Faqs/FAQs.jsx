"use client";
import FacebookCustomChat from "./FacebookCustomChat";

const FAQs = () => {
  return (
    <>
      <div className="container d-flex flex-column justify-content-center align-items-center mt-5 w-75">
        <h1 className="lead fw-bold display-5 mb-5">
          Frequently Asked Questions
        </h1>
        <div
          className="accordion accordion-flush"
          style={{ width: "65%" }}
          id="accordionFlushExample"
        >
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                What are the basic qualification criteria for the scholarship
                program?
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <ol>
                  <li>
                    <strong>
                      Bona fide resident of Taguig City for at least three (3)
                      years
                    </strong>{" "}
                    immediately preceding the application. Must be a{" "}
                    <strong>
                      registered voter of the City if 18 years old or older
                    </strong>
                    , and with at least one of the parents{" "}
                    <strong>also a registered voter of the City</strong>.
                  </li>

                  <li>
                    <strong>Of good moral character</strong> both in paper and
                    in deeds.
                  </li>
                  <li>
                    Determined to{" "}
                    <strong>
                      finish the course or pass the bar/board examination
                    </strong>
                    .
                  </li>
                  <li>
                    Committed to <strong>love and serve Taguig City</strong>.
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                What are the scholarship types?
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                The scholarship types available in Taguig Scholarship are{" "}
                <strong>HONORS</strong>, <strong>PREMIER</strong>,{" "}
                <strong>PRIORITY</strong>,{" "}
                <strong>BASIC PLUS (PUBLIC TO PUBLIC)</strong>,{" "}
                <strong>BASIC (PUBLIC TO PRIVATE)</strong>,{" "}
                <strong>SUC/LCU (PRIVATE TO PUBLIC)</strong>,{" "}
                <strong>REVIEW</strong>, and <strong>LEAD</strong>.
                <br />
                <br />
                To learn more about the scholarship types you can visit the
                website of Taguig LGU.{" "}
                <a href="https://taguig.gov.ph/index.php/scholarship-program/lifeline-assistance-for-neighbors-in-need-lani-scholarship-program/">
                  Click me!
                </a>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                How do I maintain my scholarship?
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <ul>
                  <li>
                    To maintain the scholarship, scholars must fill out the
                    renewal form once they logged in to their account during the
                    application period and submit the required documents every
                    semester. Semestral weighted average (SWA) for the duration
                    of the scholarship covered{" "}
                    <strong>
                      should not be lower than 2.5, with no failing marks,
                      incomplete, blank or no grade subjects, or dropped
                      subjects, and must carry a load of at least 15 units per
                      semester or its equivalent per trimester.
                    </strong>
                  </li>
                  <br />
                  <li>
                    {" "}
                    For those with violations (self-monitoring is encouraged):
                    <br />
                    <br />
                    <strong>1st Offense</strong> – Probation / Warning
                    <br />
                    <br />
                    <strong>2nd Offense</strong> – Suspension from the
                    scholarship for the semester
                    <br />
                    <br />
                    <strong>3rd Offense</strong> – Termination from the
                    scholarship
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FacebookCustomChat />
    </>
  );
};

export default FAQs;
