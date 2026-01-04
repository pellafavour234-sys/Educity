import React from 'react'
import './Contact.css'
import msg from '../../assets/msg.jfif'
import mail from'../../assets/mail.png'
import phone from '../../assets/phone.jfif'
import location from'../../assets/location.png'
import arrow1 from '../../assets/arrow1.png'
const Contact = () => {
  return (
    <div className='contact'> 
     <div className="contact-col">
        <h3>Send us a message<img src={msg} alt=""/></h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us.</p>
        <ul>
            <li><img src={mail} alt="" />Contact@Greatstack.dev</li>
            <li><img src={phone} alt="" />+234 8130204562</li>
            <li><img src={location} alt="" />Ile-Ife, OAU<br/> Osun State</li>
        </ul>
     </div>
     <div className="contact-col">
        <form>
        <label>Your name</label>
        <input type="text" name='name' placeholder='Enter your name' required/>
       <label>Phone Number</label>
       <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
       <label>Write your messages here</label> 
        <textarea name="message" rows="6" placeholder='enter your message' required></textarea>
        <button type='submit' className='btn dark-btn'>Submit now<img src={arrow1} alt=""/></button>
        </form>
        <span>sending     </span>
        </div> 
    </div>
  )
}

export default Contact
