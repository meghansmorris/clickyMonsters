import React from "react";
import MonsterImage from "./components/MonsterImages";
import Wrapper from "./components/Wrapper";
import monsters from "./monsters.json";
import "./App.css";

class App extends React.Component {
  state = {
    monsters
  };

  render() {
  return (
 
    <Wrapper>
    <h1 className="title">Monster List</h1>
    {
      this.state.monsters.map(friend=> (
        <MonsterImage
     
      />
      ))
    }
  </Wrapper>
   );
  };
};

export default App;

