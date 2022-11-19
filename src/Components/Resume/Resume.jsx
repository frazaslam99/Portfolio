import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { FcGraduationCap } from "react-icons/fc"
import ResumeApi from './ResumeApi';
import Grid from '@mui/material/Unstable_Grid2';
import Card from "./Card"
import Slide from "./Slide"
import Slider from '@mui/material/Slider';
import "./Resume.css"
import { height } from '@mui/system';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, backgroundColor: "#F0F1F3", display: 'flex', display: "flex", justifyContent: "center" }}
    >
      <Grid container xs={12} sm={8} lg={8} >



        <Grid sm={12} md={12} lg={12} className="resumegrid" style={{ dispaly: "flex", justifyContenr: "center", margin: "0 auto", boxShadow: "4px 4px 8px 9px #cbcbcb, -4px -4px 8px  #ffffff", marginTop: "60px" }}>
          <Tabs
            style={{ dispaly: "flex", justifyContenr: "center" }}
            TabIndicatorProps={{sx:{backgroundColor:"orangered" ,height:2}}}
            variant="scrollable"
            value={value}
            onChange={handleChange}

            sx={{
      
              "& button": { borderRadius: 2 },
              "& button:hover": { backgroundColor: "#ff014f",color:'white' },
              "& button:active": {color:'white' },
              "& button.Mui-selected": {color:'white', backgroundColor: "#ff014f" },

            }}
          >
            <Tab label="Education"  {...a11yProps(0)}> </Tab>
            <Tab label="Experience" {...a11yProps(2)} />
            <Tab label="Programing Skills"  {...a11yProps(2)} />

          </Tabs>
        </Grid>

        <Grid sm={12} md={12} lg={12} >

          <TabPanel value={value} index={0}>

            {ResumeApi.map((val, id) => {
              if (val.category === "education") {
                return <Card key={id} title={val.title} year={val.year} rate={val.rate} desc={val.desc} />
              }
            })}

          </TabPanel>
          <TabPanel value={value} index={1}>
            {ResumeApi.map((val, id) => {
              if (val.category === "experience") {
                return <Card key={id} title={val.title} year={val.year} desc={val.desc} />
              }
            })}
          </TabPanel>

          <TabPanel value={value} index={2}>

            {ResumeApi.map((val, id) => {
              if (val.category === "programingskill") {
                return <Slide key={id} title={val.title} rangeskill={val.rangeskill} desc={val.desc} />
              }
            })}


          </TabPanel>

        </Grid>

      </Grid>
    </Box>
  );
}
