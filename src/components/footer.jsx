import React from 'react';
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";
import "./style/Project.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} David's Portfolio. All rights reserved.</p>
        <div className="social-media">
          <a href="https://www.linkedin.com/in/9david-hernandez7/" target="_blank" rel="noopener noreferrer">
            <IoLogoLinkedin/>
          </a>
          <a href="https://github.com/jdhernandezS1" target="_blank" rel="noopener noreferrer">
            <IoLogoGithub/>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;