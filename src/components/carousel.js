import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';


//credit: https://www.newline.co/@andreeamaco/react-carousel-building-the-component-from-scratch-vs-using-a-library--7da468d4

const Carousel = ({children}) => {
    const [current, setCurrent] = useState(0);
    const length = 3;
    
    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
          newIndex = length - 1;
        } else if (newIndex >= length) {
          newIndex = 0;
        }
        setCurrent(newIndex);
      };

    return (
        <div className="carousel">
            <FontAwesomeIcon 
                icon={faChevronLeft} 
                className="leftArrow"
                onClick={() => {
                    updateIndex(current - 1);
                }}
            />
            <FontAwesomeIcon 
                icon={faChevronRight} 
                className="rightArrow"
                onClick={() => {
                    updateIndex(current + 1);
                }}
            />
               
            <div className="inner" style={{transform: `translateX(-${current * 100}%)`}}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, {width: "100%"})
                })}
            </div>
        </div>
    )
}

export default Carousel