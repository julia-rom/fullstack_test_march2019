import React, { Component } from 'react';
import '../styles/slider.css';
import Slide from './slide.component';
import Arrows from './arrows.component';
import Buttons from './buttons.component';
import Loading from './loading.component';
import activeCheck from '../services/active_check'

export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: null,
            currentIndex: 0,
            translateValue: 0,
            loading: true,
            catButtonActive: false,
            sharkButtonActive: true,
        }
    }

    componentDidMount() {
        // Retrieve data from server api
        // Set loading to false after data is receieved and state is updated
        fetch('/api/slider')
            .then(res => res.json())
            .then(images => this.setState({ images, loading: false }))
    }


    // Calculate width of individual slide
    slideWidth = () => {
        return document.querySelector('.slide').clientWidth
    }

    // Decrease the current index by 1 when you click left arrow
    prevSlide = () => {
        if (this.state.currentIndex !== 0) {
            this.setState(prevState => ({
                currentIndex: prevState.currentIndex - 1,
                translateValue: prevState.translateValue + this.slideWidth()
            }));
        }
        // Do nothing if you're at the first image
        return;
    }

    // Increment the current index by 1 when you click right arrow
    // If we get to the end of the image array, reset image counter and translate value
    nextSlide = () => {
        if (this.state.currentIndex === this.state.images.shark.length - 1) {
            return this.setState({
                currentIndex: 0,
                translateValue: 0
            })
        }

        // Only runs if we are not at the end of the image list
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue + -(this.slideWidth())
        }));
    }

    render() {
        if (this.state.loading) {
            return <div className="slider">
                < Loading />
            </div>
        } else {
            return (
                <div className="slider">
                    < Buttons />
                    <div className="slider-wrapper"
                        // TranslateX will allow other images to sit off the screen 
                        // and out of view
                        style={{
                            transform: `translateX(${this.state.translateValue}px)`,
                            transition: 'transform ease-out 0.3s'
                        }}>
                        {
                            this.state.images.shark.map((image, i) => (
                                < Slide key={i} image={image} />
                            ))
                        }
                    </div>
                    < Arrows prevSlide={this.prevSlide} nextSlide={this.nextSlide} />
                </div>
            );
        }
    }
}