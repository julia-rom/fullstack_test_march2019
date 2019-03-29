import React from 'react'
import '../styles/slide.css';

// Serving up to slider as a functional component (will contain the actual image)
// Passing image down as a prop from slider component
const Slide = ({ image }) => {
    const styles = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    return <div className="slide" style={styles}></div>
}


export default Slide