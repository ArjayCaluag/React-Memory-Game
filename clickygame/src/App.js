import "./App.css";
import NavBar from "./components/NavBar";
import TeamCard from "./components/TeamCard";
import React, { Component } from "react";
import teams from "./teams.json";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/jumbotron"

// Initial Scores
let score = 0;
let topScore = 0;

class App extends Component {
  state = {
    topScore: 0,
    score: 0,
    teams: teams,
  };

  imageClick = (id) => {
    const teams = this.state.teams;
    // Creates an array with the teams that have been clicked.
    const clickedTeam = teams.filter((team) => team.id === id);

    // If a team is clicked again, reset score to 0
    if (clickedTeam[0].clicked) {
      score = 0;
      console.log(score);

      // teamCard is initially set to false
      for (let i = 0; i < teams.length; i++) {
        teams[i].clicked = false;
      }
      this.setState({ score });
      this.setState({ teams });

      // increment score by 1 everytime a new card is clicked
    } else if (score <= 12) {
      clickedTeam[0].clicked = true;
      score++;
      console.log(score);
    }
    // conditional statement to set each new top score
    if (score > topScore) {
      topScore = score;
      this.setState({ topScore });
    
    }
    // Randomize team cards every time one is clicked
    teams.sort(function (a, b) {
      return 0.5 - Math.random();
    });
    this.setState({teams});
    this.setState({score})
  };

  render() {
    return (
      <div>
        <NavBar score={this.state.score} topScore={this.state.topScore} />
        <Jumbotron/>

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
