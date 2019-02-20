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

  render() {
    return (
      <container>
        <NavBar />
        <Header />
        <Wrapper>
              {
                this.state.monsters.map(monster=> (
                  <MonsterImage
                  image={monster.image}

                  />
                ))
              }
        </Wrapper>
        <Footer />
      </container>
      )
  };
};

export default App;

