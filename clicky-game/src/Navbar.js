import React from "react";
import "./Navbar.css";

function Navbar(props) {
  return (
    <div className="navbar">
      <ul>
        <li className="brand">
          <a href="/">Clicky Game</a>
        </li>
        <li className="">Click an image to begin!</li>
        <li>
          Score: {props.score} | Top Score: {props.topScore}
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
