import React from 'react'
import Hero from '../components/Hero'
import Contact from '../components/Contact'

const LandingPage = () => {
    // console.log("hehe")
  return (
    <>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Hero />
        </div>
        <Contact/>
        </div>
    </>
  )
}

export default LandingPage