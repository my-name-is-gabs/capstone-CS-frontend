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
                Question #1
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                nemo quibusdam ea mollitia, laudantium dolor blanditiis debitis
                perspiciatis sint eligendi reprehenderit expedita et cumque.
                Dignissimos ipsum obcaecati praesentium provident cumque iure
                dolore officiis reiciendis quam corporis. Excepturi
                exercitationem minus dolore enim quasi incidunt. Eos nemo iusto
                nobis nulla maiores voluptatibus
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
                Question #2
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Assumenda expedita, placeat iure inventore corrupti tempora sed
                ullam beatae vel non asperiores laborum? Ad harum at perferendis
                voluptates iusto vel fugit!
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
                Question #3
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                obcaecati officia sapiente quos placeat, magni deleniti atque
                quasi ullam maxime incidunt mollitia illo possimus earum autem
                quidem, laborum, quibusdam non fuga facere. A rerum alias, eius
                quod, dicta soluta repellendus dignissimos fugiat cupiditate
                mollitia aliquid incidunt voluptate ullam reprehenderit
                provident libero et porro maiores. Maxime?
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFour"
                aria-expanded="false"
                aria-controls="flush-collapseFour"
              >
                Question #4
              </button>
            </h2>
            <div
              id="flush-collapseFour"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                obcaecati officia sapiente quos placeat, magni deleniti atque
                quasi ullam maxime incidunt mollitia illo possimus earum autem
                quidem, laborum, quibusdam non fuga facere. A rerum alias, eius
                quod, dicta soluta repellendus dignissimos fugiat cupiditate
                mollitia aliquid incidunt voluptate ullam reprehenderit
                provident libero et porro maiores. Maxime?
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFive"
                aria-expanded="false"
                aria-controls="flush-collapseFive"
              >
                Question #5
              </button>
            </h2>
            <div
              id="flush-collapseFive"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                obcaecati officia sapiente quos placeat, magni deleniti atque
                quasi ullam maxime incidunt mollitia illo possimus earum autem
                quidem, laborum, quibusdam non fuga facere. A rerum alias, eius
                quod, dicta soluta repellendus dignissimos fugiat cupiditate
                mollitia aliquid incidunt voluptate ullam reprehenderit
                provident libero et porro maiores. Maxime?
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
