import React, { useState } from 'react'
import {RiCloseLine , RiMenu3Line}  from 'react-icons/ri'
import logo from '../../assets/logo.svg'
import './navbar.css'
const Navbar = () => {
const Menu = () => {
  return (
    <>
      <p><a href='#'>Home</a></p>
      <p><a href='#'>What is GPT ?</a></p>
      <p><a href='#'>Open Ai</a></p>
      <p><a href='#'>Case Studies</a></p>
      <p><a href='#'>Library</a></p>
    </>
  );
};
  const [toggleMenu , setToggle] = useState(false)
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3_navbar-links_logo">
          <img src={logo}></img>
        </div>

        <div className="gpt3__navbar-links__content">
          <Menu></Menu>
        </div>
      </div>

      <div className="gpt3__navbar-sign">
          <p><a href='#'>Sign in</a></p>
          <button>sign up</button>
        </div>

      <div className="gpt3__navbar-menu ">
        {
          toggleMenu 
          ? <RiCloseLine color='#fff' size={27} onClick={()=>{setToggle(false)}}></RiCloseLine>
          : <RiMenu3Line color='#fff' size={27} onClick={()=>{setToggle(true)}} ></RiMenu3Line>
        }

        {
          toggleMenu && 
          (
            <div className="gpt3__navbar-menu_container scale-up-center">
              <div className="gpt3__navbar-menu_container-links">
                <Menu></Menu>
                <div className="gpt3__navbar-menu_container-links-sign">
                  <p><a href='#'>Sign in</a></p>
                  <button>sign up</button>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>

   
  )
}

export default Navbar