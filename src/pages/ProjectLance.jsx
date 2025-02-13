import React from 'react'
import GameHeader from '../components/games/GameHeader'
import GamePortfolio from '../components/games/GamePortfolio'
import projectlance from '../assets/projectlance.png'
import '../assets/css/demogame.css'

const ProjectLance = () => {
  return (
    <div className='demo'>
        <GameHeader />
      <div className="content">
        <GamePortfolio
          picture={projectlance}
          pictureAlt={"Project Lance Splash"}
          title={"Project Lance"}
          description={
            'This is a game I made in college to learn C# and Unity since our college program did not include either. I worked on the entirety of the game myself and used some placeholders for sound. It was also published on the Google Play store and had integrated Google Play Games features like acheivements and leaderboards. It is not currently available for download but you can find a video of it in action below.'
          }
          link={"https://www.youtube.com/watch?v=PIiaogMLroA"}
        />
      </div>
    </div>
  )
}

export default ProjectLance