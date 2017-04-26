import React from 'react';

export default function NewGame(props) {
    const text  = 'New Game';
    return (
        <div>
            <a onClick={props.solutionHandler} >{text}</a>
        </div>
    );
};