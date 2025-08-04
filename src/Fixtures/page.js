// import React from 'react';
// import Header from '../Header';
// import Breadcrumb from '../Breadcumb/Breadcrumb';
// import st from '../Stadium.jpg';

// // Import team logos
// import NoidaThunders from '../teamLogos/noida.png';
// import LucknowTigers from '../teamLogos/lucknow.png';
// import AyodhyaSuperKings from '../teamLogos/ayodhya.png';
// import GorakhpurGiants from '../teamLogos/gorakhpur.png';
// import KashiWarriors from '../teamLogos/kashi.png';
// import MuzaffarnagarLions from '../teamLogos/muzaffarnagar.png';
// import MoradabadBulls from '../teamLogos/moradabad.png';
// import MathuraYodhas from '../teamLogos/mathura.png';
// import TBDLogo from '../TeamA.png';

// const FixturesPage = () => {
//   // Team logo mapping
//   const teamLogos = {
//     'Noida Thunders': NoidaThunders,
//     'Lucknow Tigers': LucknowTigers,
//     'Ayodhya Super Kings': AyodhyaSuperKings,
//     'Gorakhpur Giants': GorakhpurGiants,
//     'Kashi Warriors': KashiWarriors,
//     'Muzaffarnagar Lions': MuzaffarnagarLions,
//     'Moradabad Bulls': MoradabadBulls,
//     'Mathura Yodhas': MathuraYodhas,
//     'TBD': TBDLogo
//   };

//   // Group matches by day
//   const matchesByDay = {};
//   matches.forEach(match => {
//     if (!matchesByDay[match.matchDay]) {
//       matchesByDay[match.matchDay] = [];
//     }
//     matchesByDay[match.matchDay].push(match);
//   });

//   return (
//     <>
//       <div className="page-fixtures">
//         <div className="breadcrumb-container">
//           <div className="breadcrumb-overlay">
//             <div className="breadcrumb-content">
//               <h1 className="breadcrumb-title">Fixtures</h1>
//             </div>
//           </div>
//         </div>

//         <div className="page-fixtures-background">
//           <div className="page-fixtures-container">
//             {Object.entries(matchesByDay).map(([day, dayMatches]) => (
//               <div key={day} className="page-match-day-container">
//                 <h2 className="page-match-day-header" style={day === 'DAY 1' ? {fontFamily: 'myFirstFont2'} : {}}>
//                   {day}
//                 </h2>
//                 <div className="page-matches-grid">
//                   {dayMatches.map(match => (
//                     <div key={match.id} className="page-match-card">
//                       <div className="page-match-date">
//                         <div className="page-date-day">{match.day}</div>
//                         <div className="page-date-month-year">
//                           <span>{match.month}</span>
//                           <span>{match.year}</span>
//                         </div>
//                       </div>
//                       <div className="page-match-details">
//                         <div className="page-match-time-location">
//                           <span className="page-match-time">{match.time}</span>
//                           {/* <span className="page-match-conference">{match.conference}</span> */}
//                         </div>
//                         <div className="page-match-teams">
//                           <div className="page-team">
//                             <img src={teamLogos[match.team1]} alt={match.team1} className="page-team-logo" style={{width: '80px', height: '80px'}} />
//                             <span className="page-team-name">{match.team1}</span>
//                           </div>
//                           <div className="page-vs-circle">VS</div>
//                           <div className="page-team">
//                             <img src={teamLogos[match.team2]} alt={match.team2} className="page-team-logo" style={{width: '80px', height: '80px'}} />
//                             <span className="page-team-name">{match.team2}</span>
//                           </div>
//                         </div>
//                         <div className="page-match-location">{match.location}</div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* CSS Styles */}
//       <style jsx>{`
//         @font-face {
//           font-family: 'myFirstFont2';
//           src: url('/path-to-your-font/myFirstFont2.woff2') format('woff2');
//         }
        
//         .page-fixtures {
//           font-family: 'Poppins', sans-serif;
//           color: #333;
//           width: 100%;
//         }

//         .page-breadcrumb-title,
//         .page-match-day-header,
//         .page-date-day,
//         .page-date-month-year,
//         .page-match-time,
//         .page-match-conference,
//         .page-team-name,
//         .page-match-location {
//           font-family: 'Poppins', sans-serif;
//         }

//         .page-fixtures-background {
//           background-color: #0A1434;
//           padding: 40px 0;
//         }

//         .page-fixtures-container {
//           max-width: 1300px;
//           margin: 0 auto;
//           padding: 0 20px;
//         }

//         .page-breadcrumb-container {
//           position: relative;
//           height: 300px;
//           background-size: cover;
//           background-position: center;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           margin-bottom: 0;
//         }

