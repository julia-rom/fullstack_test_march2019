import React, { Component } from 'react';
import CatButton from './cat_button.component';
import SharkButton from './shark_button.component';
import '../styles/buttons.css';

class Buttons extends Component {
    render() {
        return (
            <div className="buttons">
                < CatButton
                    handleCatButtonClick={this.props.handleCatButtonClick}
                    catActive={this.props.catActive}
                />
                < SharkButton
                    handleSharkButtonClick={this.props.handleSharkButtonClick}
                    sharkActive={this.props.sharkActive}
                />
            </div>
        );
    }
}

export default Buttons;