import React, { useState, useEffect } from 'react';
import './LeaderboardTable.css';
import axios from 'axios';

// Create axios instance with base URL
const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

const PointTable = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await api.get('/getallLeaderboard');
        // Sort by points in descending order
        const sortedTeams = response.data.sort((a, b) => b.points - a.points);
        setTeams(sortedTeams);
      } catch (err) {
        console.error('Error fetching leaderboard:', err);
        setError('Failed to load leaderboard data');
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  // Function to get form icons based on last 5 matches
  const getFormIcons = (allMatches = []) => {
    // Get last 5 matches or all if less than 5
    const lastMatches = allMatches.slice(-5).reverse();
    // If no matches, return array of 'T' for 'To be determined'
    if (lastMatches.length === 0) return Array(5).fill('T');
    
    // Map match results to form icons
    return lastMatches.map(match => match.result.charAt(0)); // 'W' or 'L'
  };

  if (loading) {
    return (
      <div className="loading-container">
        <p>Loading leaderboard...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p className="error-message">{error}</p>
      </div>
    );
  }

  return (
    <div className="leaderboard-container">
      <table className="leaderboard-table table-striped">
        <thead>
          <tr>
            <th>Position</th>
            <th>Team</th>
            <th>Points</th>
            <th>M Played</th>
            <th>Wins</th>
            <th>Losses</th>
            <th>Form</th>
            <th>Next Match</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => {
            const formIcons = getFormIcons(team.allMatches);
            
            return (
              <tr key={team._id}>
                <td className='text-center'>{index + 1}</td>
                <td className='text-left trhighlight'>
                  &nbsp;&nbsp;{team.teamname}
                </td>
                <td className='trhighlight'>{team.points}</td>
                <td>{team.totalMatches}</td>
                <td>{team.totalWins}</td>
                <td>{team.totalLosses}</td>
                <td>
                  <div className="form-icons">
                    {formIcons.map((result, idx) => (
                      <span 
                        key={idx} 
                        className={`form-icon trhighlight ${result === 'W' ? 'win' : result === 'L' ? 'loss' : ''}`}
                      >
                        {result}
                      </span>
                    ))}
                  </div>
                </td>
                <td>{team.nextMatch || 'TBD'}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PointTable;