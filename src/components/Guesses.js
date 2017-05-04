import React from 'react';

export default function Guesses(props) {
    return (
        <div className="guesses">
            <h3>{props.guessesArray.join(" ")}</h3>
        </div>
    );
}
