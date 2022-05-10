import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

//credit: https://medium.com/tinyso/how-to-create-the-responsive-and-swipeable-carousel-slider-component-in-react-99f433364aa0

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
            <div className="left-wrapper">
                <FontAwesomeIcon 
                    icon={faChevronLeft} 
                    className="leftArrow"
                    type="button" 
                    onClick={() => {updateIndex(current - 1);}}
                />
            </div>
            
            <div className="right-wrapper">
                <FontAwesomeIcon 
                    className="rightArrow"
                    icon={faChevronRight}
                    type="button" 
                    onClick={() => {updateIndex(current + 1);}}
                />
            </div>
            
            <div className="inner" style={{transform: `translateX(-${current * 100}%)`}}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, {width: "100%"})
                })}
            </div>
        </div>
    )
}

export default Carousel