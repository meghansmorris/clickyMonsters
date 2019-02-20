import React from "react";
import "./style.css";

function MonsterImages(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>

        </ul>
      </div>
    </div>
  );
}

export default MonsterImages;