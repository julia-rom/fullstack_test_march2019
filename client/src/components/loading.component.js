import React, { Component } from 'react';
import loading from '../media/spin_loader.gif';

class Loading extends Component {
    render() {
        // if (!this.props.visible) {
        //     return null;
        // }
        return (
            <div id="loading">
                <img src={loading} alt="loading" height="100" width="100" />
            </div>
        );
    }
}

export default Loading;
