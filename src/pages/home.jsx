import React from 'react'
import Navbar from "../components/nav"
import Heros from "../components/heros"
import { ImPointRight } from 'react-icons/im'
import About from "../components/about"
import Services from "../components/services"
import Project from "../components/project"
import Footer from "../components/footer"
import Contact from "../components/contact"
const home = () => {
  return (
    <div>
      <Navbar/>
      <Heros/>
      <About/>
      <Services/>
      <Project/>
      <Contact/>
      <Footer/>

    </div>
  )
}

export default home
