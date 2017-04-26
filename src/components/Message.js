import React from 'react';

export default function Message(props) {

	const messageHandler = function(solution, currentGuess) {
      let message 
      let difference = solution - currentGuess;
      if (difference < 0) {
        difference *= -1;
      }

      if (currentGuess === 0) {
        message = "Take a guess:";
      }
      else if (solution === currentGuess) {
        message = "Correct!";
      }
      else if (difference < 5) {
        message = "Hot!";
      }
      else if (difference < 10) {
        message = "Warm";
      }
      else {
        message = "Cold";
      }

      return message;
    }

    const text = messageHandler(props.solution, props.currentGuess);

    return (
        <div className="message">
            <h2>{text}</h2>
        </div>
    );
};