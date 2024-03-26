import React from 'react'
import './footer.css'

import logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className="gpt3__footer section_padding">
      <div className="gpt3__footer-header">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
        <div className="gpt3__footer-header_button">
          <p>Request Early Access</p>
        </div>
      </div>
      <div className="gpt3__footer-content">
        <div className="gpt3__footer-content_logo">
          <img src={logo} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-content_links">
          <p>Links</p>
          <ul>
            <li>Overons</li>
            <li>Social Media</li>
            <li>Counters</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="gpt3__footer-content_company">
          <p>Company</p>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="gpt3__footer-content_get-in-touch">
          <p>Get in touch</p>
          <ul>
            <li>Crechterwoord K12 182 DK Alknjkcb</li>
            <li>085-132567</li>
            <li>info@payme.net</li>
          </ul>
        </div>

      </div>

    </div>
  )
}

export default Footer