import React from 'react';

interface TeamCardProps {
  name: string;
  mascot: string;
  location: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, mascot, location }) => {
  return (
    <div>
      <h2>School Name: {name}</h2>
      <h3>Mascot Name: {mascot}</h3>
      <h4>Location: {location}</h4>
    </div>
  );
};

export default TeamCard;
