import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import img from './playumg.png';
import line from './linehorizontal.svg';
import img2 from './Mask group (3).png';
import you from './youtube-logo.png';
import clock from './clock.svg';

const Fixture = () => {
  const cards = [
    {
      image: img,
      title: 'Card 1',
      youtubeUrl: 'https://www.youtube.com/watch?v=yourvideoid1',
      uploadDate: 'ROHIT hit the ball very hardly',
    },
    {
      image: img2,
      title: 'Card 2',
      youtubeUrl: '',
      uploadDate: 'rOHIT hit the ball very hardly',
    },

    {
      image: img2,
      title: 'Card 2',
      youtubeUrl: '',
      uploadDate: 'rOHIT hit the ball very hardly',
    },
  ];

  // Add responsive configuration for OwlCarousel
  const responsiveSettings = {
    0: {
      items: 1.01, // Show 1 item on small screens
    },
    600: {
      items: 2.1, // Show 2 items on medium screens
    },
    1000: {
      items: 3, // Show 3 items on larger screens
    },
  };

  return (
    <OwlCarousel
      className="owl-theme"
      loop
      dots={false}
      autoplay={true}
      margin={15}
      autoplayTimeout={2000}
      autoplayHoverPause={true}
       center={true}
      responsive={responsiveSettings} // Apply responsive settings
    >
      {cards.map((card, index) => (
        <div className="item" key={index}>
          <div className="card-container">
            <img src={card.image} alt={card.title} className="card-image" />
            <div className="overlay-content">
              {/* YouTube Logo on top left */}
              <a
                href={you}
                target="_blank"
                rel="noopener noreferrer"
                className="youtube-logo"
              >
                <img src={you} alt="YouTube" />
              </a>

              {/* Content on bottom left */}
              <div className="upload-info">
                <p>{card.uploadDate}</p>
                <div className="fixture-date">
                  <p>
                    <img
                      src={clock}
                      className="img-fluid clockwise"
                      alt="clock"
                    />{' '}
                    &nbsp;&nbsp;30 min &nbsp;&nbsp;{' '}
                    <img
                      src={line}
                      className="img-fluid verticaline"
                      alt="line"
                    />{' '}
                    &nbsp;&nbsp;
                    <span className="match-highlights">Match Highlights</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>




      ))}
    </OwlCarousel>
  );
};

export default Fixture;
