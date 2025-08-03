import React from 'react';


const MatchCard = ({ team1, team2, hours, mins, secs, date }) => {
  return (
    <div className="match-card d-flex justify-content-between align-items-center p-3 text-white">
      <div>
        <small className="text-warning">UTTAR PRADESH PRO VOLLEYBALL LEAGUE</small>
        <h5 className="mb-0">{team1} VS {team2}</h5>
      </div>
      <div className="text-center">
        <div className="countdown d-flex align-items-center">
          <div><strong>{hours}</strong><br /><span>HRS</span></div>
          <span className="mx-1">:</span>
          <div><strong>{mins}</strong><br /><span>MIN</span></div>
          <span className="mx-1">:</span>
          <div><strong>{secs}</strong><br /><span>SEC</span></div>
        </div>
        <div className="match-date text-muted mt-1">{date}</div>
      </div>
    </div>
  );
};

export default MatchCard;
