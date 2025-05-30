import React from 'react'
import "../styles/Header.css"; // Import the CSS file for styling
import { RiSearchLine } from "react-icons/ri";
import { GoBellFill } from "react-icons/go";
import HealthcareLogo from "../assets/HealthcareLogo.png";
import { IoIosAdd } from "react-icons/io";
function Headers() {
  return (
    <div className='header-container'>
    
     <div className="logo">
        <span className="logo-text-blue">Health</span>
        <span className="logo-text-dark">care.</span>
      </div>
   <div className="search-bar">
        <RiSearchLine className="search-icon" />
        <input type="text" placeholder="Search" />
        <GoBellFill className="bell-icon" />
      </div>
      <div className="header-action">
        <span role="img" aria-label="avatar" className="avatar">🧑🏻‍🦱</span>
        <div className="add-button">
          <IoIosAdd className="add-icon" />
        </div>
      </div>
    </div>
  )
}

export default Headers