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
    score: 0,
    clickedCards: [],
    topScore: 0
  };
  checkClikedCards = text => {
    console.log(text);
    if (this.state.clickedCards.indexOf(text) === -1) {
      this.shuffle(text);
    } else {
      this.setState({
        score: 0,
        clickedCards: []
      });
    }
  };

  shuffle = text => {
    console.log("Shuffling Cards");
    let shuffledCards = [];
    let copiedCards = this.state.cards.slice();
    while (copiedCards.length > 0) {
      let randomIndex = Math.floor(Math.random() * copiedCards.length);
      let splicedCard = copiedCards.splice(randomIndex, 1)[0];
      shuffledCards.push(splicedCard);
    }
    let newTopScore = this.state.topScore;
    if (this.state.score + 1 > this.state.topScore) {
      newTopScore = newTopScore + 1;
    }
    this.setState({
      cards: shuffledCards,
      score: this.state.score + 1,
      clickedCards: [...this.state.clickedCards, text],
      topScore: newTopScore
    });

    console.log(this.state.score);
  };
  render() {
    return (
      <div>
        <Navbar score={this.state.score} topScore={this.state.topScore} />
        <Header />
        <Main onClick={this.checkClikedCards} cards={this.state.cards} />
      </div>
    );
  }
}

export default App;
