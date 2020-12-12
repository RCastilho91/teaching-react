import React, { useState } from 'react';

import ScoringHeader from "./Subcomponents/Header/ScoringHeader";

export default function ScoringPage(props){

    const [currentScore, setCurrentScore] = useState(0)
    const [teamOneScore, setTeamOneScore] = useState(0);
    const [teamTwoScore, setTeamTwoScore] = useState(0);
    const [teamThreeScore, setTeamThreeScore] = useState(0);

    const [roundScoring, setRoundScoring] = useState([])

    const handleScores = (round, teamOne, teamTwo, teamThree) => {
        setTeamOneScore(teamOne);
        setTeamTwoScore(teamTwo);
        setTeamThreeScore(teamThree);

        let total = teamOne + teamTwo + teamThree;
        setCurrentScore(total)

        setRoundScoring([...roundScoring,
            {'round': round, 'teamOne': teamOne, 'teamTwo': teamTwo, 'teamThree': teamThree}
        ])
    }

    return(
        <div className={"scoring-page"}>
            <ScoringHeader currentScore={currentScore} />
        </div>
    )
}