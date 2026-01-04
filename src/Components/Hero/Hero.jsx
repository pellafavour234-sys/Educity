import React from 'react'
import './Hero.css'
import forward_arrow from'../../assets/forward_arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We ensure better education for a better world</h1>
            <p>Our cutting edge curriculum is designed to empower students with the knowledge, skills, and experience needed to excel in the dynamic field of education</p>
            <button className='btn'>Explore more<img src={forward_arrow} alt=""/></button>
        </div>
      
    </div>
  )
}

export default Hero
