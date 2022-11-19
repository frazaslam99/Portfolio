import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Contactdata from "./Contactdata"
import ContactCard from "./Card"
import ContactForm from "./Form"
import { FaFacebook } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { BsGithub } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
import "./Contact.css"



export default function AboutUs() {







    return (
        <Box sx={{ flexGrow: 1 }} style={{}} >
            <Grid container >
                <Grid xs={10} lg={10} container style={{ display: "flex", justifyContent: "center", margin: "0 auto", boxShadow: "4px 4px 8px 9px #cbcbcb, -4px -4px 8px  #ffffff", height: "100%", marginTop: "60px" }}  >

                    <Grid xs={12} sm={12} md={12} lg={6} style={{ display: "flex", justifyContent: "center" }}  >
                        <div className='contactleft' >

                            <h1>Let’s discuss your Project</h1>
                            <p>There are many variations of passages of Lorem Ipsu available. but the majority have suffered alte.</p>
                            {
                                Contactdata.map((data, ind) => {
                                    return (
                                        <>
                                            <Grid sm={12} md={8}>
                                                <ContactCard key={ind} title={data.title} icon={data.icon} desc={data.desc} />
                                            </Grid>
                                        </>
                                    )
                                })

                            }

                            <div className='contacticons'>
                                <a href="https://www.facebook.com/fraz.aslam.501">  <FaFacebook /></a>
                                <a href="https://www.instagram.com/aslamfraz/">  <BsInstagram /></a>
                                <a href="https://www.linkedin.com/in/fraz-aslam-442b36172/">  <FaLinkedin /></a>
                                <a href="https://github.com/frazaslam99">  <BsGithub /></a>

                            </div>
                        </div>


                    </Grid>

                    <Grid xs={12} sm={12} md={12} lg={6}  style={{ display: "flex", justifyContent: "center" }}>
              

                          <ContactForm/>
                   
                    </Grid>

                </Grid >


            </Grid>
        </Box>
    );
}
