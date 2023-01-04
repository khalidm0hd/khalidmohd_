import React from 'react'
import './NavStyle.css';



function Navbar() {
  return (
    <div className='navbar'>
        <div className="log">
            <h2>khalid<span>mohd</span></h2>
        </div>
        <div className='nav-menu'>
          <ul>
          <li><a href='#about'>about</a></li>
          <li><a href='#skills'>skills</a></li>
          <li><a href="#Portfolio">portfolio</a></li>
          <li><a href='#contact'>contact</a></li>
          </ul>
        </div>
          </div>
            )
}

export default Navbar;