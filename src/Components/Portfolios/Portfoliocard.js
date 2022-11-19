import React, { useState } from "react"

import { GrFormClose } from 'react-icons/gr';



import "./Portfolio.css"
const Card = (props) => {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  if (modal) {
    document.body.classList.add("active-modal")
  } else {
    document.body.classList.remove("active-modal")
  }
  return (
    <>
      <div className='portfoliocard'>
        <div className='img-section'>
          <img src={props.image} width="100%" height="200px" alt='' onClick={toggleModal} />
        </div>
        <div className='categorytext'>
          <span onClick={toggleModal}>{props.category}</span>
        </div>
        <div className='title'>
          <h2 onClick={toggleModal}>{props.title}</h2>
          
        </div>
      </div>

      {/* Popup box */}
      {modal && (
        <div className='modal'>
          <div onClick={toggleModal} className='overlay'></div>
          <div className="modal-content">

          <div className='img-section-div'>   
              <img width="100%" height="90%" src={props.image} alt='' />  
              </div>
            <div className='text-section'>
              <span>Featured - Design</span>
              <h1>{props.title}</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio assumenda explicabo veniam temporibus eligendi.</p>
              <p>Consectetur adipisicing elit. Cupiditate distinctio assumenda. dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!</p>
      
              
                <button className='code-btn'>
                    <a href=""> View Code</a>
                 
                </button>
           
              <button className='close-btn' onClick={toggleModal}>
              <GrFormClose/>
              </button>
            </div>
          </div>
        </div>
      
      )}
    </>
  )
}

export default Card
