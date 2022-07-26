import React from 'react'
import '../styles/Stories.css'
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io'

function Stories() {
  const stories = [
    {
      story: "The campus is really nice, we all feel comfortable to live here. Good work/life balance, everything is close. About work, you have acess to high class facilities",
      name: 'Student Name',
      year: '2019',
      img: "st01.jpg"
    }, {
      story: "Offered me flexibility in how/when to preform my internship tasks as I was a PhD student at the time and preferred to work on the internship outside of normal working hours.",
      name: 'Student Name',
      year: '2019',
      img: "st02.jpg"
    }, {
      story: "Good facilities, nice work environment, people woth different nationalities and backgrounds, communitylife is awsome.",
      name: 'Student Name',
      year: '2019',
      img: "st03.jpg"
    }
  ]
  return (
    <div className="stories">
      <div className="bar"></div>
      <div className="s-header">
        <div className="s-head">
          <p>BioE</p>
          <p>STORIES</p>
        </div>
        <div className="s-btns">
          <button className="btn">
            <IoMdArrowDropleft />
          </button>
          <button className="btn">
            <IoMdArrowDropright />
          </button>
        </div>
      </div>
      <div className="s-cards">
        {stories.map((story, i) => (

          <div className="s-card" key={i}>
            <p className="story">{story.story}</p>
            <div className="arrow"></div>
            <div className="s-img">
              <img src={`/Images/Bio/${story.img}`} alt={story.name} />
              <div>
                <p className="name">{story.name}</p>
                <p className="year">{story.year}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Stories