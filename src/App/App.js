import React, { Component } from 'react';
import './App.css';
import DrumMachine from "../DrumMachine/DrumMachine";

class App extends Component {
  render() {
    return (
      <div className="container">
        <DrumMachine />
        <p className="text-center"><b><a href="https://github.com/joeBwanKenobi/drum-machine.git" target="_blank"><i className="fa fa-github"></i>&nbsp;View Source</a></b></p>
      </div>
    );
  }
}

export default App;
