import React from "react";
import GameHeader from "../components/games/GameHeader";
import GamePortfolio from "../components/games/GamePortfolio";
import gijoe from "../assets/joesplash.png";
import GamePortfolioMinor from "../components/games/GamePortfolioMinor";
import "../assets/css/game.css";

const GijoePage = () => {
  return (
    <div className="game">
      <div className="whole">
        <GameHeader />
        <div className="content">
          <GamePortfolioMinor
            picture={gijoe}
            pictureAlt={"G.I. Joe: War on Cobra splash image"}
            title={"G.I. Joe: War On Cobra"}
            description={
              "I was a C# programmer using Unity for this game. My primary duties were UI development and client side feature work. I implemented a live chat service, localization, social linking, mail, news, and more! Published on Game Center for iOS and Google Play for Android Devices."
            }
            linkApple={
              "https://apps.apple.com/ca/app/g-i-joe-war-on-cobra-pvp/id1471554366"
            }
            linkGoogle={
              "https://play.google.com/store/apps/details?id=com.d3go.gijoewaroncobra&hl=en_US"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default GijoePage;
