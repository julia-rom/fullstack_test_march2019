import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/arrows.css';

class LeftArrow extends Component {
    render() {
        return (
            <div className="backArrow" onClick={this.props.prevSlide}>
                <FontAwesomeIcon icon="angle-left" size="3x" />
            </div>
        );
    }
}

export default LeftArrow;