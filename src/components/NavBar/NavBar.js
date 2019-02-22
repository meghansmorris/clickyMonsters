import React from "react";
import "./style.css";


function NavBar(props) {
  return (
    <nav className="navbar sticky-top navbar-light">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="/">
            <img id="headerMonster" src="https://cdn.dribbble.com/users/149122/screenshots/2711052/icon.png" />
          </a>
        </div>
          <ul className="nav list-inline h4">
            <li id="message" className={props.message.indexOf('incorrectly') !== -1 ?
                "desc-incorrect" : props.message.indexOf('correctly') !== -1 ?
                "desc-correct" : "desc-normal"} >
              {props.message}
            </li>
            <li className="scores">
              {`Score: ${props.score}  |  Top Score: ${props.topScore}`}
            </li>
          </ul>
      </div>
    </nav>
  
  );
};

export default NavBar;