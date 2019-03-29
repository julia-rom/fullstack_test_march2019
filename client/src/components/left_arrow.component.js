import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/arrows.css';


const LeftArrow = (props) => {
    return (
        <div className="backArrow" onClick={props.prevSlide}>
            <FontAwesomeIcon icon="angle-left" size="3x" />
        </div>
    );
}

export default LeftArrow;