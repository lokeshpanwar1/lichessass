import React from 'react';

const GameDetails = ({ gameDetails }) => {
  console.log(gameDetails)
  return (
    <div>
      <h2>Game Details</h2>
      <p>Time Control: {gameDetails.TimeControl}</p>
      <p>Variant: {gameDetails.Variant}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default GameDetails;