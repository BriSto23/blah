import React from 'react';
import './App.css';
import TeamCard from './TeamCard';

function Welcome() {
  return <h1>College Basketball Teams</h1>;
}

function Goodbye() {
  return (
    <h1>Thanks for checking out the list of these College Basketball Teams!</h1>
  );
}

const teamData = require('./CollegeBasketballTeams.json').teams;

interface TeamListProps {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

function TeamList() {
  return (
    <div>
      {teamData.map((oneTeam: TeamListProps) => (
        <TeamCard
          key={oneTeam.tid}
          name={oneTeam.school}
          mascot={oneTeam.name}
          location={`${oneTeam.city}, ${oneTeam.state}`}
        />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
      <Goodbye />
    </div>
  );
}

export default App;
