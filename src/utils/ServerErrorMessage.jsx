// eslint-disable-next-line react/prop-types
const ServerErrorMessage = ({ message, setIsShownError }) => {
  return (
    <>
      <div
        className="position-absolute top-0 alert alert-danger alert-dismissible fade show text-center"
        role="alert"
      >
        <i className="fa-solid fa-triangle-exclamation"></i> {message}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={() => setIsShownError(false)}
        ></button>
      </div>
    </>
  );
};

export default ServerErrorMessage;
