import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/arrows.css';

class RightArrow extends Component {
    render() {
        return (
            <div className="nextArrow" onClick={this.props.nextSlide}>
                <FontAwesomeIcon icon="angle-right" size="3x" />
            </div >
        );
    }
}

export default RightArrow;