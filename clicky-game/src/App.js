import React from "react";
import Navbar from "./Navbar.js";
import Header from "./Header.js";
import Main from "./Main.js";
import "./App.css";

class App extends React.Component {
  state = {
    cards: [
      "dog",
      "cat",
      "apple",
      "orange",
      "carrot",
      "Banana",
      "sleppycat",
      "dogSleepy"
    ],
    score: 0
  };
  shuffle = () => {
    console.log("Shuffling Cards");
    let shuffledCards = [];
    let copiedCards = this.state.cards.slice();
    while (copiedCards.length > 0) {
      let randomIndex = Math.floor(Math.random() * copiedCards.length);
      let splicedCard = copiedCards.splice(randomIndex, 1)[0];
      shuffledCards.push(splicedCard);
    }
    this.setState({
      cards: shuffledCards,
      score: this.state.score + 1
    });

    console.log(this.state.score);
  };
  render() {
    return (
      <div>
        <Navbar score={this.state.score} />
        <Header />
        <Main onClick={this.shuffle} cards={this.state.cards} />
      </div>
    );
  }
}

export default App;
