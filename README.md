# **React Clicky Game**

This project is a react based application that challenges the user to cycle through multiple NBA teams without clicking on the same team twice. Every new card that is clicked results in one point added to your score, and randomizes the order of card. If a card is clicked again, the score is reset to 0 and the user must try again.

<br><br>

![clickGame](https://user-images.githubusercontent.com/52800632/108802923-36124d00-754e-11eb-9598-597755b2b3e7.gif)



# **Installation**

Run this command to create your react based application.

```html

npx create-react-app <appname>

```

# **Built With**

<ul>
    <li> React - JS library for building interactive user inferfaces
    <li> Bootstrap - CSS framework
    <li> Javascript - scripting language that allows implementation of complex web features
    <li> HTML - The standard markup language for web pages 
    <li> CSS - used to describe the presentation of markup langauges such as HTML </li>
</ul>

# **Code Snippet**
Here is a partial snippit of my imageClick function that contains statements that alter the state of score, teams, and alertMsg when a specific condition is met.

```js
  imageClick = (id) => {
    const teams = this.state.teams;
    // Creates an array with the teams that have been clicked.
    const clickedTeam = teams.filter((team) => team.id === id);

    // If a team is clicked again, reset score to 0
    if (clickedTeam[0].clicked) {
      score = 0;
      console.log(score);
      alertMsg = "You lose! Try again."
      

      // teamCard is initially set to false
      for (let i = 0; i < teams.length; i++) {
        teams[i].clicked = false;
      }
      this.setState({ score });
      this.setState({ teams });
      this.setState({alertMsg})

```

```js
  render() {
    return (
      <div>
        <NavBar score={this.state.score} topScore={this.state.topScore} />
        <Jumbotron alertMsg = {this.state.alertMsg}/>
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

```
# **Deployed Link**

https://arjaycaluag.github.io/React-Memory-Game/
# **Authors**

Ron-Arjay Caluag<br>
[Linkedin](https://www.linkedin.com/in/ron-arjay-caluag-00b29b182/)<br>
[Github](https://github.com/ArjayCaluag)


The MIT License (MIT)

Copyright (c) 2011-2020 Twitter, Inc.

Copyright (c) 2011-2020 The Bootstrap Authors

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
