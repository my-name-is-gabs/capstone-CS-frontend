import "./appstyle.css";

const StartApp = () => {
  return (
    <>
      <div className="row">
        <aside className="col-md-5 bg-light p-4">
          <h4 className="text-center fw-bold">
            ETHICAL CONSIDERATIONS & IMPORTANT REMINDERS
          </h4>
          <div className="cs-bg-primary p-4 rounded-3 text-white mt-4">
            <h5 className="fw-bold">PLEASE READ!</h5>
            <hr />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
              adipisci, numquam assumenda incidunt architecto aperiam. Dolorum
              veniam minus voluptate sint! Eaque, odit illum aspernatur quasi
              quos iusto quisquam deserunt esse ab ipsam minus praesentium illo
              laudantium reprehenderit adipisci sapiente mollitia, doloremque
              obcaecati porro totam! Culpa, vitae ut? Dolorum at laboriosam
              repellat doloribus expedita vero? Ducimus perferendis, saepe
              accusamus distinctio perspiciatis, laudantium deserunt deleniti
              doloremque temporibus velit voluptatibus reprehenderit tenetur
              possimus necessitatibus! Incidunt laudantium placeat commodi quasi
              alias aliquam nulla accusantium? Sed tenetur odio reprehenderit
              adipisci odit, possimus distinctio dolore ab. Voluptas nobis neque
              earum blanditiis perferendis, reiciendis dolore qui aperiam. Lorem
              ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
            <p>
              Furthermore, the{" "}
              <span className="fw-bold">Centro Secretariat</span> assures that
              will <span className="fw-bold">NOT:</span>
            </p>
            <ul>
              <li>
                obtain personal identifying informatino about you through your
                use of this sysstem, unless you choose to provide such
                information.
              </li>
              <li>
                share any information it receives with any outside parties,
                except when and where applicable by the Privacy Act.
              </li>
            </ul>
          </div>

          <div className="p-4 mt-3">
            <h6 className="fw-bold">For more information, contact:</h6>
            <ol style={{ listStyle: "none" }}>
              <li>Legal Office Department</li>
              <li>Room 20X</li>
              <li>Taguig City</li>
              <li>[Landline/Cellphone number]</li>
            </ol>
            <hr />
            <div className="container d-flex justify-content-end">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  required
                />
                <label
                  className="form-check-label fw-bold"
                  htmlFor="flexCheckChecked"
                >
                  I Agree
                </label>
              </div>
            </div>
          </div>
        </aside>

        <main className="col-md-7 p-4">
          <h1 className="fw-bold">Application Information</h1>
          <div className="mx-auto p-4 mt-4">
            <div className="cs-bg-light cs-radius p-4">
              <h5 className="fw-bold">Please record your Application ID</h5>
              <p>
                If there are technical issues with the system, or you want to
                complete your application some other time, you can save your
                work and later, satrt where you left off. In order to access
                your application later, however, you will need: (1) your
                Application ID, and (2) the answer to the security question that
                you will choose on this page.
              </p>
              <p>
                To choose a security question, pick the one you like the best
                from the drop down list, type your answer to that question in
                the box below, and click Continue. Remember: In order to access
                your application later, you will need to know the answer exactly
                as you wrote it on this page (case-sensitive).
              </p>
            </div>

            <form action="" method="post" className="container row mt-4">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="securityQ" className="form-label fw-bold">
                    Security Question:
                  </label>
                  <div className="input-group">
                    <select
                      name="securityQ"
                      id="securityQ"
                      className="form-select"
                    >
                      <option selected>Select Question...</option>
                      <option value="q1">Q1</option>
                      <option value="q2">Q2</option>
                      <option value="q3">Q3</option>
                    </select>
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="answerQ" className="form-label fw-bold">
                    {" "}
                    Answer:{" "}
                  </label>
                  <input
                    type="text"
                    name="answer!"
                    id="answerQ"
                    className="form-control"
                    placeholder="Your answer..."
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="p-2 border border-3 border-dark rounded d-flex justify-content-around align-items-center bg-light">
                  <img
                    src="/assets/img/logo_taguig.png"
                    className="img-fluid"
                    width="100"
                    alt="logo"
                  />
                  <div className="d-flex flex-column justify-content-center py-2">
                    <h6 className="fw-bold">Your Application ID is:</h6>
                    <p className="text-center text-danger fw-bold">XXYZZ000</p>
                    <h6 className="fw-bold">Date:</h6>
                    <p className="text-center">MM/DD/YYYY</p>
                  </div>
                </div>
              </div>

              <div className="mt-5 d-flex justify-content-center align-items-center">
                <div className="d-flex gap-3">
                  <a
                    href="#"
                    className="btn cs-btn-secondary fw-bold fs-5 shadow-sm px-5"
                  >
                    Cancel
                  </a>
                  <a
                    href="#"
                    className="btn cs-btn-primary fw-bold fs-5 shadow-sm px-5"
                  >
                    Continue
                  </a>
                </div>
              </div>
            </form>
          </div>
        </main>
      </div>
    </>
  );
};

export default StartApp;
