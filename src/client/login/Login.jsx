import "./login.css";

const Login = () => {
  return (
    <>
      <div className="log-page_container">
        <aside className="log-page_sidebar">
          <div className="log-page_header">
            <img src="/assets/img/logo_degree.png" alt="Logo" />
            <div className="d-block text-white">
              <h3 className="fw-bold head-title">ABC City</h3>
              <p className="fs-5">Scholarship Programs</p>
            </div>
          </div>
          <div className="display-6 fw-bold text-white p-4 mt-4">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit.”
          </div>
        </aside>
        <main className="log-page_main">
          <h1>Main</h1>
        </main>
      </div>
    </>
  );
};

export default Login;
