import React, { Component } from 'react';
import './App.css';
import DrumMachine from "../DrumMachine/DrumMachine";

class App extends Component {
  render() {
    return (
      <div className="container" id="drum-machine">
        <DrumMachine />
      </div>
    );
  }
}

export default App;
