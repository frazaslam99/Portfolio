import React, { useState, useEffect } from "react"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Testimonialapi from "./Testonimalapi";
import Testonimacard from "./Testonimalcard"


export default function Testonimal() {

 




  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid xs={11} md={9} container style={{ display: "flex", justifyContent: "center", margin: "0 auto", boxShadow: "4px 4px 8px 9px #cbcbcb, -4px -4px 8px  #ffffff", height: "100%", marginTop: "60px" }}>
        <Grid xs={12} md={12}  style={{ display: "flex", justifyContent: "center",margin:"0 auto",marginTop:"40px",marginBottom:"40px"}}>
          <Testonimacard slides={Testimonialapi}/>
        </Grid>
  
        </Grid>
        
      </Grid>
    </Box>
  );
}
