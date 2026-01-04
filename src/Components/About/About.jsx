import React from 'react'
import './About.css'
import graduate from '../../assets/graduate.jpg'
import play from '../../assets/play.png'
const About = () => (
    <div className='about'>
        <div className="about-left">
            <img src={graduate} alt="graduate" />
            <div className="play">
            <img src={play} alt="play" /></div>
        </div>
        <div className="about-right"></div>
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today </h2>
        <p>Embarking on a transformative educational journey with our university's comprehensive education progress. Our cutting-edge curriculum is designed to empower stdents with the knowledge.</p>
        <p>With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools. and communities</p>
    </div>
)

export default About
