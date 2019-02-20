import React from "react";
import "./style.css";

function MonsterImages(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img aria-label="clickItem" className="clickItem" alt={props.id} src={props.image} />
        {/* <span id="shuffle" onClick={ ()=> props.addValue(props.value)}></span> */}
      </div>
    </div>
  )
};

export default MonsterImages;