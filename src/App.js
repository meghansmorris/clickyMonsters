import React from "react";
import MonsterImage from "./components/MonsterImages/MonsterImages";
import Wrapper from "./components/Wrapper/Wrapper";
import monsters from "./monsters.json";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Counter from "./components/Counter";
 
    // when the monster is clicked, check that it hasn't already been clicked
    //if it has been clicked, game over, update top score and automatic restart of the game
    //if it hasn't been clicked, add its value to the total and shuffle the monsters

class App extends React.Component {
  state = {
    monsters,
    clickedMonsters: [],
    topScore: 0,
    score: 0,
  };

  handleIncrement = (id) => {
    console.log("inside handleincrement")
    console.log(id);
    if(this.state.clickedMonsters.includes(id)) {
      console.log("game over")
    } else {
      console.log("add point")
      this.setState({ clickedMonsters: [...this.state.clickedMonsters, id] });
      this.setState({ score: this.state.score + 1 });
      console.log(this.state.clickedMonsters);
      console.log(this.state.score);
      //shuffle
    };
    
}

  shufflePics = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i+1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  render() {
    return (
      <div className="container">
        <NavBar />
        <Header />
        <Wrapper>
          <h1>{this.state.score}</h1>
          <br />
              {
                this.state.monsters.map(monster=> (
                  <MonsterImage
                  image={monster.image}
                  id={monster.id}
                  key={monster.id}
                  value={monster.value}
                  score={this.handleIncrement}
                  
                  />
                ))
              }
        </Wrapper>
        <Footer />
      </div>
      )
  };
};

export default App;

