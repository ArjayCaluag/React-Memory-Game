import React from "react";
import "./style.css";

function Jumbotron(props) {
  return (
    <div className="jumbotron">
      <br></br>
      <br></br>
      <h1 class="display-3">NBA Clicky game!</h1>
      <h2 class="lead">
        Test your memory and see how many cards you can click without clicking
        the same twice!
      </h2>

      <h3>{props.alertMsg}</h3>
    </div>
  );
}

export default Jumbotron;
