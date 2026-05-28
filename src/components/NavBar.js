import React from 'react'
import logo from '../Img/logo.png';
import  '../styles/NavBar.css'

import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="leftSide">
      <img src={logo} alt ="Lebanese League" />
      <Link to="/Welcome"> <h1>Basketball Connect Lebanon</h1> </Link>
      </div>
      <div className="rightSide">
        <Link to="/Home"> Home </Link>
        <Link to="/Games"> Games </Link>
        <Link to="/Team"> Team </Link>
        
      </div>
    </div>
  )
}

export default NavBar
