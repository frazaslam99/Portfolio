import React from 'react'
import Hero from "../Hero/Hero"
import AboutUs from '../About/About'
import Resume from "../Resume/Resume"
import Services from '../Service/Services'
import Testonimals from "../Testonimals/Testonimals"
import Portfolio from "../Portfolios/Portfolio"
import Contact from "../ContactUs/Contact"
import Footer from "../Footer/Footer"
import Counter from '../Counter/Counter'
import "./Home.css"
export const Home = () => {
  return (
    <>
      <Hero />
      <h1 className='headingmain'>
        About  <span>  Us</span>
      </h1>
      <AboutUs />
     <Counter/>

      <h2 className='headingmain'>
        Resume
      </h2>
      <Resume />
      <h2 className='servicehead'> Services</h2>
      <Services />

      <h2 className='headingmain'>
        Testonimals
      </h2>
      <Testonimals />

      <h2 className='headingmain'>
        Portfolios
      </h2>
      <Portfolio />

      <h2 className='headingmain'>
        Contact Us
      </h2>
      <Contact />
      <Footer />


    </>
  )
}
export default Home;
