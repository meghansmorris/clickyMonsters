import React from "react";
import "./style.css";
//need to add calculation for scoring

function NavBar(props) {
  return (
    <div>
        <nav className="navbar sticky-top navbar-light">
            <a className="navbar-brand" href="/">
              <img id="headerMonster" src="https://cdn.dribbble.com/users/149122/screenshots/2711052/icon.png" />
            </a>
            <span className="navbar-text currentScore mb-0 h4">Score:  </span>
            <span className="navbar-text topScore mb-0 h4">Top Score:    </span>
        </nav>
    </div>
  );
};

export default NavBar;