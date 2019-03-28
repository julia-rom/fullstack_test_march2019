import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/arrows.css';


const LeftArrow = () => {
    return (
        <div className="backArrow">
            <h2>I am the left arrow</h2>
            <FontAwesomeIcon icon="angle-left" size="3x" />
        </div>
    );
}

export default LeftArrow;