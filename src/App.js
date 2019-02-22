import React from "react";
import MonsterImage from "./components/MonsterImages/MonsterImages";
import Wrapper from "./components/Wrapper/Wrapper";
import monsters from "./monsters.json";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
 
    // when the monster is clicked, check that it hasn't already been clicked
    //if it has been clicked, game over, update top score and automatic restart of the game
    //if it hasn't been clicked, add its value to the total and shuffle the monsters

class App extends React.Component {
  state = {
    monsters: monsters,
    clickedMonsters: [],
    topScore: 0,
    score: 0,
    message: "Click a monster to begin",
    unselectedMonsters: monsters
  };

  componentDidMount() {
    
  }

  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  handleIncrement = (id) => {
    console.log("inside handleincrement")
    console.log(id);

    if(this.state.clickedMonsters.includes(id)) {
      this.setState({
        message: "Click a monster to begin",
        topScore: (this.state.score > this.state.topScore) ? this.state.score : this.state.topScore,
        score: 0,
        monsters: monsters,
        unselectedMonsters: monsters,
        clickedMonsters: []
      })
    } else {
      console.log("add point")
      //doesn't mutate original array and allows you to add on to the array
      this.setState({ clickedMonsters: [...this.state.clickedMonsters, id] });
      this.setState({ 
        message: "Yay!",
        score: this.state.score + 1,
        monsters: monsters,
        unselectedMonsters: monsters 
      });
      console.log(this.state.clickedMonsters);
      console.log(this.state.score);
    };
    this.shuffleArray(monsters);
  }

  render() {
    return (
      <div>
        <NavBar message={this.state.message} score={this.state.score} topScore={this.state.topScore}/>
        <Header />
          {/* <div class="alert alert-info alert-dismissible" display="block">
            <a class="close" data-dismiss="alert" aria-label="close">&times;</a>
            <strong>Game over!</strong> Try again?
          </div> */}
        <Wrapper>
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

