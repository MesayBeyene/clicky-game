import React from "react";
import "./Main.css";

const Main = props => {
  console.log(props);

  let listItems = props.cards.map((element, index) => {
    return (
      <div
        onClick={() => props.onClick(element)}
        key={index}
        className="click-item"
      >
        {element}
      </div>
    );
  });
  return <div className="container">{listItems}</div>;
};

export default Main;
