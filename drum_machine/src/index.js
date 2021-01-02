import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const playable_buttons = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

document.addEventListener("keydown", function (e) {
  playable_buttons.map((i) => {
    const { keyCode, keyTrigger, id, ulr } = i;
    if (e.keyCode == keyCode) {
      function playSound() {
        const sound = document.getElementById(keyTrigger);
        document.getElementById("keyText").innerHTML = id;
        sound.play();
      }
      playSound();
    }
  });
});

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="display">
        <h1>FCC Drum Machine Project</h1>
        {playable_buttons.map((audio_pad) => {
          const { keyCode, keyTrigger, id, url } = audio_pad;
          return <AudioPad id={id} keyTrigger={keyTrigger} url={url} />;
        })}
        <p id="keyText"></p>
      </div>
    );
  }
}

const AudioPad = (props) => {
  const { keyCode, keyTrigger, id, url } = props;
  function playSound() {
    const sound = document.getElementById(keyTrigger);
    document.getElementById("keyText").innerHTML = id;
    sound.play();
  }
  return (
    <div className="btn-grid">
      <button id={id} className="drum-pad" onClick={playSound} src={url}>
        {keyTrigger}
        <audio src={url} className="clip" id={keyTrigger}></audio>
      </button>
    </div>
  );
};

ReactDOM.render(<DrumMachine />, document.getElementById("drum-machine"));
