import React from 'react'
import Info from '../Info'
import Social from '../Social'
import noahBg from '../../assets/noahbg.jpg';
import vignette from "../../assets/vignette.png"


const GameHeader = () => {
  return (
    <header style={{ backgroundImage: `url(${noahBg}) `}}>
      <div className="vignette" style={{background: `url(${vignette}) center center no-repeat`, width: '100%', backgroundSize: "100% 100%"}} >&nbsp;</div>
      <Info />
      <Social/>
    </header>
  )
}

export default GameHeader