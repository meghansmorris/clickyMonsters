import React from "react";


function NavBar(props) {
  return (
    <div>
        <nav className="navbar sticky-top navbar-light bg-light">
            <a className="navbar-brand" href="/">
            Click a Monster
            </a>
            <span className="navbar-text mb-0 h1">Score:  |</span>
            <span className="navbar-text mb-0 h1">Top Score: </span>


        </nav>
    </div>
  );
};

export default NavBar;