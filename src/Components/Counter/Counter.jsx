import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CountUp from 'react-countup';
import "./Counter.css"

export default function Counter() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container style={{ background: '#ff014f', marginTop: '80px', height: "300px" }} >
        <Grid item xs={12} lg={4} style={{ display: "flex", justifyContent: "center", margin: "0 auto", alignItem: "center" }}>
          <div className='CounterItem'>
            <CountUp end={2} duration={4} className="count" />
            <h3>Experience</h3>

          </div>

        </Grid>

        <Grid item xs={12} lg={4} style={{ display: "flex", justifyContent: "center", margin: "0 auto", alignItem: "center" }}>
          <div className='CounterItem'>
            <CountUp end={10} duration={3} className="count" />
            <h3>Total Project</h3>

          </div>
        </Grid>

        <Grid item xs={12} lg={4} style={{ display: "flex", justifyContent: "center", margin: "0 auto", alignItem: "center" }}>
          <div className='CounterItem'>
            <CountUp end={50}  duration={2.3} className="count" />
            <h3>Happy Clients</h3>

          </div>
        </Grid>

      </Grid >
    </Box >
  );
}
