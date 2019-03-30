import React, { Component } from 'react';
import '../styles/buttons.css';

class SharkButton extends Component {
    render() {
        if (this.props.sharkActive === true) {
            return (
                <button className="button_active" type="button" onClick={this.props.handleSharkButtonClick}>
                    Sharks
            </button>
            );
        } else {
            return (
                <button className="button_inactive" type="button" onClick={this.props.handleSharkButtonClick}>
                    Sharks
            </button>
            )
        }
    }
}

export default SharkButton;