//         .page-breadcrumb-overlay {
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           background-color: rgba(0, 0, 0, 0.6);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .page-breadcrumb-content {
//           text-align: center;
//           color: white;
//           z-index: 1;
//         }

//         .page-breadcrumb-title {
//           font-size: 3rem;
//           font-weight: 700;
//           margin: 0;
//           text-transform: uppercase;
//           letter-spacing: 2px;
//         }

//         .page-match-day-container {
//           margin-bottom: 40px;
//           padding: 25px;
//           border-radius: 10px;
//         }

//         .page-match-day-header {
//           width: 100%;
//           font-family: myFirstFont2;
//           text-align: center;
//           font-size: 2.5rem;
//           color:rgb(255, 255, 255);
//           margin-bottom: 25px;
//           padding-bottom: 10px;
//           border-bottom: 2px solid #FFCA49;
//           display: inline-block;
//         }

//         .page-matches-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
//           gap: 60px;
//         }

//         .page-match-card {
//           background: white;
//           border-radius: 8px;
//           border: 2px solid #FFCA49;
//           box-shadow: 0 3px 10px rgba(0, 0, 0, 0.47);
//           overflow: hidden;
//           display: flex;
//           transition: transform 0.3s ease, box-shadow 0.3s ease;
//           border: 1px solid #eaeaea;
//         }

//         .page-match-card:hover {
//           transform: translateY(-5px);
//           box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
//         }

//         .page-match-date {
//           background: #FFCA49;
//           color: #0A1434;
//           padding: 20px;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           min-width: 90px;
//         }

//         .page-date-day {
//           font-size: 2.2rem;
//           font-weight: 700;
//           line-height: 1;
//         }

//         .page-date-month-year {
//           font-size: 1rem;
//           text-transform: uppercase;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           margin-top: 5px;
//           font-weight: 600;
//         }

//         .page-match-details {
//           padding: 20px;
//           flex-grow: 1;
//           display: flex;
//           flex-direction: column;
//         }

//         .page-match-time-location {
//           display: flex;
//           justify-content: center;
//           margin-bottom: 20px;
//           font-size: 0.95rem;
//           color: #555;
//         }

//         .page-match-teams {
//           display: flex;
//           align-items: center;
//           margin: 15px 0;
//         }

//         .page-team {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           flex: 1;
//         }

//         .page-team-logo {
//           object-fit: contain;
//           margin-bottom: 10px;
//         }

//         .page-team-name {
//           font-size: 1rem;
//           text-align: center;
//           font-weight: 600;
//           color: #0A1434;
//         }

//         .page-vs-circle {
//           background: #FFCA49;
//           color: #0A1434;
//           width: 45px;
//           height: 45px;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-weight: bold;
//           margin: 0 15px;
//           font-size: 0.9rem;
//         }

//         .page-match-location {
//           margin-top: auto;
//           padding-top: 15px;
//           font-size: 0.9rem;
//           color: #555555;
//           font-weight: 700;
//           text-align: center;
//           border-top: 1px solid rgba(0, 0, 0, 0.23);
//         }

//         @media (max-width: 1024px) {
//           .page-matches-grid {
//             grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
//           }
//         }

//         @media (max-width: 768px) {
//           .page-breadcrumb-title {
//             font-size: 2rem;
//           }

//           .page-matches-grid {
//             grid-template-columns: 1fr;
//           }

//           .page-match-day-header {
//             font-size: 1.5rem;
//           }

//           .page-match-day-container {
//             padding: 20px;
//           }
//         }

//         @media (max-width: 480px) {
//           .page-breadcrumb-container {
//             height: 200px;
//           }

//           .page-breadcrumb-title {
//             font-size: 1.5rem;
//           }

//           .page-match-card {
//             flex-direction: column;
//           }

//           .page-match-date {
//             flex-direction: row;
//             justify-content: space-around;
//             padding: 15px;
//           }

//           .page-date-day {
//             font-size: 1.8rem;
//           }

//           .page-date-month-year {
//             flex-direction: row;
//             gap: 8px;
//             margin-top: 0;
//           }

//           .page-match-teams {
//             flex-direction: column;
//           }

//           .page-vs-circle {
//             margin: 15px 0;
//           }

//           .page-team-logo {
//             width: 60px;
//             height: 60px;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// // Real fixtures data (same as before)
// const matches = [
//     {
//       id: 1,
//       day: '07',
//       month: 'AUG',
//       year: '2025',
//       time: '3:30 PM',
//       matchDay: 'DAY 1',
//       teams: 'Noida Thunders vs Lucknow Tigers',
//       team1: 'Noida Thunders',
//       team2: 'Lucknow Tigers',
//       conference: 'Match #1',
//       location: 'Shaheed Vijay Singh Pathik Sports Complex, Greater Noida'
//     },
//     {
//       id: 2,
//       day: '07',
//       month: 'AUG',
//       year: '2025',
//       time: '5:00 PM',
//       matchDay: 'DAY 1',
//       teams: 'Ayodhya Super Kings vs Gorakhpur Giants',
//       team1: 'Ayodhya Super Kings',
//       team2: 'Gorakhpur Giants',
//       conference: 'Match #2',
//       location: 'Shaheed Vijay Singh Pathik Sports Complex, Greater Noida'
//     },
//     {
//       id: 3,
//       day: '08',
//       month: 'AUG',
//       year: '2025',
//       time: '3:30 PM',
//       matchDay: 'DAY 2',
//       teams: 'Kashi Warriors vs Muzaffarnagar Lions',
//       team1: 'Kashi Warriors',
//       team2: 'Muzaffarnagar Lions',
//       conference: 'Match #1',
//       location: 'Shaheed Vijay Singh Pathik Sports Complex, Greater Noida'
//     },
//     {
//       id: 4,
//       day: '08',
//       month: 'AUG',
//       year: '2025',
//       time: '5:00 PM',
//       matchDay: 'DAY 2',
//       teams: 'Moradabad Bulls vs Mathura Yodhas',
//       team1: 'Moradabad Bulls',
//       team2: 'Mathura Yodhas',
//       conference: 'Match #2',
//       location: 'Shaheed Vijay Singh Pathik Sports Complex, Greater Noida'
//     },
//     {
//       id: 5,
//       day: '09',
//       month: 'AUG',
//       year: '2025',
//       time: '3:30 PM',
//       matchDay: 'DAY 3',
//       teams: 'Lucknow Tigers vs Ayodhya Super Kings',
//       team1: 'Lucknow Tigers',
//       team2: 'Ayodhya Super Kings',
//       conference: 'Match #1',
//       location: 'Shaheed Vijay Singh Pathik Sports Complex, Greater Noida'
//     },
//     {
//       id: 6,
//       day: '09',
//       month: 'AUG',
//       year: '2025',
//       time: '5:00 PM',
//       matchDay: 'DAY 3',
//       teams: 'Kashi Warriors vs Noida Thunders',
//       team1: 'Kashi Warriors',
//       team2: 'Noida Thunders',
//       conference: 'Match #2',
//       location: 'Shaheed Vijay Singh Pathik Sports Complex, Greater Noida'
//     },
//     {
//       id: 7,
//       day: '10',
//       month: 'AUG',
//       year: '2025',
//       time: '3:30 PM',
//       matchDay: 'DAY 4',
//       teams: 'Mathura Yodhas vs Gorakhpur Giants',
//       team1: 'Mathura Yodhas',
//       team2: 'Gorakhpur Giants',
//       conference: 'Match #1',
//       location: 'Shaheed Vijay Singh Pathik Sports Complex, Greater Noida'
//     },
//     {
//       id: 8,
//       day: '10',
//       month: 'AUG',
//       year: '2025',
//       time: '5:00 PM',
//       matchDay: 'DAY 4',
//       teams: 'Muzaffarnagar Lions vs Moradabad Bulls',
//       team1: 'Muzaffarnagar Lions',
//       team2: 'Moradabad Bulls',
//       conference: 'Match #2',
//       location: 'Shaheed Vijay Singh Pathik Sports Complex, Greater Noida'
//     },
//     {
//       id: 9,
//       day: '11',
//       month: 'AUG',
//       year: '2025',
//       time: '3:30 PM',
//       matchDay: 'DAY 5',
//       teams: 'Noida Thunders vs Mathura Yodhas',
//       team1: 'Noida Thunders',
//       team2: 'Mathura Yodhas',
//       conference: 'Match #1',
//       location: 'Shaheed Vijay Singh Pathik Sports Complex, Greater Noida'
//     },
//     {
//       id: 10,
//       day: '11',
//       month: 'AUG',
//       year: '2025',
//       time: '5:00 PM',
//       matchDay: 'DAY 5',
//       teams: 'Kashi Warriors vs Lucknow Tigers',
//       team1: 'Kashi Warriors',
//       team2: 'Lucknow Tigers',
//       conference: 'Match #2',
//       location: 'Shaheed Vijay Singh Pathik Sports Complex, Greater Noida'
//     },
//     {
//       id: 11,
//       day: '12',
//       month: 'AUG',
//       year: '2025',
//       time: '3:30 PM',
//       matchDay: 'DAY 6',
//       teams: 'Moradabad Bulls vs Gorakhpur Giants',
//       team1: 'Moradabad Bulls',
//       team2: 'Gorakhpur Giants',
//       conference: 'Match #1',
//       location: 'Shaheed Vijay Singh Pathik Sports Complex, Greater Noida'
//     },
//     {
//       id: 12,
//       day: '12',
//       month: 'AUG',
//       year: '2025',
//       time: '5:00 PM',
//       matchDay: 'DAY 6',
//       teams: 'Muzaffarnagar Lions vs Ayodhya Super Kings',
//       team1: 'Muzaffarnagar Lions',
//       team2: 'Ayodhya Super Kings',
//       conference: 'Match #2',
//       location: 'Shaheed Vijay Singh Pathik Sports Complex, Greater Noida'
//     },
//     {
//       id: 13,
//       day: '13',
//       month: 'AUG',
//       year: '2025',
//       time: '3:30 PM',
//       matchDay: 'DAY 7',
//       teams: 'Kashi Warriors vs Moradabad Bulls',
//       team1: 'Kashi Warriors',
//       team2: 'Moradabad Bulls',
//       conference: 'Match #1',
//       location: 'Shaheed Vijay Singh Pathik Sports Complex, Greater Noida'
//     },
//     {
//       id: 14,
//       day: '13',
//       month: 'AUG',
//       year: '2025',
//       time: '5:00 PM',
//       matchDay: 'DAY 7',
//       teams: 'Lucknow Tigers vs Mathura Yodhas',
//       team1: 'Lucknow Tigers',
//       team2: 'Mathura Yodhas',
//       conference: 'Match #2',
//       location: 'Shaheed Vijay Singh Pathik Sports Complex, Greater Noida'
//     },
//     {
//       id: 15,
//       day: '14',
//       month: 'AUG',
//       year: '2025',
//       time: '3:30 PM',
//       matchDay: 'DAY 8',
//       teams: 'Noida Thunders vs Ayodhya Super Kings',
//       team1: 'Noida Thunders',
//       team2: 'Ayodhya Super Kings',
//       conference: 'Match #1',
//       location: 'Shaheed Vijay Singh Pathik Sports Complex, Greater Noida'
//     },
//     {
//       id: 16,
//       day: '14',
//       month: 'AUG',
//       year: '2025',
//       time: '5:00 PM',
//       matchDay: 'DAY 8',
//       teams: 'Muzaffarnagar Lions vs Gorakhpur Giants',
//       team1: 'Muzaffarnagar Lions',
//       team2: 'Gorakhpur Giants',
//       conference: 'Match #2',
//       location: 'Shaheed Vijay Singh Pathik Sports Complex, Greater Noida'
//     },
//     {
//       id: 17,
//       day: '15',
//       month: 'AUG',
//       year: '2025',
//       time: '3:30 PM',
//       matchDay: 'DAY 9',
//       teams: 'Kashi Warriors vs Mathura Yodhas',
//       team1: 'Kashi Warriors',
//       team2: 'Mathura Yodhas',
//       conference: 'Match #1',
//       location: 'Shaheed Vijay Singh Pathik Sports Complex, Greater Noida'
//     },
//     {
//       id: 18,
//       day: '15',
//       month: 'AUG',
//       year: '2025',
//       time: '5:00 PM',
//       matchDay: 'DAY 9',
//       teams: 'Moradabad Bulls vs Ayodhya Super Kings',
//       team1: 'Moradabad Bulls',
//       team2: 'Ayodhya Super Kings',
//       conference: 'Match #2',
//       location: 'Shaheed Vijay Singh Pathik Sports Complex, Greater Noida'
//     },
//     {
//       id: 19,
//       day: '16',
//       month: 'AUG',
//       year: '2025',
//       time: '3:30 PM',
//       matchDay: 'DAY 10',
//       teams: 'Muzaffarnagar Lions vs Lucknow Tigers',
//       team1: 'Muzaffarnagar Lions',
//       team2: 'Lucknow Tigers',
//       conference: 'Match #1',
//       location: 'Shaheed Vijay Singh Pathik Sports Complex, Greater Noida'
//     },
//     {
//       id: 20,
//       day: '16',
//       month: 'AUG',
//       year: '2025',
//       time: '5:00 PM',
//       matchDay: 'DAY 10',
//       teams: 'Noida Thunders vs Gorakhpur Giants',
//       team1: 'Noida Thunders',
//       team2: 'Gorakhpur Giants',
//       conference: 'Match #2',
//       location: 'Shaheed Vijay Singh Pathik Sports Complex, Greater Noida'
//     },
//     {
//       id: 21,
//       day: '17',
//       month: 'AUG',
//       year: '2025',
//       time: '3:30 PM',
//       matchDay: 'DAY 11, QUALIFIER 1',
//       teams: 'TBD vs TBD',
//       team1: 'TBD',
//       team2: 'TBD',
//       conference: 'Playoffs',
//       location: 'Shaheed Vijay Singh Pathik Sports Complex, Greater Noida'
//     },
//     {
//       id: 22,
//       day: '18',
//       month: 'AUG',
//       year: '2025',
//       time: '3:30 PM',
//       matchDay: 'DAY 12, ELIMINATOR',
//       teams: 'TBD vs TBD',
//       team1: 'TBD',
//       team2: 'TBD',
//       conference: 'Playoffs',
//       location: 'Shaheed Vijay Singh Pathik Sports Complex, Greater Noida'
//     },
//     {
//       id: 23,
//       day: '19',
//       month: 'AUG',
//       year: '2025',
//       time: '3:30 PM',
//       matchDay: 'DAY 13, QUALIFIER 2',
//       teams: 'TBD vs TBD',
//       team1: 'TBD',
//       team2: 'TBD',
//       conference: 'Playoffs',
//       location: 'Shaheed Vijay Singh Pathik Sports Complex, Greater Noida'
//     },
//     {
//       id: 24,
//       day: '21',
//       month: 'AUG',
//       year: '2025',
//       time: '3:30 PM',
//       matchDay: 'DAY 15, FINAL',
//       teams: 'TBD vs TBD',
//       team1: 'TBD',
//       team2: 'TBD',
//       conference: 'Grand Final',
//       location: 'Shaheed Vijay Singh Pathik Sports Complex, Greater Noida'
//     }
//   ];

// export default FixturesPage;




import React from 'react';
import Header from '../Header';
import Breadcrumb from '../Breadcumb/Breadcrumb';
import st from '../Stadium.jpg';

// Import team logos
import NoidaThunders from '../teamLogos/noida.png';
import LucknowTigers from '../teamLogos/lucknow.png';
import AyodhyaSuperKings from '../teamLogos/ayodhya.png';
import GorakhpurGiants from '../teamLogos/gorakhpur.png';
import KashiWarriors from '../teamLogos/kashi.png';
import MuzaffarnagarLions from '../teamLogos/muzaffarnagar.png';
import MoradabadBulls from '../teamLogos/moradabad.png';
import MathuraYodhas from '../teamLogos/mathura.png';
import TBDLogo from '../TeamA.png';

const FixturesPage = () => {
  // Team logo mapping
  const teamLogos = {
    'Noida Thunders': NoidaThunders,
    'Lucknow Tigers': LucknowTigers,
    'Ayodhya Super Kings': AyodhyaSuperKings,
    'Gorakhpur Giants': GorakhpurGiants,
    'Kashi Warriors': KashiWarriors,
    'Muzaffarnagar Lions': MuzaffarnagarLions,
    'Moradabad Bulls': MoradabadBulls,
    'Mathura Yodhas': MathuraYodhas,
    'TBD': TBDLogo
  };

  // Group matches by day
  const matchesByDay = {};
  matches.forEach(match => {
    if (!matchesByDay[match.matchDay]) {
      matchesByDay[match.matchDay] = [];
    }
    matchesByDay[match.matchDay].push(match);
  });

  return (
    <>
      <div className="page-fixtures">
        <div className="breadcrumb-container">
          <div className="breadcrumb-overlay">
            <div className="breadcrumb-content">
              <h1 className="breadcrumb-title">Fixtures</h1>
            </div>
          </div>
        </div>

        <div className="page-fixtures-background">
          <div className="page-fixtures-container">
            {Object.entries(matchesByDay).map(([day, dayMatches]) => (
              <div key={day} className="page-match-day-container">
                <h2 className="page-match-day-header" style={day === 'DAY 1' ? {fontFamily: 'myFirstFont2'} : {}}>
                  {day}
                </h2>
                <div className={`page-matches-grid ${dayMatches.length === 1 ? 'single-match' : ''}`}>
                  {dayMatches.map(match => (
                    <div key={match.id} className="page-match-card">
                      <div className="page-match-date">
                        <div className="page-date-day">{match.day}</div>
                        <div className="page-date-month-year">
                          <span>{match.month}</span>
                          <span>{match.year}</span>
                        </div>
                      </div>
                      <div className="page-match-details">
                        <div className="page-match-time-location">
                          <span className="page-match-time">{match.time}</span>
                          {/* <span className="page-match-conference">{match.conference}</span> */}
                        </div>
                        <div className="page-match-teams">
                          <div className="page-team">
                            <img src={teamLogos[match.team1]} alt={match.team1} className="page-team-logo" />
                            <span className="page-team-name">{match.team1}</span>
                          </div>
                          <div className="page-vs-circle">VS</div>
                          <div className="page-team">
                            <img src={teamLogos[match.team2]} alt={match.team2} className="page-team-logo" />
                            <span className="page-team-name">{match.team2}</span>
                          </div>
                        </div>
                        <div className="page-match-location">{match.location}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        @font-face {
          font-family: 'myFirstFont2';
          src: url('/path-to-your-font/myFirstFont2.woff2') format('woff2');
        }
        
        .page-fixtures {
          font-family: 'Poppins', sans-serif;
          color: #333;
          width: 100%;
        }

        .page-breadcrumb-title,
        .page-match-day-header,
        .page-date-day,
        .page-date-month-year,
        .page-match-time,
        .page-match-conference,
        .page-team-name,
        .page-match-location {
          font-family: 'Poppins', sans-serif;
        }

        .page-fixtures-background {
          background-color: #0A1434;
          padding: 40px 0;
        }

        .page-fixtures-container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .page-breadcrumb-container {
          position: relative;
          height: 300px;
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0;
        }

        .page-breadcrumb-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .page-breadcrumb-content {
          text-align: center;
          color: white;
          z-index: 1;
        }

        .page-breadcrumb-title {
          font-size: 3rem;
          font-weight: 700;
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .page-match-day-container {
          margin-bottom: 40px;
          padding: 25px;
          border-radius: 10px;
        }

        .page-match-day-header {
          width: 100%;
          font-family: myFirstFont2;
          text-align: center;
          font-size: 2.5rem;
          color:rgb(255, 255, 255);
          margin-bottom: 25px;
          padding-bottom: 10px;
          border-bottom: 2px solid #FFCA49;
          display: inline-block;
        }

        .page-matches-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
          gap: 60px;
        }

        .page-matches-grid.single-match {
          display: flex;
          justify-content: center;
        }

        .page-matches-grid.single-match .page-match-card {
          max-width: 450px;
          width: 100%;
        }

        .page-match-card {
          background: white;
          border-radius: 8px;
          border: 2px solid #FFCA49;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.47);
          overflow: hidden;
          display: flex;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid #eaeaea;
        }

        .page-match-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
        }

        .page-match-date {
          background: #FFCA49;
          color: #0A1434;
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-width: 90px;
        }

        .page-date-day {
          font-size: 2.2rem;
          font-weight: 700;
          line-height: 1;
        }

        .page-date-month-year {
          font-size: 1rem;
          text-transform: uppercase;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 5px;
          font-weight: 600;
        }

        .page-match-details {
          padding: 20px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .page-match-time-location {
          display: flex;
          justify-content: center;
          margin-bottom: 20px;
          font-size: 0.95rem;
          color: #555;
        }

        .page-match-teams {
          display: flex;
          align-items: center;
          margin: 15px 0;
        }

        .page-team {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1;
        }

        .page-team-logo {
          width: 100px;
          height: 100px;
          object-fit: contain;
          margin-bottom: 10px;
        }

        .page-team-name {
          font-size: 1rem;
          text-align: center;
          font-weight: 600;
          color: #0A1434;
        }

        .page-vs-circle {
          background: #FFCA49;
          color: #0A1434;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          margin: 0 15px;
          font-size: 0.9rem;
        }

        .page-match-location {
          margin-top: auto;
          padding-top: 15px;
          font-size: 0.9rem;
          color: #555555;
          font-weight: 700;
          text-align: center;
          border-top: 1px solid rgba(0, 0, 0, 0.23);
        }

        @media (max-width: 1024px) {
          .page-matches-grid {
            grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
          }
        }

        @media (max-width: 768px) {
          .page-breadcrumb-title {
            font-size: 2rem;
          }

          .page-matches-grid {
            grid-template-columns: 1fr;
          }

          .page-matches-grid.single-match .page-match-card {
            max-width: 100%;
          }

          .page-match-day-header {
            font-size: 1.5rem;
          }

          .page-match-day-container {
            padding: 20px;
          }
        }

        @media (max-width: 480px) {
          .page-breadcrumb-container {
            height: 200px;
          }

          .page-breadcrumb-title {
            font-size: 1.5rem;
          }

          .page-match-card {
            flex-direction: column;
          }

          .page-match-date {
            flex-direction: row;
            justify-content: space-around;
            padding: 15px;
          }

          .page-date-day {
            font-size: 1.8rem;
          }

          .page-date-month-year {
            flex-direction: row;
            gap: 8px;
            margin-top: 0;
          }

          .page-match-teams {
            flex-direction: column;
          }

          .page-vs-circle {
            margin: 15px 0;
          }

          .page-team-logo {
            width: 80px;
            height: 80px;
          }
        }
      `}</style>
    </>
  );
};

// Real fixtures data (same as before)
const matches = [
    {
      id: 1,
      day: '07',
      month: 'AUG',
      year: '2025',
      time: '3:30 PM',
      matchDay: 'DAY 1',
      teams: 'Noida Thunders vs Lucknow Tigers',
      team1: 'Noida Thunders',
      team2: 'Lucknow Tigers',
      conference: 'Match #1',
      location: 'Shaheed Vijay Singh Pathik Sports Complex, Greater Noida'
    },
    {
      id: 2,
      day: '07',
      month: 'AUG',
      year: '2025',
      time: '5:00 PM',
      matchDay: 'DAY 1',
      teams: 'Ayodhya Super Kings vs Gorakhpur Giants',
      team1: 'Ayodhya Super Kings',
      team2: 'Gorakhpur Giants',
      conference: 'Match #2',
      location: 'Shaheed Vijay Singh Pathik Sports Complex, Greater Noida'
    },
    {
      id: 3,
      day: '08',
      month: 'AUG',
      year: '2025',
      time: '3:30 PM',
      matchDay: 'DAY 2',
      teams: 'Kashi Warriors vs Muzaffarnagar Lions',
      team1: 'Kashi Warriors',
      team2: 'Muzaffarnagar Lions',
      conference: 'Match #1',
      location: 'Shaheed Vijay Singh Pathik Sports Complex, Greater Noida'
    },
    {
      id: 4,
      day: '08',
      month: 'AUG',
      year: '2025',
      time: '5:00 PM',
      matchDay: 'DAY 2',
      teams: 'Moradabad Bulls vs Mathura Yodhas',
      team1: 'Moradabad Bulls',
      team2: 'Mathura Yodhas',
      conference: 'Match #2',
      location: 'Shaheed Vijay Singh Pathik Sports Complex, Greater Noida'
    },
    {
      id: 5,
      day: '09',
      month: 'AUG',
      year: '2025',
      time: '3:30 PM',
      matchDay: 'DAY 3',
      teams: 'Lucknow Tigers vs Ayodhya Super Kings',
      team1: 'Lucknow Tigers',
      team2: 'Ayodhya Super Kings',
      conference: 'Match #1',
      location: 'Shaheed Vijay Singh Pathik Sports Complex, Greater Noida'
    },
    {
      id: 6,
      day: '09',
      month: 'AUG',
      year: '2025',
      time: '5:00 PM',
      matchDay: 'DAY 3',
      teams: 'Kashi Warriors vs Noida Thunders',
      team1: 'Kashi Warriors',
      team2: 'Noida Thunders',
      conference: 'Match #2',
      location: 'Shaheed Vijay Singh Pathik Sports Complex, Greater Noida'
    },
    {
      id: 7,
      day: '10',
      month: 'AUG',
      year: '2025',
      time: '3:30 PM',
      matchDay: 'DAY 4',
      teams: 'Mathura Yodhas vs Gorakhpur Giants',
      team1: 'Mathura Yodhas',
      team2: 'Gorakhpur Giants',
      conference: 'Match #1',
      location: 'Shaheed Vijay Singh Pathik Sports Complex, Greater Noida'
    },
    {
      id: 8,
      day: '10',
      month: 'AUG',
      year: '2025',
      time: '5:00 PM',
      matchDay: 'DAY 4',
      teams: 'Muzaffarnagar Lions vs Moradabad Bulls',
      team1: 'Muzaffarnagar Lions',
      team2: 'Moradabad Bulls',
      conference: 'Match #2',
      location: 'Shaheed Vijay Singh Pathik Sports Complex, Greater Noida'
    },
    {
      id: 9,
      day: '11',
      month: 'AUG',
      year: '2025',
      time: '3:30 PM',
      matchDay: 'DAY 5',
      teams: 'Noida Thunders vs Mathura Yodhas',
      team1: 'Noida Thunders',
      team2: 'Mathura Yodhas',
      conference: 'Match #1',
      location: 'Shaheed Vijay Singh Pathik Sports Complex, Greater Noida'
    },
    {
      id: 10,
      day: '11',
      month: 'AUG',
      year: '2025',
      time: '5:00 PM',
      matchDay: 'DAY 5',
      teams: 'Kashi Warriors vs Lucknow Tigers',
      team1: 'Kashi Warriors',
      team2: 'Lucknow Tigers',
      conference: 'Match #2',
      location: 'Shaheed Vijay Singh Pathik Sports Complex, Greater Noida'
    },
    {
      id: 11,
      day: '12',
      month: 'AUG',
      year: '2025',
      time: '3:30 PM',
      matchDay: 'DAY 6',
      teams: 'Moradabad Bulls vs Gorakhpur Giants',
      team1: 'Moradabad Bulls',
      team2: 'Gorakhpur Giants',
      conference: 'Match #1',
      location: 'Shaheed Vijay Singh Pathik Sports Complex, Greater Noida'
    },
    {
      id: 12,
      day: '12',
      month: 'AUG',
      year: '2025',
      time: '5:00 PM',
      matchDay: 'DAY 6',
      teams: 'Muzaffarnagar Lions vs Ayodhya Super Kings',
      team1: 'Muzaffarnagar Lions',
      team2: 'Ayodhya Super Kings',
      conference: 'Match #2',
      location: 'Shaheed Vijay Singh Pathik Sports Complex, Greater Noida'
    },
    {
      id: 13,
      day: '13',
      month: 'AUG',
      year: '2025',
      time: '3:30 PM',
      matchDay: 'DAY 7',
      teams: 'Kashi Warriors vs Moradabad Bulls',
      team1: 'Kashi Warriors',
      team2: 'Moradabad Bulls',
      conference: 'Match #1',
      location: 'Shaheed Vijay Singh Pathik Sports Complex, Greater Noida'
    },
    {
      id: 14,
      day: '13',
      month: 'AUG',
      year: '2025',
      time: '5:00 PM',
      matchDay: 'DAY 7',
      teams: 'Lucknow Tigers vs Mathura Yodhas',
      team1: 'Lucknow Tigers',
      team2: 'Mathura Yodhas',
      conference: 'Match #2',
      location: 'Shaheed Vijay Singh Pathik Sports Complex, Greater Noida'
    },
    {
      id: 15,
      day: '14',
      month: 'AUG',
      year: '2025',
      time: '3:30 PM',
      matchDay: 'DAY 8',
      teams: 'Noida Thunders vs Ayodhya Super Kings',
      team1: 'Noida Thunders',
      team2: 'Ayodhya Super Kings',
      conference: 'Match #1',
      location: 'Shaheed Vijay Singh Pathik Sports Complex, Greater Noida'
    },
    {
      id: 16,
      day: '14',
      month: 'AUG',
      year: '2025',
      time: '5:00 PM',
      matchDay: 'DAY 8',
      teams: 'Muzaffarnagar Lions vs Gorakhpur Giants',
      team1: 'Muzaffarnagar Lions',
      team2: 'Gorakhpur Giants',
      conference: 'Match #2',
      location: 'Shaheed Vijay Singh Pathik Sports Complex, Greater Noida'
    },
    {
      id: 17,
      day: '15',
      month: 'AUG',
      year: '2025',
      time: '3:30 PM',
      matchDay: 'DAY 9',
      teams: 'Kashi Warriors vs Mathura Yodhas',
      team1: 'Kashi Warriors',
      team2: 'Mathura Yodhas',
      conference: 'Match #1',
      location: 'Shaheed Vijay Singh Pathik Sports Complex, Greater Noida'
    },
    {
      id: 18,
      day: '15',
      month: 'AUG',
      year: '2025',
      time: '5:00 PM',
      matchDay: 'DAY 9',
      teams: 'Moradabad Bulls vs Ayodhya Super Kings',
      team1: 'Moradabad Bulls',
      team2: 'Ayodhya Super Kings',
      conference: 'Match #2',
      location: 'Shaheed Vijay Singh Pathik Sports Complex, Greater Noida'
    },
    {
      id: 19,
      day: '16',
      month: 'AUG',
      year: '2025',
      time: '3:30 PM',
      matchDay: 'DAY 10',
      teams: 'Muzaffarnagar Lions vs Lucknow Tigers',
      team1: 'Muzaffarnagar Lions',
      team2: 'Lucknow Tigers',
      conference: 'Match #1',
      location: 'Shaheed Vijay Singh Pathik Sports Complex, Greater Noida'
    },
    {
      id: 20,
      day: '16',
      month: 'AUG',
      year: '2025',
      time: '5:00 PM',
      matchDay: 'DAY 10',
      teams: 'Noida Thunders vs Gorakhpur Giants',
      team1: 'Noida Thunders',
      team2: 'Gorakhpur Giants',
      conference: 'Match #2',
      location: 'Shaheed Vijay Singh Pathik Sports Complex, Greater Noida'
    },
    {
      id: 21,
      day: '17',
      month: 'AUG',
      year: '2025',
      time: '3:30 PM',
      matchDay: 'DAY 11, QUALIFIER 1',
      teams: 'TBD vs TBD',
      team1: 'TBD',
      team2: 'TBD',
      conference: 'Playoffs',
      location: 'Shaheed Vijay Singh Pathik Sports Complex, Greater Noida'
    },
    {
      id: 22,
      day: '18',
      month: 'AUG',
      year: '2025',
      time: '3:30 PM',
      matchDay: 'DAY 12, ELIMINATOR',
      teams: 'TBD vs TBD',
      team1: 'TBD',
      team2: 'TBD',
      conference: 'Playoffs',
      location: 'Shaheed Vijay Singh Pathik Sports Complex, Greater Noida'
    },
    {
      id: 23,
      day: '19',
      month: 'AUG',
      year: '2025',
      time: '3:30 PM',
      matchDay: 'DAY 13, QUALIFIER 2',
      teams: 'TBD vs TBD',
      team1: 'TBD',
      team2: 'TBD',
      conference: 'Playoffs',
      location: 'Shaheed Vijay Singh Pathik Sports Complex, Greater Noida'
    },
    {
      id: 24,
      day: '21',
      month: 'AUG',
      year: '2025',
      time: '3:30 PM',
      matchDay: 'DAY 15, FINAL',
      teams: 'TBD vs TBD',
      team1: 'TBD',
      team2: 'TBD',
      conference: 'Grand Final',
      location: 'Shaheed Vijay Singh Pathik Sports Complex, Greater Noida'
    }
  ];

export default FixturesPage;