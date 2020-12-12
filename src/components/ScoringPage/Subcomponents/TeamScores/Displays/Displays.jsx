import React from 'react';

export default function Displays(props){
    return(
        <div className={'display'} key={props.teamName}>
            <h2>{props.teamName}</h2>
            <p />
            <ul>

            </ul>
        </div>
    )
}