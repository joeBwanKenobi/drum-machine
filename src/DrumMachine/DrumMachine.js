import React from 'react';
import DrumPad from '../DrumPad/DrumPad';
import Controls from '../Controls/Controls';
import * as Constants from '../Constants/Constants';

class DrumMachine extends React.Component {
    constructor(props) {
        super(props)
      this.state = {
        display: 'DrumMachine 1000',
        volume: '.8'
      }
      
      this.updateDisplay = this.updateDisplay.bind(this);
      this.changeVolume = this.changeVolume.bind(this);
    }
  
    updateDisplay(clipId) {
      console.log('Updating display: ' + clipId);
      this.setState({
        display: clipId
      });
    }
  
  changeVolume(vol) {
    console.log("Setting volume: " + vol);
    this.setState({
      volume: vol
    });
  }
    
    render() {
        const pads = Constants.padList.map(p => <DrumPad 
                                        keyFace={p.keyFace} 
                                        src={p.src} 
                                        clipId={p.clipId}
                                        updateDisplay={this.updateDisplay}
                                        volume={this.state.volume} /> );
        return (
            <div className="row">
                <div className="col">
                    <div className="row align-items-center">
                        <div className="col-sm-12">
                            <section id="display"><b>Current Sample: <br /> {this.state.display}</b></section>
                            <Controls changeVolume={this.changeVolume} volume={this.state.volume} />
                        </div>
                        {pads}
                    </div>
                </div>
            </div>
        );
    }
}

export default DrumMachine;