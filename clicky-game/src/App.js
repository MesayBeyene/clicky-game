import React from "react";
import Navbar from "./Navbar.js";
import Header from "./Header.js";
import Main from "./Main.js";
import "./App.css";
import ImgOne from "../src/image/imgOne.jpg";
import ImgTwo from "../src/image/imgTwo.jpg";
import ImgThree from "../src/image/imgThree.jpg";
import ImgFour from "../src/image/imgFour.jpg";
import ImgFive from "../src/image/imgFive.jpg";
import ImgSix from "../src/image/imgSix.jpg";
import ImgSeven from "../src/image/imgSeven.jpg";
import ImgEight from "../src/image/imgEight.jpg";
import ImgNine from "../src/image/imgNine.jpg";
import ImgTen from "../src/image/imgTen.jpg";
import ImgEleven from "../src/image/imgEleven.jpg";
import ImgTwelve from "../src/image/imgTwelve.jpg";
import ImgThirteen from "../src/image/imgThirteen.jpg";
import ImgFourteen from "../src/image/imgFourteen.jpg";
import ImgFifteen from "../src/image/imgFifteen.jpg";
import ImgSixteen from "../src/image/imgSixteen.jpg";

class App extends React.Component {
  state = {
    cards: [
      <img alt="imgone" src={ImgOne} />,
      <img alt="imgtwo" src={ImgTwo} />,
      <img alt="imgthree" src={ImgThree} />,
      <img alt="imgfour" src={ImgFour} />,
      <img alt="imgfive" src={ImgFive} />,
      <img alt="imgsix" src={ImgSix} />,
      <img alt="imgseven" src={ImgSeven} />,
      <img alt="imgeight" src={ImgEight} />,
      <img alt="imgnine" src={ImgNine} />,
      <img alt="imgten" src={ImgTen} />,
      <img alt="imgeleven" src={ImgEleven} />,
      <img alt="imgtwelve" src={ImgTwelve} />,
      <img alt="imgthirteen" src={ImgThirteen} />,
      <img alt="imgfourteen" src={ImgFourteen} />,
      <img alt="imgfifeteen" src={ImgFifteen} />,
      <img alt="imgsixisteen" src={ImgSixteen} />
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
