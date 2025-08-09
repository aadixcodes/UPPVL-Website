import React, { useState, useEffect } from 'react';
import './liveScore.css'; // Import the CSS file
import img1 from './image 12.png'

// Match data from the sheet
const matchData = [
  { id: 1717, name: "Noida Thunders Vs Lucknow Tigers, Aug 07, 2025" },
  { id: 1718, name: "Ayodhya Super Kings Vs Gorakhpur Giants, Aug 07, 2025" },
  { id: 1719, name: "Kashi Warriors Vs Muzaffarnagar Lions, Aug 08, 2025" },
  { id: 1720, name: "Moradabad Bulls Vs Mathura Yodhas, Aug 08, 2025" },
  { id: 1721, name: "Lucknow Tigers Vs Ayodhya Super Kings, Aug 09, 2025" },
  { id: 1722, name: "Kashi Warriors Vs Noida Thunders, Aug 09, 2025" },
  { id: 1723, name: "Mathura Yodhas Vs Gorakhpur Giants, Aug 10, 2025" },
  { id: 1724, name: "Muzaffarnagar Lions Vs Moradabad Bulls, Aug 10, 2025" },
  { id: 1725, name: "Noida Thunders Vs Mathura Yodhas, Aug 11, 2025" },
  { id: 1726, name: "Kashi Warriors Vs Lucknow Tigers, Aug 11, 2025" },
  { id: 1727, name: "Moradabad Bulls Vs Gorakhpur Giants, Aug 12, 2025" },
  { id: 1728, name: "Muzaffarnagar Lions Vs Ayodhya Super Kings, Aug 12, 2025" },
  { id: 1729, name: "Kashi Warriors Vs Moradabad Bulls, Aug 13, 2025" },
  { id: 1730, name: "Lucknow Tigers Vs Mathura Yodhas, Aug 13, 2025" },
  { id: 1731, name: "Noida Thunders Vs Ayodhya Super Kings, Aug 14, 2025" },
  { id: 1732, name: "Muzaffarnagar Lions Vs Gorakhpur Giants, Aug 14, 2025" },
  { id: 1733, name: "Kashi Warriors Vs Mathura Yodhas, Aug 15, 2025" },
  { id: 1734, name: "Moradabad Bulls Vs Ayodhya Super Kings, Aug 15, 2025" },
  { id: 1735, name: "Muzaffarnagar Lions Vs Lucknow Tigers, Aug 16, 2025" },
  { id: 1736, name: "Noida Thunders Vs Gorakhpur Giants, Aug 16, 2025" },
  { id: 1737, name: "TBA1 Vs TBA2, Aug 17, 2025" },
  { id: 1738, name: "TBA1 Vs TBA2, Aug 18, 2025" },
  { id: 1739, name: "TBA1 Vs TBA2, Aug 19, 2025" },
  { id: 1740, name: "TBA1 Vs TBA2, Aug 20, 2025" },
  { id: 1741, name: "TBA1 Vs TBA2, Aug 21, 2025" }
];

export default function MatchCenter() {
  const [matchId, setMatchId] = useState(null);
  const [matchName, setMatchName] = useState("");
  const [iframeHeight, setIframeHeight] = useState("800px");

  useEffect(() => {
    const today = new Date();
    const todayStr = today.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric"
    });

    let foundMatch = matchData.find(m => m.name.includes(todayStr));

    if (!foundMatch) {
      foundMatch = matchData.find(m => {
        const matchDateStr = m.name.split(",").slice(-2).join(",").trim();
        const matchDate = new Date(matchDateStr);
        return matchDate >= today;
      });
    }

    if (foundMatch) {
      setMatchId(foundMatch.id);
      setMatchName(foundMatch.name);
    }

    // Adjust iframe height based on window size
    const handleResize = () => {
      const height = window.innerHeight - 200; // Leave space for header and margins
      setIframeHeight(`${Math.max(height, 600)}px`);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!matchId) {
    return <p style={{ textAlign: "center", marginTop: "2rem" }}>No matches available</p>;
  }

  return (
    <div className="scoreboard-container" style={{
      width: '100%',
      maxWidth: '100vw',
      padding: '1rem',
      boxSizing: 'border-box'
    }}>
      {/* Scoreboard Section */}
      <div className="scoreboard-wrapper" style={{
        width: '100%',
        maxWidth: '100%',
        margin: '0 auto'
      }}>
        <h2 style={{
          textAlign: "center",
          marginBottom: "1rem",
          color: "#FFCA49",
          fontSize: "2rem",
          fontWeight: "bold",
          fontFamily: "poppins",
          textShadow: "1px 1px 4px rgba(0,0,0,0.5)"
        }}>
          {matchName}
        </h2>
        <div style={{
          width: '100%',
          overflow: 'hidden',
          borderRadius: "12px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.5)",
          backgroundColor: '#f0f0f0'
        }}>
          <iframe
            src={`https://dz8zbd8amw7pd.cloudfront.net/UPPVL/MatchCenter/index.html?m=${matchId}`}
            id="kadamba-iframefxfl"
            style={{
              width: "100%",
              height: iframeHeight,
              border: "none",
              display: "block",
              minHeight: "600px"
            }}
            title="UPPVL Match Center"
          ></iframe>
        </div>
        <script
          src="https://dz8zbd8amw7pd.cloudfront.net/UPPVL/MatchCenter/script/frameresizer.js"
          type="text/javascript"
        ></script>
      </div>
    </div>
  );
}




