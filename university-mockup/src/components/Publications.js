import React from 'react'
import { MdOutlineDateRange } from 'react-icons/md'
import "../styles/Publications.css"

function Publications() {

  const articles = [
    {
      img: "13305554505_7817a63e03_h.jpg",
      text: "CLUSTERED SPATIO-TEMPORAL VARYING COEFFICIENT REGRESSION MODEL",
      date: "Oct 26, 2020",
    },
    {
      img: "13305805023_819e2d1181_h.jpg",
      text: "THERMALLY STABLE SURFACTANT FREE CERIA NANOCUBES IN SILICA AEROGEL",
      date: "Oct 22, 2020",
    },
    {
      img: "13305910664_8755d19747_h.jpg",
      text: 'EVOLUTION AND BIOGEOGRAPHY OF THE ZANCLEA-SCLERACTINIA SYMBIOSIS',
      date: "Oct 19, 2020",
    },
    {
      img: "13295049475_e8cabf0a36_h.jpg",
      text: 'METAL HALIDE PEROVSKITES FOR HIGH-ENERGY RADIATION DETECTION',
      date: "Oct 18, 2020",
    }
  ]
  return (
    <div className="publications">
      <div className="bar"></div>
      <div className="r-container">
        <div className="p-header">
          <div className="p-head">
            <p>PUBLICATIONS</p>
          </div>
          <button className="btn">
            Explore More
          </button>
        </div>
        <div className="p-cards">
          {articles.map((item, i) => (

            <figure className="p-card" key={i}>
              <img src={`/Images/Publications/${item.img}`} alt={item.tag} />
              <div className="p-details">
                <p className="p-headline">
                  {item.text}
                </p>
                <p className="p-date"><span className="p-color"><MdOutlineDateRange /></span> {item.date}</p>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Publications