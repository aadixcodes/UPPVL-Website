import React from 'react';
import './LeaderboardTable.css'; // Import the CSS file
import img1 from './image 12.png'
const leaderboardData = [
  {
    position: 1,
    team: "NOIDA THUNDERS	",
    points: 0,
    matchesPlayed: 0,
    wins: 0,
    losses: 0,
    form: ["T", "T", "T", "T", "T"],
    nextMatch: "T"
  },
  {
    position: 2,
    team: "Lucknow Tigers",
    points: 0,
    matchesPlayed: 0,
    wins: 0,
    losses: 0,
    form: ["T", "T", "T", "T", "T"],
    nextMatch: "T"
  },
  {
    position: 3,
    team: "Gorakhpur Giants",
    points: 0,
    matchesPlayed: 0,
    wins: 0,
    losses: 0,
    form: ["T", "T", "T", "T", "T"],
    nextMatch: "T"
  },


  {
    position: 4,
    team: "Mathura Yodhas",
    points: 0,
    matchesPlayed: 0,
    wins: 0,
    losses: 0,
    form: ["T", "T", "T", "T", "T"],
    nextMatch: "T"
  },



  {
    position: 5,
    team: "Ayodhya Super Kings ",
    points: 0,
    matchesPlayed: 0,
    wins: 0,
    losses: 0,
    form: ["T", "T", "T", "T", "T"],
    nextMatch: "T"
  },

  {
    position: 6,
    team: "Moradabad Bulls",
    points: 0,
    matchesPlayed: 0,
    wins: 0,
    losses: 0,
    form: ["T", "T", "T", "T", "T"],
    nextMatch: "T"
  },

  {
    position: 7,
    team: "Kashi Warriors ",
    points: 0,
    matchesPlayed: 0,
    wins: 0,
    losses: 0,
    form: ["T", "T", "T", "T", "T"],
    nextMatch: "T"
  },

  {
    position: 8,
    team: "Muzaffarnagar Lions",
    points: 0,
    matchesPlayed: 0,
    wins: 0,
    losses: 0,
    form: ["T", "T", "T", "T", "T"],
    nextMatch: "T"
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
              <td className='text-left trhighlight'>
                 {/* <img src={img1} className='img-fluid' /> */}
                  &nbsp;&nbsp;{team.team}</td>
              <td className='trhighlight'>{team.points}</td>
              <td>{team.matchesPlayed}</td>
              <td>{team.wins}</td>
              <td>{team.wins}</td>
              <td>
                <div className="form-icons">
                  {team.form.map((result, idx) => (
                    <span key={idx} className={`form-icon trhighlight ${result}`}>
                      {/* {result} */} -
                    </span>
                  ))}
                </div>
              </td>
              <td>TBD</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderboardTable;
