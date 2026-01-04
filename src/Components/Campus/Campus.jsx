import React from 'react'
import './Campus.css'
import reading1 from '../../assets/reading1.jfif'
import reading from '../../assets/reading.jfif'
import graduate2 from '../../assets/graduate2.jpg'
import graduate3 from '../../assets/graduate3.jpg'
import arrow1 from '../../assets/arrow1.png'

const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={reading1} alt=""/>
        <img src={reading} alt=""/>
        <img src={graduate2} alt=""/>
        <img src={graduate3} alt=""/>
      </div>
      <button className='btn dark-btn'>See more here<img src={arrow1} alt=""/></button>
    </div>
  )
}

export default Campus
