import React from 'react';
import Info from './Info';
import noahBg from "../assets/noahbg.jpg";
import vignette from "../assets/vignette.png"
import Social from './Social';

const Header = () => {
  return (
    <header style={{ backgroundImage: `url(${noahBg}) `}}>
      <div className="vignette" style={{background: `url(${vignette}) center center no-repeat`, width: '100%', backgroundSize: "100% 100%"}} >&nbsp;</div>
      <Info />
      <Social/>
    </header>
  );
};

export default Header;
