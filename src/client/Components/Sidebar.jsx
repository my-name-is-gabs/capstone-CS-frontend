// eslint-disable-next-line react/prop-types
const Sidebar = ({ pageCounter, setPageCounter }) => {
  return (
    <aside
      className="offcanvas offcanvas-start cs--sidebar cs-bg-primary"
      tabIndex="-1"
      id="officerOffCanvas"
      aria-labelledby="officerOffCanvasLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title text-white" id="officerOffCanvasLabel">
          Welcome Username
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>

      <div className="off-canvas-body">
        <div className="d-flex ms-3 mt-3 mb-4">
          <img
            src="/assets/img/logo_degree.png"
            width={64}
            height={64}
            className="align-self-center"
            alt="Logo"
          />
          <div className="d-block text-white">
            <h3 className="fw-bold border-bottom border-2 border-white pb-2">
              ABC City
            </h3>
            <p className="fs-6">Scholarship Programs</p>
          </div>
        </div>
        <ul className="cs--sidenavs">
          <li
            className={pageCounter === 1 ? "active" : ""}
            onClick={() => setPageCounter(1)}
          >
            <div>
              <i className="fa-solid fa-table me-2"></i> Records
            </div>
          </li>
          <li
            className={pageCounter === 2 ? "active" : ""}
            onClick={() => setPageCounter(2)}
          >
            <div>
              <i className="fa-solid fa-user-gear me-2"></i> Profile
            </div>
          </li>
          <li
            className={pageCounter === 3 ? "active" : ""}
            onClick={() => setPageCounter(3)}
          >
            <div>
              <i className="fa-solid fa-circle-info me-2"></i> Info
            </div>
          </li>
        </ul>
        <footer className="position-absolute w-100 mx-auto bottom-0">
          <p className="text-center text-white fw-bold fs-5 me-5">
            ©DEVGROUP 2023
          </p>
        </footer>
      </div>
    </aside>
  );
};

export default Sidebar;
