import React, { Component } from 'react';
import './App.css';
import MainForm from '../components/Form';
import Message from '../components/Message';
import About from '../components/About';
import Guesses from '../components/Guesses';
import NewGame from '../components/NewGame';


// 2.) board / main container 
// 6.) root, check if winning number (send correct message), if not, calculate other message, add to guesses
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      solution: this.randomNum(),
      currentGuess: 0,
      guessesArray: []
    }
  }

  randomNum() {
    return (Math.floor(Math.random() * 100) + 1);
  }

  solutionHandler = () => {
    this.setState({ 
      solution: this.randomNum(),
      guessesArray: []
    })
  }

  currentGuessHandler = (value) => {
    this.setState((prevState) => ({ 
      currentGuess: value, 
      guessesArray: [ ...prevState.guessesArray, value ]
    }));
  }


  render() {
    return (  
      <div>
        <About />
        <NewGame 
          solutionHandler={ this.solutionHandler }
        />
        <Message 
          currentGuess={ this.state.currentGuess }
          solution={ this.state.solution }
        />
        <MainForm 
          guessesArray={ this.state.guessesArray }
          onValueSubmitted={ this.currentGuessHandler }
        />
        <Guesses guessesArray={ this.state.guessesArray } />        
        { this.state.solution }
      </div>
    );
  }
}

export default App;
