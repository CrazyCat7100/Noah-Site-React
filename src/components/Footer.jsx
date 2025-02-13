import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <i className="fab fa-github" aria-hidden="true"></i>
        {' '}Hey, I created this website!{' '}
        <a
          href="https://github.com/nopetrides"
          target="_blank"
          rel="noopener noreferrer"
        >
           Check out my GitHub
        </a>
        {' '}<i className="fab fa-github" aria-hidden="true"></i>
      </footer>
    </div>
  );
};

export default Footer;
