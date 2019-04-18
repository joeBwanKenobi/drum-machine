import React from 'react';

class Controls extends React.Component {
    constructor(props) {
        super(props)
      this.changeVolume = this.changeVolume.bind(this);
    }
  
    changeVolume(e) {
      this.props.changeVolume(e.target.value / 100);
    }

    render() {
        return (
            <section className="volume controls">
                <p><b>Volume</b></p>
                <input type="range" id="volSlider" min="0" max="100" onChange={this.changeVolume} value={this.props.volume * 100} />
            </section>
        );
    }
}

export default Controls;