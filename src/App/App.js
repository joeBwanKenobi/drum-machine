import React, { Component } from 'react';
import './App.css';
import DrumMachine from "../DrumMachine/DrumMachine";

class App extends Component {
  render() {
    return (
      <div className="container">
        <DrumMachine />
        <p className="text-center"><b><a href="https://gitlab.jo3.io/joebwankenobi/javascript-drum-machine/tree/master" target="_blank"><i className="fa fa-gitlab"></i>&nbsp;View Source</a></b></p>
      </div>
    );
  }
}

export default App;
