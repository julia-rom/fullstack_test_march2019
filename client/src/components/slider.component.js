import React, { Component } from 'react';
import '../styles/slider.css';
import Slide from './slide.component'
import LeftArrow from './left_arrow.component'
import RightArrow from './right_arrow.component'

export default class Slider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shark_images: [
                'https://founded.media/hiring/photos/sharks/11261840124_dc9ac72bbe_b.jpg',
                'https://founded.media/hiring/photos/sharks/513197047_2f861d56cb_b.jpg',
                'https://founded.media/hiring/photos/sharks/2989909952_b59500107e_o.jpg',
                'https://founded.media/hiring/photos/sharks/4107884442_3baf8985f2_b.jpg',
                'https://founded.media/hiring/photos/sharks/3822452418_ffa66da89d_o.jpg',
                'https://founded.media/hiring/photos/sharks/3800013954_20fea3a9c9_b.jpg',
                'https://founded.media/hiring/photos/sharks/7109693941_250fc6b246_k.jpg',
                'https://founded.media/hiring/photos/sharks/8592704407_75c3c7ff53_h.jpg',
                'https://founded.media/hiring/photos/sharks/14730744390_cebc28aa86_k.jpg',
                'https://founded.media/hiring/photos/sharks/4936728723_91da549b05_b.jpg',
            ],
            cat_images: [
                'https://founded.media/hiring/photos/cats/14157413946_fea785b4d6_k.jpg',
                'https://founded.media/hiring/photos/cats/16175483119_bd7374d8a8_h.jpg',
                'https://founded.media/hiring/photos/cats/13901304865_a444cf4d34_k.jpg',
                'https://founded.media/hiring/photos/cats/8311701653_49ed80202c_k.jpg',
                'https://founded.media/hiring/photos/cats/13336301695_3c06dd41cc_k.jpg',
                'https://founded.media/hiring/photos/cats/38679744435_66279af67c_k.jpg',
                'https://founded.media/hiring/photos/cats/6393395037_9cda69da1a_b.jpg',
                'https://founded.media/hiring/photos/cats/6977309082_44102ddf51_b.jpg',
                'https://founded.media/hiring/photos/cats/11477923503_bbdf86387d_b.jpg',
                'https://founded.media/hiring/photos/cats/4481336172_7f464f180d_b.jpg'
            ],
            currentIndex: 0,
            translateValue: 0
        }
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
        } else {
            //do nothing if you're at the first image
            return;
        }
    }

    // increment the current index by 1 when you click right arrow
    nextSlide = () => {
        // if we get to the end of the image array, reset image counter and 
        // translate value to zero
        if (this.state.currentIndex === this.state.shark_images.length - 1) {
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
        return (
            <div className="slider">
                <div className="slider-wrapper"
                    // translateX will allow other images to sit off the screen 
                    // and out of view
                    style={{
                        transform: `translateX(${this.state.translateValue}px)`,
                        transition: 'transform ease-out 0.45s'
                    }}>
                    {
                        this.state.shark_images.map((image, i) => (
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