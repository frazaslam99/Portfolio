import React from 'react'


export default function Card(props) {
    return (<>

        <div className='carditem'>


            <img src={props.icon} alt="" srcset="" />

            <div className='cardtext'>

                <h4>{props.title}</h4>
                <p>{props.desc}</p>
            </div>
        </div>

  
    </>
    )
}
