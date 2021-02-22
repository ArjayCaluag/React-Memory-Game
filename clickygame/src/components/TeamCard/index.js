import React from "react";
import "./style.css";

function TeamCard(props) {
  return (
      
    <div className="card col-md-3">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default TeamCard;
