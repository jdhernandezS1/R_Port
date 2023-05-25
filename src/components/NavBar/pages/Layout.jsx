import { Outlet, Link } from "react-router-dom";
import "../../style/NavBar.css"

const Layout = () => {
  return (
    <>
      <nav className="NavigationBar">
        <ul>
          <li>
            <Link to="/R_Port">Home</Link>
          </li>
          <li>
            <Link to="/R_Port/resume">Resume</Link>
          </li>
          <li>
            <Link to="/R_Port/portafolio">Projects</Link>
          </li>
          {/* <li>
            <Link to="/R_Port/contact">Contact</Link>
          </li> */}

        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
