import React, { Component } from 'react';
import './App.css';

// 2.) board / main container 
// 6.) root, check if winning number (send correct message), if not, calculate other message, add to guesses
class App extends Component {
  render() {
    return (  
      <div>
        3.) about
        4.) new game button - reset state

        1.) printing message
        5.) form component (input number and guess), submits to root, root calculates it, prints # guess by returning that information        
        7.) array of guesses
      </div>
    );
  }
}

export default App;
