import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { BsSearch } from 'react-icons/bs'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/Images/Logo.jpg" alt="Logo" />
      </div>
      <div className="tabs">
        <button className="home">HOME</button>
        <button >RESEARCH & TECHNOLOGIES <IoIosArrowDown /></button>
        <button >TRANSLATION <IoIosArrowDown /></button>
        <button >PEOPLE <IoIosArrowDown /></button>
        <button >NEWS & EVENTS <IoIosArrowDown /></button>
      </div>
      <button className="search"><BsSearch /> <p>SEARCH</p></button>
    </div>
  )
}

export default Navbar