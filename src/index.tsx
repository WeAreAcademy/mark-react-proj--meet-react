import React from "react";
import ReactDOM from "react-dom";

const adjective = "exciting";
const noun = "wood";
const verb = "chuck";

function App() {
  return (
    <div>
      <h1>Hello world from React!</h1>
      <p>Did I obliterate something?</p>
      <p>
        But I get to do <b>{adjective} things</b> when I use a React app!
      </p>
      <p>
        Like: how much {noun} could a {noun}
        {verb} {verb} if a {noun}
        {verb} could {verb} {noun}?
      </p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("arbitrarily-named-target"));
