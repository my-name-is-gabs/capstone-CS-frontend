import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Footer } from "../../components";
import "./home.css";

const Home = () => {
  const param = useParams();
  let { message } = param;
  const [isShown, setIsShown] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsShown(false);
    }, 10000);
  }, []);

  return (
    <>
      {message === "success" ? (
        <div
          className={`alert alert-info alert-dismissible fade show ${
            isShown ? "" : "d-none"
          }`}
          role="alert"
        >
          Thank you for your participation. Your scholarship application for the
          <strong> Nth Semester</strong> of{" "}
          <strong>
            S.Y {new Date().getFullYear()}-{new Date().getFullYear() + 1}
          </strong>{" "}
          has been successfully submitted. Please keep your eyes on our email in
          regards to your application’s status.
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      ) : null}

      <div className="cs-center-items">
        <div className="container-fluid mx-auto">
          <div className="d-flex justify-content-center align-items-center gap-4">
            <div className="row">
              <div className="col-md-6">
                <img
                  src="https://plus.unsplash.com/premium_photo-1682284548131-58cb47f6ab2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Unsplash Image Link"
                  className="img-fluid"
                  width={800}
                />
              </div>
              <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
                <h1 className="p-4 text-center fw-bold display-5">
                  Lorem ipsum dolor sit amet. <br /> Lorem, ipsum dolor.
                </h1>
                <div className="align-self-center">
                  <button className="btn btn-warning border-1 fw-bold fs-4 border border-1 border-dark">
                    Hear Stories!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
