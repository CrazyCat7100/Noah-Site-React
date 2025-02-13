import React from 'react'


const GamePortfolio = ({ picture, pictureAlt, title, description, link }) => {
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
          <a href={link}>
            <i className="fab fa-youtube" aria-hidden="false"></i>
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

export default GamePortfolio