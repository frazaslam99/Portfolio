import React from "react"
import "./Resume.css"

const Card = (props) => {
  return (
    <>
      <div className='boxcard'>

        <h2>{props.title}</h2>
        <span>{props.year}</span>
      
      <div className='rate'>
        <button className='btn_rate '>{props.rate}</button>
        <p>{props.desc}</p>
        <hr />
      </div>
      </div>
    </>
  )
}

export default Card
