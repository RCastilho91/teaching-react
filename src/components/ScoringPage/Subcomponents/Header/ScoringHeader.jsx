import React from 'react';

export default function ScoringHeader(props){
    return(
        <div className={"scoring-header"}>
            <h1>Placar Eletrônico</h1>
            <h2>Total atual: {props.currentScore}</h2>
        </div>
    )
}