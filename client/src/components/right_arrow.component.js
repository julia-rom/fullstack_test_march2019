import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/arrows.css';

const RightArrow = (props) => {
    return (
        <div className="nextArrow" onClick={props.nextSlide}>
            <FontAwesomeIcon icon="angle-right" size="3x" />
        </div >

    );
}

export default RightArrow;