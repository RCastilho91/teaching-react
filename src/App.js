import React, { useState } from 'react';
import './App.css';

import ScoringPage from './components/ScoringPage/ScoringPage';
import TeamSelect from "./components/TeamSelect/TeamSelect";

function App() {

  const [teamValue, setTeamValue] = useState();

  const handleTeamValue = (e) => {
    setTeamValue(e.target.value)
  }

  return (
    <div className="App">
      {teamValue ? <ScoringPage teams={teamValue} /> : <TeamSelect handleTeamValue={handleTeamValue} />}
    </div>
  );
}

export default App;
