import { Outlet, Link } from "react-router-dom";
import "../../style/NavBar.css"

const Layout = () => {
  return (
    <>
      <nav className="NavigationBar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <Link to="/portfolio">Projects</Link>
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
