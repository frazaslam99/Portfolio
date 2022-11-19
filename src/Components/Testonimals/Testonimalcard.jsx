import React, { useState } from 'react';
import Testonimaldata from './Testonimalapi';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import "./Testonimal.css"

const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    // if (!Array.isArray(slides) || slides.length <= 0) {
    //     return null;
    // }

    return (
        <section className='slider'>
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
            {Testonimaldata.map((slide, index) => {
                return (
                    <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                    >
                     
                        {index === current && (
                            <>
                            <div className='testonimalsection'>
                              
                                <p>{slide.desc}</p>
                             
                            <img className="imagetest" src={slide.image}  />
                            <h2>{slide.name}</h2>
                            <h5>{slide.offcer}</h5>
                            
                            <h6>{slide.date}</h6>
                            </div>
                            </>
                        )}
                    </div>
                );
            })}
        </section>
    );
};

export default ImageSlider;