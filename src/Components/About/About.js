import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { FaFacebook } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { BsGithub } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
import hero from "../pic/hero.png"
import "./About.css"
import 'animate.css';


export default function AboutUs() {
  return (
    <Box sx={{ flexGrow: 1 }} style={{ backgroundColor: "#F0F1F3" }} class="animate__animated animate__fadeInUp animate__delay-2s"  >
      <Grid container >
        <Grid xs={10} lg={10} container  className="anotgrid" style={{ display: "flex", justifyContent: "center", margin: "0 auto", boxShadow: "4px 4px 8px 9px #cbcbcb, -4px -4px 8px  #ffffff", height: "100%", marginTop: "60px" }}  >

          <Grid sm={12} md={12} lg={6}   >
            <div className='aboutheroimg' >
              <img src={hero} alt='' />


              <div className='icons'>
              <a href="https://www.facebook.com/fraz.aslam.501">  <FaFacebook /></a>
              <a href="https://www.instagram.com/aslamfraz/">  <BsInstagram /></a>
              <a href="https://www.linkedin.com/in/fraz-aslam-442b36172/">  <FaLinkedin /></a>
              <a href="https://github.com/frazaslam99">  <BsGithub /></a>

            </div>
            </div>

          
          </Grid>

          <Grid sm={12} md={12} lg={6} >
            <div className='abouttext' >
              <h2 >I am Professional User Experience Designer</h2>
              <p>I design and develop services for customers specializing creating stylish, modern websites,
                web services and online stores. My passion is to design digital user experiences.</p>
              <p>I design and develop services for customers specializing creating stylish,
                modern websites, web services.</p>

                <div className='aboutbutton'>

                <button className='myprbtn'>My Project</button>
                <button className='downcvbtn'>Download CV</button>

                </div>

            </div>

          </Grid>

        </Grid >


      </Grid>
    </Box>
  );
}
