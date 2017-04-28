import React from 'react';

export default function About(props) {
    const text  = 'ABOUT';
    return (
        <div className="about">
            <a onClick={ props.aboutHandler } ><h3>{text}</h3></a>
        </div>
    );
};