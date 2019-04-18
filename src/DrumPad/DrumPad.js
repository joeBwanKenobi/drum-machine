import React from 'react';

class DrumPad extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this);
        this.keyPress = this.keyPress.bind(this);
    }
    
    componentDidMount() {
        document.addEventListener("keypress", this.keyPress);
    }
    componentWillUnmount() {
        document.removeEventListener("keypress", this.keyPress);
    }

    handleClick(e) {
      console.log(e.target.children[0]);
      let currentClip = e.target.children[0];
      currentClip.currentTime = 0;
      console.log(this.props.volume);
      currentClip.volume = this.props.volume;
      currentClip.play();
      console.log(e.target.id);
      this.updateDisplay(e.target.id);
    }

    keyPress(e) {
      console.log(String.fromCharCode(e.keyCode).toUpperCase());
      let currentClip = document.getElementById(String.fromCharCode(e.keyCode).toUpperCase());
      currentClip.currentTime = 0;
      // currentClip.volume = this.state.volume;
      currentClip.play();
      console.log(currentClip.parentElement.id);
      this.updateDisplay(currentClip.parentElement.id);
    }
  
    updateDisplay(clipId) {
      this.props.updateDisplay(clipId);
    }
  

    render() {
        return (
            <div className="col-sm-4" id="kick12" >
                <button className="drum-pad" id={this.props.clipId} onClick={this.handleClick}>
                {this.props.keyFace}
                <audio id={this.props.keyFace} class="clip border border-dark rounded" src={this.props.src} type="audio/wav">
                    Your browser does not support HTML5 Audio
                </audio>
                </button>
            </div>
        );
    }
}

export default DrumPad;