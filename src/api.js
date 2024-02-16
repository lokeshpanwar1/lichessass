import axios from 'axios';

const BASE_URL = 'https://lichess.org/api';

export const getRecentGames = async (username) => {
    try {
      const response = await axios.get(`${BASE_URL}/games/user/${username}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching games:', error);
      return [];
    }
  };