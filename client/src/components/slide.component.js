import React from 'react'
import '../styles/slide.css';

//serving up to slider as a functional component (will contain the actual image)
//passing image down as a prop from slider component
const Slide = ({ image }) => {
    const styles = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 60%'
    }

    return <div className="slide" style={styles}></div>
}

export default Slide