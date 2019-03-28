import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/arrows.css';

const RightArrow = () => {
    return (
        <div className="nextArrow">
            <h2>I am the right arrow</h2>
            <FontAwesomeIcon icon="angle-right" size="3x" />
        </div>
    );
}

export default RightArrow;