import React from 'react';

export default function TeamSelect(props){
    return(
        <div className="team-select">
            <button className="one-team" value={1}>1</button>
            <button className="two-teams" value={2}>2</button>
            <button className="three-teams" value={3}>3</button>
        </div>
    )
}

