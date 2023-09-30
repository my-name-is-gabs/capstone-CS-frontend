import { NavLink } from "react-router-dom"
import {PropTypes} from 'prop-types'

const NavButton = ({children, btnBG, linkRef, fontSize = 5 }) => {
  return (
    <NavLink className={`btn ${btnBG} fw-bold fs-${fontSize}`} to={linkRef}>
        {children}
    </NavLink>
  )
}


NavButton.propTypes = {
    children: PropTypes.string,
    btnBG: PropTypes.string,
    linkRef: PropTypes.string,
    fontSize: PropTypes.number,
}

export default NavButton
