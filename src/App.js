import React from "react";
import MonsterImage from "./components/MonsterImages";
import Wrapper from "./components/Wrapper";
import monsters from "./monsters.json";
import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Footer from "./components/Footer";



class App extends React.Component {
  state = {
    monsters
  };

  addValue = value => {
    // when the monster is clicked, check that it hasn't already been clicked
    //if it has been clicked, game over and update top score
    //if it hasn't been clicked, add its value to the total and shuffle the monsters

  }

  render() {
    return (
      <div className="container">
        <NavBar />
        <Header />
        <Wrapper>
              {
                this.state.monsters.map(monster=> (
                  <MonsterImage
                  image={monster.image}
                  key={monster.id}
                  value={monster.value}
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

