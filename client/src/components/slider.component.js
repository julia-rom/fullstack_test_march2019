import React, { Component } from 'react';
import '../styles/slider.css';
import Slide from './slide.component'
import LeftArrow from './left_arrow.component'
import RightArrow from './right_arrow.component'

export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shark_images: [],
            cat_images: [],
            images: null,
            currentIndex: 0,
            translateValue: 0,
            loading: true
        }
    }

    componentDidMount() {
        // Retrieve data from server api
        // Set loading to false after data is receieved and state is updated
        fetch('/api/slider')
            .then(res => res.json())
            .then(images => this.setState({ images, loading: false }))
    }



    // calculates width of individual slide
    slideWidth = () => {
        return document.querySelector('.slide').clientWidth
    }

    // decrease the current index by 1 when you click left arrow
    prevSlide = () => {
        if (this.state.currentIndex !== 0) {
            this.setState(prevState => ({
                currentIndex: prevState.currentIndex - 1,
                translateValue: prevState.translateValue + this.slideWidth()
            }));
        }
        //do nothing if you're at the first image
        return;
    }

    // increment the current index by 1 when you click right arrow
    nextSlide = () => {
        // if we get to the end of the image array, reset image counter and 
        // translate value to zero
        if (this.state.currentIndex === this.state.images.shark.length - 1) {
            return this.setState({
                currentIndex: 0,
                translateValue: 0
            })
        }

        // only runs if we are not at the end of the image list
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue + -(this.slideWidth())
        }));
    }

    render() {
        if (this.state.loading) {
            return <h1>Loading...</h1>
        } else {
            return (
                <div className="slider">
                    <div className="slider-wrapper"
                        // translateX will allow other images to sit off the screen 
                        // and out of view
                        style={{
                            transform: `translateX(${this.state.translateValue}px)`,
                            transition: 'transform ease-out 0.3s'
                        }}>
                        {
                            this.state.images.shark.map((image, i) => (
                                <Slide key={i} image={image} />
                            ))
                        }
                    </div>
                    <LeftArrow
                        prevSlide={this.prevSlide}
                    />
                    <RightArrow
                        nextSlide={this.nextSlide}
                    />
                </div>
            );
        }
    }
}