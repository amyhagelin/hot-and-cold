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
      guessesArray: [],
      currentGuess: 0
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
      <div className="board">
        <About />
        <NewGame 
          solutionHandler={ this.solutionHandler }
        />
        <div><h1>HOT or COLD</h1></div>
        <div className="game">
          <Message 
            currentGuess={ this.state.currentGuess }
            solution={ this.state.solution }
          />
          <MainForm 
            guessesArray={ this.state.guessesArray }
            onValueSubmitted={ this.currentGuessHandler }
          />
          <Guesses guessesArray={ this.state.guessesArray } />        
        </div>
      </div>
    );
  }
}

export default App;
