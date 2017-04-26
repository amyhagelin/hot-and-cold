import React from 'react';

export default function NewGame(props) {
    const text  = 'NEW GAME';
    return (
        <div className="new-game">
            <a onClick={props.solutionHandler} ><h3>{text}</h3></a>
        </div>
    );
};