import React from 'react'
import noah from "../assets/noah.jpg"
import About from './About'

const Info = () => {
  return (
    <div className='info'>
        <img src={noah} alt="Noah Petrides" />
        <About/>
    </div>
  )
}

export default Info