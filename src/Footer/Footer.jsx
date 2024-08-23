import React from 'react'
import "./Footer.css"
import video2 from '../assets/video(2).mp4'
import { BsFillSendFill } from "react-icons/bs";
import { MdTravelExplore } from "react-icons/md";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { SiTripadvisor } from "react-icons/si";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"









function Footer() {
  useEffect(()=>{
    Aos.init({duration:1500})

  },[])
  return (
    <section className="footer">
      <div className="video Div">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="seeContent">
        <div className="contactDiv">
          <div data-aos= "fade-up"  className="text">
            <small>KEEP IN TOUCH</small>
            <h2>TRAVEL WITH US</h2>
          </div>
          <div className="inputDiv">
            <input  data-aos= "fade-up" type="text" placeholder="Your Email" />
            <button  data-aos= "fade-up" className='btn' type='submit'>
              Send
            <BsFillSendFill className='icon' />

            </button>
          </div>
        </div>

        <div className="footerCard">
          <div className="footerIntro">
            <div className="logodiv">
              <MdTravelExplore className="icon"/>
              <h2>TRAVEL.</h2>
            </div>

            <div data-aos= "fade-up" className="footerParagraph">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt doloremque corporis, mollitia ex est vel fugiat dolorem distinctio obcaecati dolore quam. Autem dolore incidunt, ab magni adipisci temporibus dolorum hic quia quasi aperiam modi, praesentium eius debitis libero non tempore assumenda eaque illum perferendis eum aspernatur deserunt quae omnis repellendus.
            </div>
            <div  data-aos= "fade-up" className="footerSocials">
            <FaTwitter className='icon'/>
            <FaYoutube className='icon'/>
            <FaInstagramSquare className='icon'/>
            <SiTripadvisor className='icon'/>
            </div>
          </div>
          <div className="footerLinks">
            <div  data-aos= "fade-up" data-aos-duration="2000"className="linkGroup">
              <span className="grouptitle">
                OUR AGENCY

              </span>
              <li className="footerList">
              Services
              </li>
              <li className="footerList">
              Insurance
              </li>
              <li className="footerList">
              Agency
              </li>
              <li className="footerList">
              Tourism
              </li>
              <li className="footerList">
              payment
              </li>
            </div>
            <div  data-aos= "fade-up" data-aos-duration="2000"className="linkGroup">
              <span className="grouptitle">
                PARTNERS

              </span>
              <li className="footerList">
              Backlogs
              </li>
              <li className="footerList">
              Rentcars
              </li>
              <li className="footerList">
              Hostelworld
              </li>
              <li className="footerList">
              Trivago
              </li>
              <li className="footerList">
              Tripadvisor
              </li>
            </div>
            <div  data-aos= "fade-up" data-aos-duration="2000"className="linkGroup">
              <span className="grouptitle">
                LASTMINUTE

              </span>
              <li className="footerList">
              London
              </li>
              <li className="footerList">
              Califorina
              </li>
              <li className="footerList">
              Indonesia
              </li>
              <li className="footerList">
              Europe
              </li>
              <li className="footerList">
              Canada
              </li>
            </div>
            

          </div>

          <div className="footerDiv">
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>COPYRIGHTS RESERVED PARTH 2022</small>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Footer