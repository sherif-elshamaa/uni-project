import React from 'react'
import '../styles/Latestnews.css'
import { MdOutlineDateRange } from 'react-icons/md'



function Latestnews() {

  const articles = [
    {
      img: "13305700433_c9f4ad4685_h.jpg",
      text: "PATZEK RECEIVES DISTINGUISHED ERASMUS AWARD",
      tag: "Faculty Focus",
      date: "Oct 28, 2020",
    },
    {
      img: "13305701663_96d6d846f5_h.jpg",
      text: "PRESIDENT CHAN'S ADDRESS ON COMMUNITY TESTING",
      tag: "News",
      date: "Oct 19, 2020",
    },
    {
      img: "13305912284_f4a700c5ea_h.jpg",
      text: 'THE "NEW NORMAL" - MAJOR TRENDS POST COVID-19',
      tag: "Innovation",
      date: "Oct 11, 2020",
    }
  ]

  return (
    <div className="news">
      <div className="bar"></div>
      <div className="box">
        <div className="header">
          <div className="head">
            <p>LATEST</p>
            <p>NEWS</p>
          </div>
          <button className="btn">
            Explore More
          </button>
        </div>
        <div className="cards">
          {articles.map((item, i) => (

            <figure className="card" key={i}>
              <img src={`/Images/Latest News/${item.img}`} alt={item.tag} />
              <p className="headline">
                {item.text}
              </p>
              <p className="info">{item.tag}</p>
              <p className="date"><MdOutlineDateRange /> {item.date}</p>
            </figure>
          ))}
        </div>
      </div>
      <div className="side">
        <img src="/Images/image02.jpg" alt="covid" />
        <div className="side-text">
          <p>RAPID RESEARCH<br />RESPONSE TEAM</p>
          <p>COVID-19</p>
        </div>
      </div>
    </div>
  )
}

export default Latestnews