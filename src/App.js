
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import Skill from "./Components/Skill/Skills"

import Portfolios from './Components/Portfolios/Portfolio';
import Contactus from './Components/ContactUs/Contact'
import Testimonials from './Components/Testonimals/Testonimals';
import Services from "./Components/Service/Services"
import Resume from "./Components/Resume/Resume"

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
   <BrowserRouter>
     

      <Routes>
      <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} exact />
          <Route path="services" element={< Services />} />
          <Route path="portfolio" element={< Portfolios />} />
          <Route path="resume" element={<Resume />} />
          <Route path="testonimal" element={<Testimonials />} />
          <Route path="contactus" element={< Contactus/>} />


        </Route>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
