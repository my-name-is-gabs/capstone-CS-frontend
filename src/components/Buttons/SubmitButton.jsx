// eslint-disable-next-line react/prop-types
const SubmitButton = ({ children }) => {
  return (
    <button
      type="submit"
      className="btn cs-btn-primary fw-bold fs-5 shadow-sm px-5"
    >
      {children}
    </button>
  );
};

export default SubmitButton;
