const ForgotPassword = () => {
  return (
    <>
      <div className="container d-flex align-items-center justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header cs-bg-primary bg-gradient fw-bold text-white">
              Enter your valid email
            </div>
            <div className="card-body">
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                required
              />
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-end">
                <button className="btn btn-primary">Continue</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
