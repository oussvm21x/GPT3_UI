import React from 'react'
import people from '../../assets/people.png'
import Ai from  '../../assets/ai.png'
import './header.css'
const Header = () => {
  return (
    <div className="gpt3__header header_section_padding " id='home'>
      <div className="gpt3__header-content y_section_padding ">
        <h1 className="gradient__text">Let’s Build Something amazing with GPT-3 OpenAI</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <div className="gpt3__header-content_input">
          <input placeholder='Your Email Address' type='text'></input>
          <button>Get Started</button>
        </div>
        <div className="gpt3__header-content-img">
          <img src={people}></img>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-img">
          <img src={Ai}></img>
      </div>
    </div>
  )
}

export default Header