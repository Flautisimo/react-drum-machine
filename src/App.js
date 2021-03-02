import React from 'react';
import './App.css';

// Project developed by Eduardo González

const data = [
  {
    id: "Chord-1",
    letter: "Q",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
  },
  {
    id: "Chord-2",
    letter: "W",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
  },
  {
    id: "Chord-3",
    letter: "E",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
  },
  {
    id: "Clap",
    letter: "A",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    id: "Open-HH",
    letter: "S",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    id: "Kick-and-Hat",
    letter: "D",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    id: "Punchy-Kick",
    letter: "Z",
    src: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
  },
  {
    id: "Side-Stick",
    letter: "X",
    src: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
  },
  {
    id: "Snare",
    letter: "C",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
  }
];

class DrumPad extends React.Component {
  componentDidMount() {
    console.log(this.audio)
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillMount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.keyCode === this.props.letter.charCodeAt()) {
      this.audio.play();
      this.audio.currentTime = 0;
      this.props.handleDisplay(this.props.id);
    }
  };

  handleClick = () => {
    this.audio.play();
    this.audio.currentTime = 0;
    this.props.handleDisplay(this.props.id);
  };

  render() {
    return (
      <div className="drum-pad" id={this.props.id} onClick={this.handleClick}>
        <h1>{this.props.letter}</h1>
        <audio
          ref={(ref) => (this.audio = ref)}
          className="clip"
          id={this.props.letter}
          src={this.props.src}
        ></audio>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "Click or press the corresponding key"
    };
  }

  handleDisplay = (display) => this.setState({ display });

  render() {
    return (
      <div>
      <div className="inner-container" id="drum-machine">
        <div id="display">{this.state.display}</div>
        <div id="drum-pads">
          {data.map((d) => (
            <DrumPad
              id={d.id}
              letter={d.letter}
              src={d.src}
              handleDisplay={this.handleDisplay}
            />
          ))}
        </div>
      </div>
      <div className="author">
          {" "}
          Made by{" "}
          <a rel="noreferrer" href="https://github.com/Flautisimo" target="_blank">
            Flautisimo
          </a>
      </div>
      </div>
    );
  }
}

export default App;
