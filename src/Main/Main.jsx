import React from 'react'
import "./Main.css"
import img3 from '../assets/img(3).jpg'
import img4 from '../assets/img(4).jpg'
import img5 from '../assets/img(5).jpg'
import img6 from '../assets/img(6).jpg'
import { CiLocationOn } from "react-icons/ci";
import { BiCommentDetail } from "react-icons/bi";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"



const Data = [
  {
    id:3 ,
    imgSrc: img3,
    destTitle:'Great Wall Of china',
    location:'China',
    grade:'Hostorical marvel',
    fees:'$600',
    destDescription:'The Great Wall of China is an extensive bulwark erected in ancient China, one of the largest building-construction projects ever undertaken. It is a series of fortifications built across the historical northern borders of ancient Chinese states.',
  },
  {
    id:4 ,
    imgSrc: img4,
    destTitle:'Dubai',
    location:'UAE',
    grade:'luxurious city',
    fees:'$500',
    destDescription:'Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture, and a lively nightlife scene. It is a key financial and trading hub, and one of the fastest-growing cities in the world.',
  },
  {
    id:5 ,
    imgSrc: img5,
    destTitle:'Taj Mahal',
    location:'India',
    grade:'Love devotion',
    fees:'$400',
    destDescription:'The Taj Mahal is a majestic white marble mausoleum located in Agra, India, on the southern bank of the Yamuna River. It is considered one of the most beautiful and iconic buildings in the world, and is widely regarded as a symbol of love and devotion',
  },
  {
    id:6 ,
    imgSrc: img6,
    destTitle:'Effiel Tower',
    location:'Paris',
    grade:'Romantic city',
    fees:'$300',
    destDescription:'Paris is the capital and largest city of France, located along the Seine River in the north-central part of the country. It is one of the world most beautiful and famous cities, known for its  architecture, fashion, and romantic atmosphere.',
  }
]

function Main() {

  useEffect(()=>{
    Aos.init({duration:1500})

  },[])

  return (
    <section className='main section container'>
      <div className="secTitle">
        <h3 data-aos= "fade-right" className="title">
          Most visited destinations
        </h3>
      </div>
      <div className="seeContent">
        {
          Data.map(({id,imgSrc,destTitle,location,grade,fees,destDescription})=>{
            return(
              <div key={id} data-aos= "fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>
                <div className="cardInfo">
                  <h4 className="destTitle">
                    {destTitle}
                  </h4>
                  <span className="container">
                    <div className="fees">
                      <div className="grade">
                        <span>{grade}<small>+1</small></span>
                      </div>
                      <div className="price">
                        <h5>{fees}</h5>
                      </div>
                    </div>
                    <div className="desc">
                      <p>{destDescription}</p>
                    </div>

                    <button className="btn">
                      Details <BiCommentDetail className='icon' />
                    </button>

                  </span>
                </div>
              </div>
            )
  
          })
  
        }

      </div>

    </section>
  )
}

export default Main