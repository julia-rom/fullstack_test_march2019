import React, { Component } from 'react';
import '../styles/buttons.css';

class CatButton extends Component {
    render() {
        return (
            <button className="button" type="button" onClick={this.props.handleCatButtonClick}>
                Cats
            </button>
        );
    }
}

export default CatButton;