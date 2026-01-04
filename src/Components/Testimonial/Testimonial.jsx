import React, { useRef } from 'react'
import'./Testimonial.css'
import arrow from '../../assets/arrow.png'
import back_arrow from'../../assets/back_arrow.png'
import people from '../../assets/people.jfif'
import prople1 from '../../assets/prople1.jfif'
import person from '../../assets/person.jfif'
import person1 from '../../assets/person1.jfif'


const Testimonial = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = () => {
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward = () =>{
 if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;

}

  return (
    <div className='testimonials'>
        <img src={arrow} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_arrow} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-Info">
                            <img src={people} alt=""/>
                        <div>
                        <h3>William Jackson 1</h3>
                        <span>Educity, USA</span>
                        </div>
                        </div>
                        <p>Choosing to Pursue my degree at Educity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                    </div>
                </li>
                
                 <li>
                    <div className="slide">
                        <div className="user-Info">
                            <img src={prople1} alt=""/>
                        <div>
                        <h3>William Jackson 2</h3>
                        <span>Educity, USA</span>
                        </div>
                        </div>
                        <p>Choosing to Pursue my degree at Educity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                    </div>
                </li>
                 <li>
                    <div className="slide">
                        <div className="user-Info">
                            <img src={person} alt=""/>
                        <div>
                        <h3>William Jackson 3</h3>
                        <span>Educity, USA</span>
                        </div>
                        </div>
                        <p>Choosing to Pursue my degree at Educity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                    </div>
                </li>
                 <li>
                    <div className="slide">
                        <div className="user-Info">
                            <img src={person1} alt=""/>
                        <div>
                        <h3>William Jackson 4</h3>
                        <span>Educity, USA</span>
                        </div>
                        </div>
                        <p>Choosing to Pursue my degree at Educity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                    </div>
                </li>
            </ul>
        </div>
      </div>
  )
}

export default Testimonial
