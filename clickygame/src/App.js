import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import SubNavBar from "./components/SubNavBar";
import TeamCard from "./components/TeamCard";
import React, {Component} from "react"
import teams from "./teams.json";

class App extends Component {
  state = {
    topScore: 0,
    score: 0,
    teams,
    clickedTeams: [] ,
  };



  // imageClick method (Math.random randomzie images order , score increment method, push to clickedTeam array )
  // endGame method
  // .map() to render card
  // 5 different props per card



  render() {
    return (
      <div>
        <Wrapper></Wrapper>
        <NavBar score = {this.state.score} />
        <SubNavBar></SubNavBar>
        <TeamCard></TeamCard>
        <Footer></Footer>
      </div>
    );
  }
}
export default App;
