import React from 'react'
import GameHeader from '../components/games/GameHeader'
import GamePortfolioMinor from '../components/games/GamePortfolioMinor'
import darkmoon from '../assets/lionheart.png'
import "../assets/css/game.css"

const DarkmoonPage = () => {
  return (
    <div className='game'>
        <div className="whole">
        <GameHeader />
        <div className="content">
          <GamePortfolioMinor
            picture={darkmoon}
            pictureAlt={"Lionheart: Dark Moon Splash"}
            title={"Lionheart: Dark Moon"}
            description={
              "I was a C# programmer using Unity for this game. My primary duties were UI development and client side feature work. I implemented quick loot, events, localization, social linking, and more! Published on Game Center for iOS and Google Play for Android Devices."
            }
            linkApple={
              "https://apps.apple.com/ca/app/lionheart-dark-moon-rpg/id997490707"
            }
            linkGoogle={
              "https://play.google.com/store/apps/details?id=ca.emeraldcitygames.erpg&hl=en_CA"
            }
          />
        </div>
      </div>
    </div>
  )
}

export default DarkmoonPage