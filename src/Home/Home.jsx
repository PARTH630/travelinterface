import React from 'react'
import "./Home.css"
import img from "../assets/imgh.jpg"
import { FaLocationDot } from "react-icons/fa6";
import { FaFilter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { TbApps } from "react-icons/tb";

import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"

function Home() {

  useEffect(()=>{
    Aos.init({duration:2000})

  },[])
  return (
    <div className='home'>
      <div className="overlay"></div>
      <img src={img} className='imgh' alt="" />
      <div className="homeContent container">

        <div className="textDiv">

          <span data-aos= "fade-up" className="smallText">
            Our Packages
          </span>

          <h1 data-aos= "fade-up" className="homeTitle">
            Search your holiday
          </h1>

        </div>

        <div data-aos= "fade-up" className="cardDiv ">
          <div className="destinationInput">
            <label htmlFor="city">Search your destination :</label>
            <div className="input">
              <input type="text" placeholder='Enter name here...' />
              <FaLocationDot  className='icon'/>
            </div>
          </div>
          <div className="dateInput">
            <label htmlFor="city">Select your date :</label>
            <div className="input">
              <input type="date" />
            </div>
          </div>
          <div className="priceInput">
            <div className="label_total">
              <label htmlFor="city">Select your price :</label>
              <h3 className="total">$5000</h3>
            </div>
            <div className="input">
              <input type="range" min="5000" max="10000"  />
            </div>
          </div>
          <div className="searchOptions">
          <FaFilter className="icon" />
          <span>More Filters</span>

          </div>
        </div>

        <div  data-aos= "fade-up" className="homeFooterIcons">
          <div className="rightIcons">
          <FaFacebook className='icon'/>
          <FaInstagram className='icon'/>
          <FaTripadvisor className='icon' />
          </div>
          <div className="leftIcons">
          <FaListUl className='icon' />
          <TbApps  className='icon'/>


          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Home