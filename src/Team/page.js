// import React from 'react';
// import contactgirl from '../contactgirl.png';
// import submit from '../submitbtn.svg';

// import team1 from "../images/ASK.jpg"; // Ayodhya Super Kings
// import team2 from "../images/gorakhpur.jpg"; // Gorakhpur Giants
// import team3 from "../images/kashi.jpg"; // Kashi Warriors
// import team4 from "../images/lucknow.jpg"; // Lucknow Tigers
// import team5 from "../images/mathura.jpg"; // Mathura Yodhas
// import team6 from "../images/moradabad.jpg"; // Moradabad Bulls
// import team7 from "../images/muzzafarnagar.jpg"; // Muzaffarnagar Lions
// import team8 from "../images/noidaa.jpg"; // Noida Thunders

// export default function Team() {
//   const teams = [
//     { img: team1, name: "Ayodhya Super Kings" },
//     { img: team2, name: "Gorakhpur Giants" },
//     { img: team3, name: "Kashi Warriors" },
//     { img: team4, name: "Lucknow Tigers" },
//     { img: team5, name: "Mathura Yodhas" },
//     { img: team6, name: "Moradabad Bulls" },
//     { img: team7, name: "Muzaffarnagar Lions" },
//     { img: team8, name: "Noida Thunders" },
//   ];

//   return (
//     <>
//       <div className="breadcrumb-container">
//         <div className="breadcrumb-overlay">
//           <div className="breadcrumb-content">
//             <h1 className="breadcrumb-title">Team Page</h1>
//           </div>
//         </div>
//       </div>
//       <section id="teameet">
//         <div className="container-fluid">
//           <div className="contact-title teamheading">
//             <h4>Explore Teams</h4>
//             <p>
//               For any inquiries, partnership opportunities, or further information, feel free to reach out to us directly through the contact details below.
//             </p>
//           </div>

//           <div className="row">
//             {teams.map((team, index) => (
//               <div className="col-md-3 col-6 text-center mb-4" key={index}>
//                 <img src={team.img} className="img-fluid t1" alt={team.name} />
//                 <h6 className="mt-2">{team.name}</h6>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }


import React from 'react';
import { Link } from 'react-router-dom';
import { teamsData } from './teamData';

export default function Team() {
  return (
    <>
      <div className="breadcrumb-container">
        <div className="breadcrumb-overlay">
          <div className="breadcrumb-content">
            <h1 className="breadcrumb-title">Team Page</h1>
          </div>
        </div>
      </div>
      
      <section id="teameet">
        <div className="container-fluid">
          <div className="contact-title teamheading">
            <h4>Explore Teams</h4>
            <p>
              For any inquiries, partnership opportunities, or further information, 
              feel free to reach out to us directly through the contact details below.
            </p>
          </div>

          <div className="row">
            {teamsData.map((team) => (
              <div className="col-md-3 col-6 text-center mb-4" key={team.id}>
                <Link to={`/team/${team.slug}`} className="team-card">
                  <img 
                    src={team.bannerImage} 
                    className="img-fluid t1" 
                    alt={team.name}
                  />
                  <h6 className="mt-2">{team.name}</h6>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .team-card {
          display: block;
          transition: all 0.3s ease;
          text-decoration: none;
          color: inherit;
        }
        .team-card:hover {
          transform: translateY(-5px);
        }
        .t1 {
          border-radius: 12px;
          transition: transform 0.3s ease;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        .team-card:hover .t1 {
          transform: scale(1.03);
          box-shadow: 0 8px 16px rgba(0,0,0,0.2);
        }
      `}</style>
    </>
  );
}