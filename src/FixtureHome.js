import React, { useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import lineabstract from './line-abstract.svg';

// Import team logos - you'll need to add these images to your project
import NoidaThunders from './teamLogos/noida.png';
import LucknowTigers from './teamLogos/lucknow.png';
import AyodhyaSuperKings from './teamLogos/ayodhya.png';
import GorakhpurGiants from './teamLogos/gorakhpur.png';
import KashiWarriors from './teamLogos/kashi.png';
import MuzaffarnagarLions from './teamLogos/muzaffarnagar.png';
import MoradabadBulls from './teamLogos/moradabad.png';
import MathuraYodhas from './teamLogos/mathura.png';
import TBDLogo from './TeamA.png'; // Create a generic TBD logo

const FixtureHome = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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

  // Real fixtures data
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
      location: 'Noida Indoor Stadium'
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
      location: 'Noida Indoor Stadium'
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
      location: 'Noida Indoor Stadium'
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
      location: 'Noida Indoor Stadium'
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
      location: 'Noida Indoor Stadium'
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
      location: 'Noida Indoor Stadium'
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
      location: 'Noida Indoor Stadium'
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
      location: 'Noida Indoor Stadium'
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
      location: 'Noida Indoor Stadium'
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
      location: 'Noida Indoor Stadium'
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
      location: 'Noida Indoor Stadium'
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
      location: 'Noida Indoor Stadium'
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
      location: 'Noida Indoor Stadium'
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
      location: 'Noida Indoor Stadium'
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
      location: 'Noida Indoor Stadium'
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
      location: 'Noida Indoor Stadium'
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
      location: 'Noida Indoor Stadium'
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
      location: 'Noida Indoor Stadium'
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
      location: 'Noida Indoor Stadium'
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
      location: 'Noida Indoor Stadium'
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
      location: 'Noida Indoor Stadium'
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
      location: 'Noida Indoor Stadium'
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
      location: 'Noida Indoor Stadium'
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
      location: 'Noida Indoor Stadium'
    }
  ];
  

  const responsiveSettings = {
    0: { items: 1 },
    600: { items: 2 },
    1000: { items: 3 },
  };

  const handleTranslated = (event) => {
    const index = event.item.index - event.relatedTarget._clones.length / 2;
    const realIndex = ((index % matches.length) + matches.length) % matches.length;
    setActiveIndex(realIndex);
  };

  return (
    <section id='fixture-home'>
      <div className='container-fluid'>
        <div className='section-heading'>
          <img src={lineabstract} className='img-fluid' alt='abstract-line' />
          <h4>Team Matches</h4>
        </div>

        <div className='row'>
          <div className='col-12'>
            <OwlCarousel
              className='owl-theme'
              loop={true}
              margin={10}
              dots={false}
              center
              items={3}
              smartSpeed={700}
              autoplay
              autoplayTimeout={3000}
              autoplayHoverPause={true}
              responsive={responsiveSettings}
              onTranslated={handleTranslated}
            >
              {matches.map((match, index) => (
                <div
                  className={`match-card ${index === activeIndex ? 'active' : ''}`}
                  key={match.id}
                >
                  <div className="header">
                    <div className="date">
                      <div className='row'>
                        <div className='col-3 align-self-center'>
                          <div className="day">{match.day}</div>
                        </div>
                        <div className='col-6 align-self-center'>
                          <div className="month">{match.month}</div>
                          <div className="year">{match.year}</div>
                        </div>
                      </div>
                    </div>
                    <div className="details">
                      <div className="match-info">
                        <div className='match-infocaption'>{match.matchDay}</div>
                      </div>
                    </div>
                  </div>

                  <div className="content">
                    <div className="team">
                      <img src={teamLogos[match.team1]} alt={match.team1} />
                    </div>
                    <div className="match-info text-center">
                      <div className="conference">{match.conference}</div>
                      <div className="time">{match.time}</div>
                      <div className="teams">{match.teams}</div>
                      <div className="location">{match.location}</div>
                    </div>
                    <div className="team">
                      <img src={teamLogos[match.team2]} alt={match.team2} />
                    </div>
                  </div>

                  <div className="fix-footer">
                    {index === activeIndex ? (
                      <>
                        <button className="btn"><a className="button-text1">Match</a></button>
                      </>
                    ) : (
                      <button className="btn full-match-btn">
                        <a className="button-text1">Match Report</a>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </div>

      {/* Embedded CSS for smooth animation and active card styling */}
      <style jsx>{`
        .match-card {
          background: #fff;
          border-radius: 15px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          opacity: 0.5;
          transform: scale(0.9);
          transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.6s ease;
          text-align: center;
        }

        .match-card.active {
          opacity: 1;
          transform: scale(1);
          z-index: 2;
        }


        .match-card .footer {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 15px;
        }

        .btn {
          background: #292b73;
          color: #fff;
          border: none;
          padding: 8px 12px;
          border-radius: 5px;
        }

        .full-match-btn {
          background: #fbc02d;
          color: #000;
        }

        .button-text1 {
          text-decoration: none;
          color: inherit;
        }

        .section-heading {
          text-align: center;
          margin-bottom: 20px;
        }

        .gradient-text {
          font-weight: bold;
          background: linear-gradient(90deg, #ff8a00, #e52e71);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .team img {
          width: 80px;
          height: 80px;
          object-fit: contain;
        }
      `}</style>
    </section>
  );
};

export default FixtureHome;

