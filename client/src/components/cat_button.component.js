import React, { Component } from 'react';
import '../styles/buttons.css';

class CatButton extends Component {
    render() {
        if (this.props.catActive === true) {
            return (
                <button className="button_active" type="button" onClick={this.props.handleCatButtonClick}>
                    Cats
            </button>
            );
        } else {
            return (
                <button className="button_inactive" type="button" onClick={this.props.handleCatButtonClick}>
                    Cats
            </button>
            )
        }
    }
}
export default CatButton;
