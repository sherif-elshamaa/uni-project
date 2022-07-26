import React from 'react'
import '../styles/Research.css'
import { MdOutlineDateRange } from 'react-icons/md'

function Research() {

  const articles = [
    {
      img: "40549198661_e39309fbf9_k.jpg",
      text: "KAUST DEVELOPED FISH WEARABLE TECHNOLOGY WINS CES IINNOVATION AWARD",
      tag: "Technology Areas",
      date: "Oct 30, 2020",
    },
    {
      img: "44308473515_c102f46b56_k.jpg",
      text: "POSTDOCTORAL FELLOW FOCUS: MOHAMED ABDELHAMID",
      tag: "Focus Areas",
      date: "Oct 18, 2020",
    },
    {
      img: "13305555723_8eabec6be2_h.jpg",
      text: 'RESEARCH IN PHYSICAL SCIENCE & ENGINEERING',
      tag: "Disciplines",
      date: "Oct 12, 2020",
    },
    {
      img: "13305774464_e6ee96dc6b_h.jpg",
      text: 'EXAMINING HOW TECHNOLOGY INFORMS SCIENCE',
      tag: "Applications",
      date: "Oct 10, 2020",
    }
  ]
  return (
    <div className="research">
      <div className="bar"></div>
      <div className="container">
        <div className="research-head">
          <div className="r-head">
            <p>RESEARCH &<br />TECHNOLOGIES</p>
          </div>
          <button className="btn">
            Explore More
          </button>
        </div>
        <div className="r-cards">
          {articles.map((item, i) => (

            <figure className="r-card" key={i}>
              <img src={`/Images/Research Technologies/${item.img}`} alt={item.tag} />
              <div className="r-details">
                <p className="r-headline">
                  {item.text}
                </p>
                <p className="r-info">{item.tag}</p>
                <p className="r-date"><span className="r-color"><MdOutlineDateRange /></span> {item.date}</p>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Research