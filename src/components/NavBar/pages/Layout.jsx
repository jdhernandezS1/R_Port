import { Outlet, NavLink } from "react-router-dom";
import "../../style/NavBar.css"

const Layout = () => {
  return (
    <>
      <nav className="NavigationBar">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/resume">Resume</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio">Projects</NavLink>
          </li>
          {/* <li>
            <NavLink to="/R_Port/contact">Contact</NavLink>
          </li> */}
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
