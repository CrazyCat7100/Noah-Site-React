import React from 'react'
import apple from '../../assets/appstore.png'
import google from '../../assets/gplay.png'


const GamePortfolioMinor = ({ picture, pictureAlt, title, description, linkApple, linkGoogle }) => {
    return (
      <div className="game-portfolio">
        <div className="section">
          <div className="list">
            <div className="project-wrapper">
              <img src={picture} alt={pictureAlt} className="main-splash" />
            </div>
          </div>
        </div>
        <div className="description">
          <h2 id="links">{title}</h2>
          <p>
            {description}
          </p>
          <div className="links">
            <a href={linkApple}>
              <img src={apple} alt="AppStore Link" />
            </a>
            <a href={linkGoogle}>
              <img src={google} alt="AppStore Link" />
            </a>
          </div>
          
            
          
          <div className="list">
            <div className="back">
              <a href="/">&lt;&lt; Portfolio</a>
            </div>
          </div>
        </div>
        <div className="works">
          <div className="ending">
            <i className="fab fa-github" aria-hidden="true"></i>
            {' '}Hey, I created this website! <a href="https://github.com/nopetrides">Check out my GitHub</a>
            {' '}<i className="fab fa-github" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    )
  }

export default GamePortfolioMinor