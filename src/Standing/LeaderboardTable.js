import React from 'react';
import './LeaderboardTable.css'; // Import the CSS file
import img1 from './image 12.png'
const leaderboardData = [
  {
    position: 1,
    team: "India",
    points: 28,
    matchesPlayed: 9,
    wins: 9,
    losses: 0,
    form: ["W", "W", "W", "L", "D"],
    nextMatch: "Zimbabwe"
  },
  {
    position: 2,
    team: "Australia",
    points: 19,
    matchesPlayed: 9,
    wins: 9,
    losses: 0,
    form: ["W", "W", "W", "L", "D"],
    nextMatch: "Sri Lanka"
  },
  {
    position: 2,
    team: "Australia",
    points: 19,
    matchesPlayed: 9,
    wins: 9,
    losses: 0,
    form: ["W", "W", "W", "L", "D"],
    nextMatch: "Sri Lanka"
  },



  {
    position: 2,
    team: "Australia",
    points: 19,
    matchesPlayed: 9,
    wins: 9,
    losses: 0,
    form: ["W", "W", "W", "L", "D"],
    nextMatch: "Sri Lanka"
  },


  {
    position: 2,
    team: "Australia",
    points: 19,
    matchesPlayed: 9,
    wins: 9,
    losses: 0,
    form: ["W", "W", "W", "L", "D"],
    nextMatch: "Sri Lanka"
  },



  {
    position: 2,
    team: "Australia",
    points: 19,
    matchesPlayed: 9,
    wins: 9,
    losses: 0,
    form: ["W", "W", "W", "L", "D"],
    nextMatch: "Sri Lanka"
  },

  {
    position: 2,
    team: "Australia",
    points: 19,
    matchesPlayed: 9,
    wins: 9,
    losses: 0,
    form: ["W", "W", "W", "L", "D"],
    nextMatch: "Sri Lanka"
  },
  // Add more data for each team as shown in the image
];

const LeaderboardTable = () => {
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
          {leaderboardData.map((team, index) => (
            <tr  key={index}>
              <td className='text-center'>{team.position}</td>
              <td className='text-left trhighlight'> <img src={img1} className='img-fluid' /> &nbsp;&nbsp;{team.team}</td>
              <td className='trhighlight'>{team.points}</td>
              <td>{team.matchesPlayed}</td>
              <td>{team.wins}</td>
              <td>{team.losses}</td>
              <td>
                <div className="form-icons">
                  {team.form.map((result, idx) => (
                    <span key={idx} className={`form-icon trhighlight ${result}`}>
                      {result}
                    </span>
                  ))}
                </div>
              </td>
              <td>{team.nextMatch}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderboardTable;
