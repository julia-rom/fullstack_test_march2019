import React, { Component } from 'react';
import LeftArrow from './left_arrow.component'
import RightArrow from './right_arrow.component'
import '../styles/arrows.css';

class Arrows extends Component {
    render() {
        return (
            <div className="arrows">
                < LeftArrow prevSlide={this.props.prevSlide} />
                < RightArrow nextSlide={this.props.nextSlide} />
            </div>
        );
    }
}

export default Arrows;