import React from "react";
import "./style.css";

// function NavBar(props) {
//   return (
//     <div>
//       <div>
//         <h1>Nba Clicky Game</h1>
//       </div>

//       <div>Score: {props.Score} </div>
//       <div>TopScore: {props.TopScore} </div>
//     </div>
//   );
// }
function NavBar(props) {
  return (
    <div className = "parent">
      <nav className="navbar">
        <ul >
          <li> Nba Clicky Game</li>
          <li> Click an image to begin!</li>
          <li>
            Score: {props.Score}| TopScore: {props.TopScore}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
