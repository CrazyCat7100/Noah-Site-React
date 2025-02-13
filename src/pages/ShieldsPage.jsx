import React from "react";
import GameHeader from "../components/games/GameHeader";
import GamePortfolio from "../components/games/GamePortfolio";
import sheilds from '../assets/shieldsSplash.png' 
import '../assets/css/demogame.css'

const ShieldsPage = () => {
  return (
    <div className="demo">
      <GameHeader />
      <div className="content">
        <GamePortfolio
          picture={sheilds}
          pictureAlt={"Animated Gameplay of Shields!"}
          title={"Shields!"}
          description={
            'This quick game was an excercise in Unity and C# development. It is designed to replicate "Splashy!". The work done here was completed in a week. It was created with C# and Unity as a part of a job application for a game studio, for which I received an offer. You can check out a video of the project in action, or visit my Github below for the source code.'
          }
          link={"https://www.youtube.com/watch?v=FQN-6KAKBvE&"}
        />
      </div>
    </div>
  );
};

export default ShieldsPage;
