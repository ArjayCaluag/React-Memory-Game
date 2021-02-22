import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import SubNavBar from "./components/SubNavBar";
import TeamCard from "./components/TeamCard";
import React, {Component} from "react"
import teams from "./teams.json";
import Wrapper from "./components/Wrapper"

class App extends Component {
  state = {
    topScore: 0,
    score: 0,
    teams: teams,
    clickedTeams: [] ,
  };



  // imageClick method (Math.random randomzie images order , score increment method, push to clickedTeam array )
  // endGame method
  // .map() to render card
  // 5 different props per card



  render() {
    return (
      <div>
       
        <NavBar score = {this.state.score} />

        <Wrapper>
        {this.state.teams.map(teams => (
          <TeamCard
            id={teams.id}
            image={teams.image}
          />
        ))}
       </Wrapper>
      </div>
    );
  }
}
export default App;
