import React from "react";
import "./style.css";


function NavBar(props) {
  return (
    <nav className="navbar sticky-top navbar-light">
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand" href="/">
            <img id="headerMonster" src="https://cdn.dribbble.com/users/149122/screenshots/2711052/icon.png" />
          </a>
        </div>
          <ul>
            <li className="navbar-text currentScore h4">
              Score: {props.count}
            </li>
            <li className="navbar-text topScore h4">
              Top Score:
            </li>
          </ul>
      </div>
    </nav>
  
  );
};

export default NavBar;