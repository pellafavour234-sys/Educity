import React from 'react'
import './Programs.css'
import graduate4 from '../../assets/graduate4.jpg'
import graduate5 from '../../assets/graduate5.jpg'
import graduate6 from '../../assets/graduate6.jpg'
import child from '../../assets/child.jfif'
import child1 from '../../assets/child1.png'
import child2 from '../../assets/child2.png'

const Programs = () => {
  return (
    <div className='programs'>
    <div className="program">
    <img src={graduate4} alt=""/> 
    <div className="caption">
        <img src={child} alt=""/>
        <p>Graduation Degree</p>
    </div>
</div>
<div className="program">
    <img src={graduate5} alt=""/>
    <div className="caption">
        <img src={child1} alt=""/>
        <p>Masters Degree</p>
    </div> 
</div>
<div className="program">
<img src={graduate6} alt=""/> 
<div className="caption">
        <img src={child2} alt=""/>
        <p>Post graduation</p>
    </div>
</div>
    </div>
  )
}

export default Programs
