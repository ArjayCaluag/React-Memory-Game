import React from "react";
import "./style.css";

function NavBar(props) {
  return (
    <div>
      <div>
        <title> Nba Clicky Game</title>
      </div>

      <div>Score: {props.Score} </div>
      <div>TopScore: {props.TopScore} </div>
    </div>
  );
}
