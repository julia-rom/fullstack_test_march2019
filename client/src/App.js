import React, { Component } from 'react';
import './styles/App.css';
import Slider from "./components/slider.component"

class App extends Component {
  render() {
    return (
      <div className="container">
        <h2>Cat & Shark pics</h2>
        < Slider />
      </div>
    );
  }
}

export default App;
