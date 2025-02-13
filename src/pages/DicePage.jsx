import React from "react";
import GameHeader from "../components/games/GameHeader";
import GamePortfolio from "../components/games/GamePortfolio"
import dice from '../assets/dicegame.jpg'
import '../assets/css/demogame.css'

const DicePage = () => {
  return (
    <div className="demo">
      <GameHeader />
      <div className="content">
        <GamePortfolio
          picture={dice}
          pictureAlt={"Dice Game Screenshot"}
          title={"Dice Game Demo Project"}
          description={
            'This quick game was an excercise in Unity and C# development. It is very simple and focuses around the "game" aspect of the project. The work done here was completed in two days. It was created with C# and Unity as a part of a job application for a game studio. You can check out a video of the project in action, or visit my Github below for the source code.'
          }
          link={"https://youtu.be/WYxcGF1VOcw"}
        />
      </div>
    </div>
  );
};

export default DicePage;
