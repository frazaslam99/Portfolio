import * as React from 'react';
import Box from '@mui/material/Box';
import hero from "../pic/hero.png"
import Grid from '@mui/material/Unstable_Grid2';
import { Typewriter } from "react-simple-typewriter"
import { FaFacebook } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { BsGithub } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
import "./Hero.css"



export default function Hero() {
    return (
        <Box sx={{ flexGrow: 1 }} style={{ backgroundColor: "#F0F1F3" }}>
            <Grid container style={{ width: "100% ", marginTop: "30px", display: "flex", justifyContent: "center", margin: 0, padding: 0 }}>
                <Grid sm={12} md={12} lg={6} style={{ display: "flex", justifyContent: "center", }} >
                    <section className='herotext'>
                        <div>
                            <h3>WELCOME TO MY WORLD</h3>
                            <h1>
                                Hi, I’m <span>Fraz Aslam</span>
                            </h1>
                            <h2>
                                a
                                <span>
                                    <Typewriter words={[" Software Engineering.", " Front-End-Developer.", " Wordpress Developer.", " React Js Developer"]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
                                </span>
                            </h2>

                            <p>Creative front-end developer with more than +2 years of experience in enterprise companies and startups.
                                Proficient in HTML, CSS and React. Passionate about UI/UX</p>

                        </div>


                        <div className='heroicon'>
                        <h4>FIND WITH ME</h4>
                        <div className='icon'>
                       
                             <a href="https://www.facebook.com/fraz.aslam.501">  <FaFacebook/></a>
                             <a href="https://www.instagram.com/aslamfraz/">  <BsInstagram/></a>
                             <a href="https://www.linkedin.com/in/fraz-aslam-442b36172/">  <FaLinkedin/></a>
                             <a href="https://github.com/frazaslam99">  <BsGithub/></a>


                        
                          
                        </div>
                        </div>


                      
                    </section>
                </Grid>
                <Grid sm={12} md={6} lg={6}>

                    <div className='heroimg'>
                        <img src={hero} alt='' />
                    </div>
                </Grid>

            </Grid>
        </Box>
    );
}