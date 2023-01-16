import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import { Fade as Hamburger } from 'hamburger-react'
import './Navbar.scss'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  const handleClick = () => setToggle(!toggle)
  return (
    <>
      <div className="nav-wrapper">
        <nav className="navbar">
          <div className="navbar__logo">
            <NavLink to="/">
              <span>C</span>
              <span>N</span>
            </NavLink>
          </div>
          <div className={toggle ? "navbar__links toggle" : "navbar__links"} onClick={() => setToggle(false)}>
            <NavLink end to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/service">Service</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/privacy">Privacy</NavLink>
          </div>
          <div className={toggle ? "navbar__userhelp toggle" : "navbar__userhelp"} onClick={() => setToggle(false)}>
            <div className="search-icon">
              <span>
                <BsSearch />
              </span>
            </div>
            <div className="contact-btn">
              <button>Contact Us</button>
            </div>
          </div>
          <div className='nav__links hamburger'  onClick={handleClick}>
            <Hamburger className='hamburger' size={25} duration={0.8} toggled={toggle} toggle={setToggle} />
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar