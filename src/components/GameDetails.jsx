import React, { useState } from 'react';

const GameDetails = ({ gameDetails }) => {
  const handlechange = () => {
    setOn(!on);
  }
  const [on, setOn] = useState(false);
  console.log(gameDetails)
  return (
    <div onClick={handlechange} className='flex flex-col gap-2 m-4 p-2 bg-red-200 cursor-pointer'>
      <h2>Game Details</h2>
      <p>White Player: {gameDetails.White}</p>
      <p>Black Player: {gameDetails.Black}</p>
      {on ? (
  <>
    <p>Time Control: {gameDetails.TimeControl}</p>
    <p>Result: {gameDetails.Result}</p>
    <p>Variant: {gameDetails.Variant}</p>
  </>
) : <></>}
      {/* Add more details as needed */}
    </div>
  );
};

export default GameDetails;