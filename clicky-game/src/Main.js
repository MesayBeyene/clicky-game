import React from "react";
import "./Main.css";

const Main = props => {
  // class Main extends React.Component {
  //     constructor(props){
  //         super(props)
  //     }
  //   state = {
  //     cards: [
  //       "dog",
  //       "cat",
  //       "apple",
  //       "orange",
  //       "carrot",
  //       "Banana",
  //       "sleppycat",
  //       "dogSleepy"
  //     ]
  //   };

  //   singleClick() {
  //     console.log("single click");
  //   }

  //   doubleClick() {
  //     console.log("double click");
  //   }

  // let clickCount = 0;

  // clk_ch.addEventListener('click', function() {
  //     alert();
  //     clickCount++;
  //     if (clickCount === 1) {
  //         singleClickTimer = setTimeout(function() {
  //             clickCount = 0;
  //             singleClick();
  //         }, 400);
  //     } else if (clickCount === 2) {
  //         clearTimeout(singleClickTimer);
  //         clickCount = 0;
  //         doubleClick();
  //     }
  // }, false);
  console.log(props);

  let listItems = props.cards.map((element, index) => {
    return (
      <div onClick={props.onClick} key={index} className="click-item">
        {element}
      </div>
    );
  });
  return <div className="container">{listItems}</div>;
};

export default Main;

// function singleClick() {
//     alert("single click");
// }

// function doubleClick() {
//     alert("double click");
// }

// var clickCount = 0;

// clk_ch.addEventListener('click', function() {
//     alert();
//     clickCount++;
//     if (clickCount === 1) {
//         singleClickTimer = setTimeout(function() {
//             clickCount = 0;
//             singleClick();
//         }, 400);
//     } else if (clickCount === 2) {
//         clearTimeout(singleClickTimer);
//         clickCount = 0;
//         doubleClick();
//     }
// }, false);

// let count = 0;

// $(document).ready(function(){
//     $("img").click(function(){
//      alert("it works!");
//     });
//    });

// $("#target").dblclick(function() {
//   alert("Handler for .dblclick() called.");
// });
