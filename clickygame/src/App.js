import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import SubNavBar from "./components/SubNavBar";
import TeamCard from "./components/TeamCard";
import React, { Component } from "react";
import teams from "./teams.json";
import Wrapper from "./components/Wrapper";

let score = 0;
let topScore = 0;

class App extends Component {
  state = {
    topScore: 0,
    score: 0,
    teams: teams,
  };

  // imageClick method (Math.random randomzie images order , score increment method, push to clickedTeam array )
  // endGame method
  // .map() to render card
  // 5 different props per card

  imageClick = (id) => {

    const teams = this.state.teams;
    // Creates an array with the teams that have been clicked.
    const clickedTeam = teams.filter((team) => team.id === id);

    // If a team is clicked again, reset score to 0
    if (clickedTeam[0].clicked) {
      score = 0;
      console.log(score)
      
      // teamCard is initially set to false
      for (let i = 0; i < teams.length; i++) {
        teams[i].clicked = false;
      }
      this.setState({ score });
      this.setState({ teams });
    
      // increment score by 1 everytime a new card is clicked
    }  else if (score <= 12) {
      clickedTeam[0].clicked = true;
      score++;
      console.log(score)
    }}

    
  render() {
    return (
      <div>
        <NavBar score={this.state.score} 
                topScore={this.state.topScore}/>

        <Wrapper>
          {this.state.teams.map((teams) => (
            <TeamCard
              imageClick={this.imageClick}
              id={teams.id}
              key={teams.id}
              image={teams.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}
export default App;
