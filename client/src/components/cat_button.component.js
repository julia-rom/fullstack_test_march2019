import React, { Component } from 'react';
import '../styles/buttons.css';

class CatButton extends Component {
    render() {
        return (
            <div className="buttons">
                <button className="catButton" type="button">Cats</button>
            </div>
        );
    }
}

export default CatButton;