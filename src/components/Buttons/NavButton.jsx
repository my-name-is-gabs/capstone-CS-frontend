import { NavLink } from "react-router-dom";
import { PropTypes } from "prop-types";

const NavButton = ({ children, linkRef, btnBG, fontSize = 6 }) => {
  return (
    <NavLink
      className={`btn ${btnBG} fw-bold fs-${fontSize} rounded-pill px-4 border border-dark border-2`}
      to={linkRef}
    >
      {children}
    </NavLink>
  );
};

NavButton.propTypes = {
  children: PropTypes.string,
  btnBG: PropTypes.string,
  linkRef: PropTypes.string,
  fontSize: PropTypes.number,
};

export default NavButton;
