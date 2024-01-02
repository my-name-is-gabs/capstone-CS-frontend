import { Footer } from "../../components";

const Guidelines = () => {
  return (
    <>
      <div className="container-fluid mx-auto" style={{ width: "90%" }}>
        <h1 className="mt-4 fw-bold display-5">
          Type 1 Scholarship Requirements
        </h1>
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
                on the applicant's provided e-mail address, as well as under the
                system's own monitoring page. To monitor your application,
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
              View Policies
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div className="modal fade" id="exampleModal" tabIndex="-1">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fs-4 fw-bold">TERMS & CONDITIONS</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body p-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                scelerisque at lectus sed mollis. Donec velit nibh, condimentum
                in pharetra in, mattis eget sapien. Vestibulum ante ipsum primis
                in faucibus orci luctus et ultrices posuere cubilia curae;
                Aenean accumsan elit metus, a sollicitudin velit finibus eu. Sed
                ultrices sollicitudin velit. Ut non nibh sed magna porttitor
                mattis. Mauris eu turpis vulputate, tristique dolor
                sollicitudin, consectetur ex. Aenean nibh tortor, tempor ac
                magna sed, ultrices gravida dolor. Proin commodo dapibus nibh.
              </p>
              <p>
                Sed consequat aliquam condimentum. Duis ipsum nisi, dignissim id
                porttitor eget, porttitor id lacus. Duis porta tincidunt
                laoreet. Nam scelerisque ut orci id dictum. Vestibulum rhoncus
                arcu quis nibh tristique fermentum. Nullam sollicitudin orci non
                libero pulvinar cursus. In luctus odio id fermentum posuere.
              </p>
              <p>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae; Aenean accumsan elit metus, a
                sollicitudin velit finibus eu. Ut non nibh sed magna porttitor
                mattis. Mauris eu turpis vulputate, tristique dolor
                sollicitudin, consectetur ex. Aenean nibh tortor, tempor ac
                magna sed, ultrices gravida dolor. Proin commodo dapibus nibh.
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="align-self-center mt-4 btn btn-warning rounded-pill px-4 fw-bold fs-5 border border-2 border-dark"
                data-bs-dismiss="modal"
              >
                Close
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
