import React from "react"
import Slider from '@mui/material/Slider';

const SliderCard = (props) => {
    return (
        <>
            <div className='boxskill'>
                <div>
                    <h3>{props.title}</h3>
                    <Slider
                        aria-label="Always visible"
                        defaultValue={props.rangeskill}
                        valueLabelDisplay="on"
                       
                    />
                </div>
                <p>{props.desc}</p>

            </div>


        </>
    )
}

export default SliderCard
