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
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
              <li>Vestibulum sit amet blandit odio</li>
              <li>
                Proin est orci, scelerisque in congue in, ultrices eu nibh.
                Quisque quis sagittis turpis.
              </li>
              <li>
                Mauris eleifend, magna id faucibus efficitur, felis eros
                consectetur felis, non maximus nunc nibh ac augue
              </li>
              <li>
                Integer ut libero aliquam, dignissim lorem et, luctus mi.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae; Etiam ut leo sed justo pharetra
                scelerisque
              </li>
              <li>Pellentesque ut nulla arcu</li>
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
