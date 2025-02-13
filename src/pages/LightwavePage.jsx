import React from "react";
import Header from "../components/Header";
import lightwave from "../assets/lightwave.png";
import "../assets/css/lightwave.css";
import GamePortfolio from "../components/games/GamePortfolio";
import GameHeader from "../components/games/GameHeader";

const LightwavePage = () => {
  return (
    <div className="whole">
      <GameHeader />
      <div className="content">
        <GamePortfolio
          picture={lightwave}
          pictureAlt={"LightWave Splash"}
          title={"LightWave"}
          description={
            'Originally a C++ project using SDL, it won "Best in Team Performance" At Games Fleadh 2017. Now it is a Unity Project currently in development with C#. Check out the blog below for the latest updates on the project!'
          }
          link={""}
        />
      </div>
    </div>
  );
};

export default LightwavePage;

//picture, pictureAlt, title, description, link
