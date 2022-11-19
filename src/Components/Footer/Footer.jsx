import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import {Outlet, Link } from "react-router-dom"
import "./Footer.css"


export default function FullWidthGrid() {
    return (
        <Box sx={{ flexGrow: 1 }} style={{backgroundColor: '#ff014f'}}>
            <Grid container style={{paddingTop:"150px" ,paddingBottom:"100px",marginTop:"15px"}}>
                <Grid xs={12} md={12} container style={{ display: "flex", justifyContent: "center", margin: "0 auto" }}>
                    <Grid xs={12} lg={2} style={{ display: "flex", justifyContent: "center", margin: "0 auto",alignItem:"center"}}>
                        <h3 className='logof'>Fraz</h3>
                    </Grid>
                    <Grid xs={12} lg={8}  style={{ display: "flex", justifyContent: "center", margin: "0 auto",alignItem:"center"}}>
                        <ul className='ullist'>
                            <Link to='/' className='home'>
                                <li>Home</li>
                            </Link>
                            <Link to='/about' className='about'>
                                <li>About</li>
                            </Link>
                            <Link to='/resume' className='Resume'>
                                <li>Resume</li>
                            </Link>
                            <Link to='/services' className='services'>
                                <li>Services</li>
                            </Link>
                          
                            <Link to='/contactus' className='feature'>
                                <li>Contact Us</li>
                            </Link>
                            <Link to='/portfolio' className='feature'>
                                <li>Portfolio</li>
                            </Link>
                        </ul>
                        <Outlet />
                    </Grid>
                    <Grid xs={12} lg={2}  style={{ display: "flex", justifyContent: "center", margin: "0 auto",alignItem:"center"}}>
                        <h4 className='copy'>Copyright © 2022 Fraz.</h4>
                    </Grid>



                </Grid>


            </Grid>
        </Box >
    );
}
