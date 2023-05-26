import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Portafolio from "./pages/Project";
// import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

const NavBar = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="resume" element={<Resume />} />
          <Route path="portfolio" element={<Portafolio />} />
          {/* <Route path="#/contact/" element={<Contact />} /> */}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </HashRouter>

  );
}
export default NavBar;