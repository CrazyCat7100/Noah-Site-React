import React, { useState } from "react";
import social from "../assets/social.png";

const Social = () => {
  const [hover, setHover] = useState({});

  const handleMouseEnter = (key) => {
    setHover((prev) => ({ ...prev, [key]: true }));
  };

  const handleMouseLeave = (key) => {
    setHover((prev) => ({ ...prev, [key]: false }));
  };

  return (
    <div className="social">
      <a
        style={{
          background: `url(${social})`,
          backgroundPosition: hover.linkedin ? "-64px -64px" : "-64px 0px",
        }}
        className="linkedin"
        href="https://www.linkedin.com/in/noah-petrides/"
        onMouseEnter={() => handleMouseEnter("linkedin")}
        onMouseLeave={() => handleMouseLeave("linkedin")}
      ></a>
      <a
        style={{
          background: `url(${social})`,
          backgroundPosition: hover.facebook ? "-128px -64px" : "-128px 0px",
        }}
        className="facebook"
        href="https://facebook.com/noah.petrides"
        onMouseEnter={() => handleMouseEnter("facebook")}
        onMouseLeave={() => handleMouseLeave("facebook")}
      ></a>
      <a
        style={{
          background: `url(${social})`,
          backgroundPosition: hover.email ? "0px -64px" : "0px 0px",
        }}
        className="email"
        href="mailto:nopetrides@gmail.com"
        onMouseEnter={() => handleMouseEnter("email")}
        onMouseLeave={() => handleMouseLeave("email")}
      ></a>
    </div>
  );
};

export default Social;
