import React from "react";
import "./style.css";


function Header(props) {
  return (
    <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="display-4">Click a Monster!</h1>
            <p className="lead">To play, click a monster to earn points, but don't click on any monster more than once. Good luck!</p>
        </div>
    </div>
  );
};

export default Header;


