import React from 'react'
import GameHeader from '../components/games/GameHeader'
import GamePortfolioMinor from '../components/games/GamePortfolioMinor'
import coffee from '../assets/coffee.jpg'

const CoffeePage = () => {
  return (
    <div className='game'>
        <div className="whole">
        <GameHeader />
        <div className="content">
          <GamePortfolioMinor
            picture={coffee}
            pictureAlt={"Where's My Coffee Splash"}
            title={"Where's My Coffee?"}
            description={
              "I designed a couple of the levels for this casual puzzle game. It is on the Game Center and Google Play stores in select countries."
            }
            linkApple={
              "https://apps.apple.com/ch/app/wheres-my-coffee/id1451131439?l=en"
            }
            linkGoogle={
              "https://play.google.com/store/apps/details?id=ca.emeraldcitygames.coffee&hl=en_ZA"
            }
          />
        </div>
      </div>
    </div>
  )
}

export default CoffeePage