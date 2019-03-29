import React, { Component } from 'react';
import '../styles/buttons.css';

class SharkButton extends Component {
    render() {
        return (
            <div className="buttons">
                <button className="sharkButton" type="button">Sharks</button>
            </div>
        );
    }
}

export default SharkButton;