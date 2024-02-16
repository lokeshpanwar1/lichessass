import React from 'react';

const GameList = ({ games, handleGameClick }) => {
  
  return (
    <div>
      <h2>Recent Games</h2>
      <ul>
        {games.map((game) => (
          <li key={game.id} onClick={() => handleGameClick(game.id)}>
            {game.players.white.user.username} vs {game.players.black.user.username} ({game.status})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameList;