// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { getTeamBySlug } from '../teamData';

// export default function TeamDetail() {
//   const { slug } = useParams();
//   const team = getTeamBySlug(slug);

//   if (!team) return <div>Team not found</div>;

//   return (
//     <div className="team-detail-page" style={{background:"#0c0b3b", paddingBottom:"10px"}}>
//       <div className="breadcrumb-container">
//         <div className="breadcrumb-overlay">
//           <div className="breadcrumb-content">
//             <h1 className="breadcrumb-title">{team.name} Squad</h1>
//           </div>
//         </div>
//       </div>

//       <section className="players-section">
//         <div className="container">
//           <h2 className="section-title">Squad Players</h2>
//           <div className="players-grid">
//             {team.players.map(player => (
//               <div key={player.id} className="player-card">
//                 <div className="player-image-container">
//                   <img 
//                     src={player.image} 
//                     alt={player.name}
//                     className="player-img"
//                   />
//                 </div>
//                 <div className="player-info">
//                   <h3 className="player-name">{player.name}</h3>
//                   <p className="player-position">{player.position}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <style>{`
//         .team-banner-section {
//           padding: 40px 0;
//         }
//         .team-banner-img {
//           width: 100%;
//           max-height: 400px;
//           object-fit: cover;
//           border-radius: 16px;
//           box-shadow: 0 8px 24px rgba(0,0,0,0.3);
//         }
//         .team-description {
//           color: #fff;
//           font-size: 18px;
//           margin-top: 20px;
//           text-align: center;
//           max-width: 800px;
//           margin-left: auto;
//           margin-right: auto;
//         }
//         .players-section {
//           padding: 40px 0;
//         }
//         .section-title {
//           color: #FFCA49;
//           text-align: center;
//           margin-bottom: 30px;
//           font-size: 32px;
//         }
//         .players-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
//           gap: 30px;
//         }
//         .player-card {
//           background: rgba(255,255,255,0.05);
//           border-radius: 12px;
//           padding: 20px;
//           display: flex;
//           align-items: center;
//           gap: 20px;
//           transition: transform 0.3s ease;
//         }
//         .player-card:hover {
//           transform: translateY(-5px);
//           background: rgba(255,255,255,0.1);
//         }
//         .player-image-container {
//           width: 80px;
//           height: 80px;
//           border-radius: 50%;
//           overflow: hidden;
//         }
//         .player-img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//         }
//         .player-info {
//           flex: 1;
//         }
//         .player-name {
//           color: #fff;
//           margin: 0 0 5px 0;
//           font-size: 18px;
//         }
//         .player-position {
//           color: #FFCA49;
//           margin: 0;
//           font-size: 14px;
//           text-transform: uppercase;
//           letter-spacing: 1px;
//         }
//       `}</style>
//     </div>
//   );
// }


import React from 'react';
import { useParams } from 'react-router-dom';
import { getTeamBySlug } from '../teamData';

export default function TeamDetail() {
  const { slug } = useParams();
  const team = getTeamBySlug(slug);
  
  if (!team) return <div>Team not found</div>;

  return (
    <div className="team-detail-page" style={{background:"#0c0b3b", paddingBottom:"10px"}}>
      <div className="breadcrumb-container">
        <div className="breadcrumb-overlay">
          <div className="breadcrumb-content">
            <h1 className="breadcrumb-title">{team.name} Squad</h1>
          </div>
        </div>
      </div>


      <div className="team-logo-section">
        <div className="container">
          <div className="team-logo-container">
            <img 
              src={team.logo} 
              alt={`${team.name} Logo`}
              className="team-logo"
            />
          </div>
        </div>
      </div>


      
      <section className="players-section">
        <div className="container">
          <div className="squad-layout">
            {/* Featured Player Card - Large */}
            <div className="featured-player-card">
              <div className="player-image-container-large">
                <img
                  src={team.players[0]?.image || "/placeholderimage.jpg"}
                  alt={team.players[0]?.name || "Player"}
                  className="player-img-large"
                />
              </div>
              <div className="player-info-large">
                <h3 className="player-name-large">{team.players[0]?.name || "Vinit Kumar"}</h3>
                <p className="player-position-large">{team.players[0]?.position || "ICON"}</p>
              </div>
            </div>
            
            {/* Regular Player Cards Grid */}
            <div className="players-grid-small">
              {team.players.slice(1).map((player, index) => (
                <div key={player.id || index} className="player-card-small">
                  <div className="player-image-container-small">
                    <img
                      src={player.image || "/api/placeholder/60/60"}
                      alt={player.name || "Player"}
                      className="player-img-small"
                    />
                  </div>
                  <div className="player-info-small">
                    <h3 className="player-name-small">{player.name || "Vinit Kumar"}</h3>
                    <p className="player-position-small">{player.position || "ICON"}</p>
                  </div>
                </div>
              ))}
              
              {/* Add placeholder cards if needed to fill the grid */}
              {Array.from({ length: Math.max(0, 11 - team.players.length) }, (_, index) => (
                <div key={`placeholder-${index}`} className="player-card-small">
                  <div className="player-image-container-small">
                    <img
                      src="/api/placeholder/60/60"
                      alt="Player"
                      className="player-img-small"
                    />
                  </div>
                  <div className="player-info-small">
                    <h3 className="player-name-small">Vinit Kumar</h3>
                    <p className="player-position-small">ICON</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`

 /* Add these new styles for the logo section */
        .team-logo-section {
        }
        
        .team-logo-container {
          display: flex;
          justify-content: center;
          align-items: center;
          // padding: 20px;
        }
        
        .team-logo {
          max-width: 200px;
          max-height: 200px;
          object-fit: contain;
          filter: drop-shadow(0 0 10px rgba(255,202,73,0.5));
        }

        .container {
          max-width: 1200px;
          margin: 3rem auto;
          padding: 0 20px;
        }

        .breadcrumb-container {
          padding: 20px 0;
          text-align: center;
        }

        .breadcrumb-title {
          color: #FFCA49;
          font-size: 2.5rem;
          margin: 0;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }

        // .players-section {
        //   padding: 40px 0;
        // }

        .section-title {
          color: #FFCA49;
          text-align: center;
          margin-bottom: 40px;
          font-size: 32px;
          font-weight: bold;
        }

        .squad-layout {
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 30px;
          align-items: start;
        }

        /* Featured Player Card - Large */
        .featured-player-card {
          background: linear-gradient(135deg, rgba(255,202,73,0.2) 0%, rgba(255,202,73,0.05) 100%);
          border: 2px solid #FFCA49;
          border-radius: 16px;
          padding: 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          box-shadow: 0 8px 32px rgba(255,202,73,0.1);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .featured-player-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, transparent 40%, rgba(255,202,73,0.05) 50%, transparent 60%);
          pointer-events: none;
        }

        .featured-player-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 48px rgba(255,202,73,0.2);
        }

        .player-image-container-large {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid #FFCA49;
          margin-bottom: 20px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.3);
        }

        .player-img-large {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .player-info-large {
          z-index: 1;
        }

        .player-name-large {
          color: #fff;
          margin: 0 0 8px 0;
          font-size: 24px;
          font-weight: bold;
        }

        .player-position-large {
          color: #FFCA49;
          margin: 0;
          font-size: 16px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        /* Small Player Cards Grid */
        .players-grid-small {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
        }

        .player-card-small {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          padding: 16px 20px;
          display: flex;
          align-items: center;
          gap: 16px;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .player-card-small:hover {
          transform: translateY(-4px);
          background: rgba(255,255,255,0.12);
          border-color: rgba(255,202,73,0.3);
          box-shadow: 0 8px 24px rgba(0,0,0,0.2);
        }

        .player-image-container-small {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid rgba(255,202,73,0.3);
          flex-shrink: 0;
        }

        .player-img-small {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .player-info-small {
          flex: 1;
          min-width: 0;
        }

        .player-name-small {
          color: #fff;
          margin: 0 0 4px 0;
          font-size: 16px;
          font-weight: 600;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .player-position-small {
          color: #FFCA49;
          margin: 0;
          font-size: 12px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .squad-layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .featured-player-card {
            max-width: 400px;
            margin: 0 auto;
          }
        }

        @media (max-width: 768px) {
          .players-grid-small {
            grid-template-columns: 1fr;
          }
          
          .container {
            padding: 0 15px;
          }
          
          .breadcrumb-title {
            font-size: 2rem;
          }
          
          .section-title {
            font-size: 24px;
          }
        }

        @media (max-width: 480px) {
          .featured-player-card {
            padding: 20px;
          }
          
          .player-image-container-large {
            width: 100px;
            height: 100px;
          }
          
          .player-name-large {
            font-size: 20px;
          }
          
          .player-position-large {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
}