import React from "react";
import "./style.css";


function MonsterImages(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img aria-label="clickItem" className="clickItem" onClick={()=>props.score(props.id)} alt="monster" src={props.image} />
      </div>
    </div>
  )
};

export default MonsterImages;