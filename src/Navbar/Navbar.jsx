import React from 'react'
import "./Navbar.css"
import {MdOutlineTravelExplore} from 'react-icons/md'
import { FaWindowClose  } from 'react-icons/fa'
import { TbGridDots } from "react-icons/tb";
import { useState } from "react"

function Navbar() {
    const [active, setActive] = useState('navBar')

    const showNav=()=>{
        setActive('navBar activeNavbar')
    }

    const removeNav=()=>{
        setActive('navBar')
    }

  return (
    <section className='navBarsection'>
        <header className='header'>
            <div className="logoDiv">
                <a href="#" className='logo'>
                    <h1><MdOutlineTravelExplore className="icon" />
                    TravelAgent</h1>
                </a>
            </div>
            <div className={active}>
                <ul className="navLists">
                    <li className="navItem">
                        <a href="#" className='navLink'>Home</a>
                    </li>
                    <li className="navItem">
                        <a href="#" className='navLink'>Packages</a>
                    </li>
                    <li className="navItem">
                        <a href="#" className='navLink'>Shop</a>
                    </li>
                    <li className="navItem">
                        <a href="#" className='navLink'>About</a>
                    </li>
                    <li className="navItem">
                        <a href="#" className='navLink'>Pages</a>
                    </li>
                    <li className="navItem">
                        <a href="#" className='navLink'>News</a>
                    </li>
                    <li className="navItem">
                        <a href="#" className='navLink'>Contact</a>
                    </li>

                    <button className='btn'>
                        <a href="#" className='btnLink'>Book Now</a>
                    </button>
                </ul>
                <div  onClick={removeNav} className="closeNavbar">
                    <FaWindowClose className="icon"/>

                </div>
            </div>

            <div  onClick={showNav} className="toggleNavbar">
                <TbGridDots  className='icon'/>
            </div>

        </header>

    </section>
  )
}

export default Navbar