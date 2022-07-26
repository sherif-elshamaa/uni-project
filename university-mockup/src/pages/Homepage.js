import React from 'react'
import '../styles/Homepage.css'
import Facilities from '../components/Facilities'
import Followus from '../components/Followus'
import Hero from '../components/Hero'
import Latestnews from '../components/Latestnews'
import Navbar from '../components/Navbar'
import Publications from '../components/Publications'
import Research from '../components/Research'
import Stories from '../components/Stories'

function Homepage() {
  return (
    <div className="homepage">
      <Followus />
      <Navbar />
      <Hero />
      <Latestnews />
      <Research />
      <Facilities />
      <Publications />
      <Stories />
    </div>
  )
}

export default Homepage