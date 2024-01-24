import { Footer } from "../../components";
import { useNavigate } from "react-router-dom";

const Guidelines = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container-fluid mx-auto" style={{ width: "90%" }}>
        <h1 className="mt-4 fw-bold display-5">Scholarship Requirements</h1>
        <div className="row mt-5">
          <div className="col-md-4">
            <img
              className="img-fluid"
              src="https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              width={500}
              alt="Guideline Image"
            />
          </div>
          <div className="col-md-7 d-flex flex-column p-4">
            <h4 className="fw-semibold">GUIDELINES:</h4>
            <ol className="fs-6 lh-lg">
              <li>
                The applicant (new) will be submitting the form containing his
                or her personal information, in which it is REQUIRED that he/she
                submits legitimate documents needed. Otherwise, the application
                form will be deemed as fraud, resulting in an automatic
                rejection of his or her scholarship application.
              </li>
              <li>
                As the scholarship in local municipalities encounter traffic due
                to the massive amount of applications per semester and academic
                year, it is for this reason why the system automatically
                performs eligibility checking. It carefully checks and analyzes
                the necessary files that was submitted by the applicant during
                his or her application.
              </li>
              <li>
                The results of the automated eligibility checking can be found
                on the {"applicant's"}provided e-mail address, as well as under
                the
                {"system's"} own monitoring page. To monitor your application,
                please input the given application reference ID
                (20XX-00000-ST-X) that was given to your e-mail address upon
                submitting the said application.
              </li>
              <li>
                Please bear with us and wait for a given amount of days as our
                scholarship staffs and officers are doing their utmost best at
                manually evaluating your scholarship application. Rest assured
                that you shall get a notification from us soon.
              </li>
              <li>
                Lastly, if the applicants ever have any concerns and/or
                inquiries in regards to the application or scholarship program,
                please do not hesitate on reaching out on our Facebook page.
                Applicants are able to do so by clicking the chat widget found
                on the bottom left of your screen.
              </li>
            </ol>
            <button
              type="button"
              className="align-self-center mt-4 btn btn-warning rounded-pill px-4 fw-bold fs-5 border border-2 border-dark"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Be a Scholar!
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div className="modal fade" id="exampleModal" tabIndex="-1">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fs-4 fw-bold">
                TERMS & CONDITIONS OF USE
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body p-4">
              <p>
                Welcome to Centro Secretariat Scholarship System! These terms
                and conditions govern your access to and use of our system,
                which has been developed by students of Polytechnic University
                of the Philippines. Please read these Terms carefully before
                using the System.
              </p>
              <ol>
                <li>
                  <h6 className="fw-bold">Acceptance of Terms</h6>
                  <p>
                    By accessing or using the System, you agree to be bound by
                    these Terms. If you do not agree to these Terms, please do
                    not use the System.
                  </p>
                </li>
                <li>
                  <h6 className="fw-bold">Use of the System</h6>
                  <p>
                    You may not (i) copy, modify, or distribute the System; (ii)
                    reverse engineer or attempt to extract the source code of
                    the System; (iii) use the System for any unlawful purpose or
                    in violation of these Terms; (iv) interfere with the proper
                    operation of the System; or (v) bypass any measures used to
                    prevent or restrict access to the System.
                  </p>
                </li>
                <li>
                  <h6 className="fw-bold">Submitting Information</h6>
                  <p>
                    Since the system is not yet officially used for business
                    purposes, you may use dummy information to test our system.
                    You are not required and is discourage to insert your
                    personal detail.
                  </p>
                </li>
                <li>
                  <h6 className="fw-bold">Privacy</h6>
                  <p>
                    The information collected is only disclosed to the
                    scholarship officers that facilitate the scholarship program
                    of Taguig. For further inquiries you may visit Taguig{" "}
                    {"City's"} website for more info.
                  </p>
                </li>
                <li>
                  <h6 className="fw-bold">Limitation of Liability</h6>
                  <p>
                    To the fullest extent permitted by applicable law, Centro
                    Secretariat Scholarship System shall not be liable for any
                    indirect, incidental, special, consequential, or punitive
                    damages, or any loss of profits or revenues, whether
                    incurred directly or indirectly, or any loss of data, use,
                    goodwill, or other intangible losses.
                  </p>
                </li>
              </ol>
              <p>Thank you for using Centro Secretariat Scholarship System.</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="align-self-center mt-4 btn btn-warning rounded-pill px-4 fw-bold fs-5 border border-1 border-dark"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                className="align-self-center mt-4 btn btn-primary rounded-pill px-4 fw-bold fs-5 border border-1 border-dark"
                onClick={() => navigate("/startscholar")}
                data-bs-dismiss="modal"
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Guidelines;
