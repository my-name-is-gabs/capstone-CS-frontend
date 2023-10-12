import { Footer } from "../../components";

const About = () => {
  return (
    <>
      <div className="container">
        <h1 className="p-4 display-5 fw-bold my-3 w-75 text-break">
          Lorem ipsum dolor sit. Amet, consect. Etur, adipiscing elit.
        </h1>
        <div className="row gap-4">
          <div
            className="col-md-5 text-center text-white rounded-4 p-4"
            style={{ background: "#223D7E" }}
          >
            <h2 className="fw-bold mb-4">MISSION STATEMENT</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              venenatis egestas justo, non sodales lectus vestibulum a.
            </p>
          </div>
          <div className="col-md-6 bg-primary-subtle text-center rounded-4 p-4">
            <h2 className="fw-bold mb-4">VISION STATEMENT</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              venenatis egestas justo, non sodales lectus vestibulum a.
            </p>
          </div>
          <div className="col-md-4 bg-warning text-center rounded-4 p-4">
            <h2 className="fw-bold mb-4">TARGET SUMMARY</h2>
            <div className="d-inline-flex">
              <img
                src="/assets/img/target_summary_about.png"
                alt="Target Summary"
              />
              <p className="fw-semibold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet.
              </p>
            </div>
          </div>
          <div
            className="col-md-7 text-white rounded-4 p-4"
            style={{ background: "#3EB3C5" }}
          >
            <h2 className="fw-bold mb-4 text-center">
              BRIEF SCHOLARSHIP PROGRAM HISTORY
            </h2>
            <div className="d-inline-flex align-items-center">
              <img
                src="/assets/img/program_history_img.png"
                width={250}
                alt="Target Summary"
              />
              <p className="fw-semibold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                venenatis egestas justo, non sodales lectus vestibulum a. Nulla
                non sapien nec metus luctus tristique. Praesent lectus leo,
                tempor ut dui sodales, congue vestibulum ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
