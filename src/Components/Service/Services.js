import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Servicedata from "./Servicesapi"
import ServiceCard from "./Servicecard"
import "./Service.css"



export default function Services() {
  return (
    <Box sx={{ flexGrow: 1 }} style={{ backgroundColor: "#F0F1F3" }}>
      <Grid  container style={{ marginTop: "60px", }}   >
        <Grid xs={10} container style={{ dispaly: "flex", justifyContenr: "center", margin: "0 auto", height: "100%", marginTop: "60px" }}>

          


          <Grid xs={10} md={7} lg={7} style={{ display: "flex", justifyContent: "center", margin: 0, padding: 0 }}>

            <div className='servicetext' >
              <h2>What I do?</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non,
                laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet,
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non.</p>
            </div>

          </Grid >
          <Grid xs={12} lg={12} container spacing={2} style={{ margin: "40px" }}>

            {Servicedata.map((val, index) => {

              return (
                <>
                  <Grid xs={12} sm={6} md={6} lg={4} style={{ display: "flex", justifyContent: "center" }}  >
                    <ServiceCard key={index} image={val.image} title={val.title} desc={val.desc} />

                  </Grid>
                </>
              )


            })
            }

          </Grid>
        </Grid>



      </Grid>
    </Box>
  );
}
