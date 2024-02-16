// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import GameList from './components/GameList';
import GameDetails from './components/GameDetails';



function App() {
  function parsePgnToJson(pgnData) {
    const games = [];
    const gamesData = pgnData.split('\n\n');
  
    for (const gameData of gamesData) {
      const gameInfo = {};
      const lines = gameData.split('\n');
  
      for (const line of lines) {
        const [key, value] = line.split(' ').map((s) => s.trim());
        if (key && value) {
          gameInfo[key.replace('[', '').replace(']', '')] = value.replace(/["']/g, '');
        }
      }
  
      games.push(gameInfo);
    }
  
    return games;
  }

  
  const [games, setGames] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGame, setSelectedGame] = useState(null);

  const handleSearch = async (username) => {
    const response = await axios.get(`https://lichess.org/api/games/user/${username}`, {
  headers: {
    'Content-Type': 'application/x-ndjson',
  },
});
   
const pgnData = response.data;
const parsedGames = parsePgnToJson(pgnData);
const finalData = JSON.stringify(parsedGames, null, 2)
    setGames(finalData);
    console.log("test",response.data);
    console.log("Final data is", finalData)
    
   
  
  };

  const handleGameClick = (gameId) => {
    // Fetch game details using the game ID and update the state
    // You can use a similar axios.get request to fetch details
    setSelectedGame(gameId);
  };

  useEffect(() => {
    // Fetch initial data when the component mounts
    
  }, [games]);

  return (
    <div className="App">
    <h1>Lichess Recent Games</h1>
    <input
      type="text"
      placeholder="Enter username"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
   
    <button onClick={() => handleSearch(searchQuery)}>Search</button>
    {Array.isArray(games) && games.length > 0 && games.map((e) => <GameDetails key={e} gameDetails={e} />)}
   


  </div>
  );
}

export default App;
