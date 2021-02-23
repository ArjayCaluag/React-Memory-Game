import React from "react";
import "./style.css";

function NavBar(props) {
  return (
    <div className = "parent">
      <nav className="navbar">
        <ul >
          <li> Nba Clicky Game</li>
          <li> Click an image to begin!</li>
          <li>
            Score: {props.score}| TopScore: {props.topScore}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
