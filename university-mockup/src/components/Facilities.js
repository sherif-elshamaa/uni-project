import React from 'react'
import '../styles/Facilities.css'
import { IoMdArrowDropright } from 'react-icons/io'

function Facilities() {
  return (
    <div className="facilities">
      <div className="bar"></div>
      <div className="f-header">
        <p>FACILITIES &<br />RESOURCES</p>
      </div>
      <div className="f-flex">
        <div className="f-text">
          <p>Our goal is to succeed in achieving our University mission, research
            endeavors and aspirations to make KAUST an academic destination. Being healthy
            and well goes hand-in-hand with that goal. That's why KAUST has made the
            health and wellbeing of our entire community a high priority. A broad range
            of resources, services, programs and support are available amd accessible
            to ensure that our community members, students, faculty and staff, stay physically healthy
            and emotionally well.
          </p>
          <button className="btn">Explore More</button>
        </div>
        <div className="f-imgs">
          <div>
            <img src="/Images/Facilities/13305412005_661da205f8_h.jpg" alt="lab" />
            <p><span className="f-color"><IoMdArrowDropright /></span>CORE LABS AND MAJOR FACILITIES</p>
          </div>
          <div>
            <img src="/Images/Facilities/28232125988_386612a75e_k.jpg" alt="housing" />
            <p><span className="f-color"><IoMdArrowDropright /></span>HOUSING AND FACILITIES</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Facilities