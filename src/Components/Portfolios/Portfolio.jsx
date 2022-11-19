import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Portfoliodata from "./Portfoliodata"
import PortfolioCard from "./Portfoliocard"



export default function Portfolio() {
    return (
        <Box sx={{ flexGrow: 1 }} style={{ backgroundColor: "#F0F1F3" }}>
            <Grid container style={{ marginTop: "60px", }}   >
                <Grid xs={10} container style={{ dispaly: "flex", justifyContenr: "center", margin: "0 auto", height: "100%", marginTop: "60px" }}>




                    <Grid xs={12} lg={12} container spacing={2} style={{ margin: "40px" ,postion:"relative"}}>

                        {Portfoliodata.map((value, index) => {

                            return (
                                <>
                                    <Grid xs={12} sm={6} md={6} lg={4} style={{ display: "flex", justifyContent: "center" }}>
                                        <PortfolioCard key={index} image={value.image} category={value.category} totalLike={value.totalLike} title={value.title} />

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
