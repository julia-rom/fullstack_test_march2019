import React, { Component } from 'react';
import '../styles/buttons.css';

class SharkButton extends Component {
    render() {
        return (
            <button className="button" type="button" onClick={this.props.handleSharkButtonClick}>
                Sharks
            </button>
        );
    }
}

export default SharkButton;