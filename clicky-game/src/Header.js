import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="wrapper">
      <div className="header">
        <h1>Clicky Game!</h1>
        <h2>
          Click on an image to earn points, but don't click on any more than
          once!
        </h2>
      </div>
    </div>
  );
}

export default Header;
