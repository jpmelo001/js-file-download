// in media-resume-overlay.js
const template = document.createElement("template");

template.innerHTML = `
  <style>
  :host {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 500px;
    height: 300px;
  }

  button {
    font-family: monospace;
    padding: 0.5rem;
    cursor: pointer;
  }

  #restart-resume {
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }
  </style>

  <div id="restart-resume">
    <button type="button" id="restart">< Restart</button>
    <button type="button" id="resume">Resume ></button>
  </div>
`;
