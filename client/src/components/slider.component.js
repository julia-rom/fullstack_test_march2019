import React, { Component } from 'react';
import '../styles/slider.css';
import Slide from './slide.component'
import LeftArrow from './left_arrow.component'
import RightArrow from './right_arrow.component'

export default class Slider extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <div className="slider">
                <h2>I am the slider</h2>
                < Slide />
                <LeftArrow />
                <RightArrow />
            </div>
        );
    }
}