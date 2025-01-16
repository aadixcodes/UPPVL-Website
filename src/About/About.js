import React, { useEffect, useState } from 'react';
import Breadcrumb from '../Breadcumb/Breadcrumb'
import Header from '../Header'
import line from './line.png'
import img from './image 45.png'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import team1 from '../team1.png'
import team2 from '../team2.png'

export default function About() {
    const [isIframeLoaded, setIsIframeLoaded] = useState(false);
    const handleThumbnailClick = () => {
      setIsIframeLoaded(true);
    };

    const options = {
      margin: 20, // Add margin between items
      nav: false, // Disable next/prev arrows
      autoplay: true, // Enable autoplay
      center: true, // Start from center
      autoplayTimeout:2000, // Autoplay timeout
      autoplayHoverPause: true, // Pause autoplay on hover
      items: 4, // Default number of items to display
      dots: false, // Disable pagination dots
      responsive: {
        0: {
          items: 1.2, // Show 1 item on small screens
        },
        600: {
          items: 2, // Show 2 items on medium screens
        },
        1000: {
          items: 3, // Show 3 items on larger screens
        },
        1200: {
          items: 4, // Show 4 items on very large screens
        },
      },
    };
  
    
  return (
    <>
      <Breadcrumb  />

      <section id='about-us'>
        <div className='container'>
          <div className='aboutpara'>
            <p>About Uttar Pradesh Pro Volleyball League (UPPVL)

The Uttar Pradesh Pro Volleyball League (UPPVL) is a platform to promote and grow volleyball in Uttar Pradesh. Led by Kulvant Baliyan, the league focuses on giving players a chance to showcase their talent and taking the sport to a bigger audience.

UPPVL aims to bring excitement to the game through competitive matches and build a strong connection with fans. By supporting players and encouraging more people to enjoy volleyball, the league is working to make the sport popular across the state.

With a clear vision, UPPVL is committed to creating a bright future for volleyball in Uttar Pradesh.</p>
          </div>
        </div>
      </section>

      <section id='mission-vision'>
        <div className='container'>
          <div className='missionbox'>
            <div className='row'>
              <div className='col-md-6 col-12 align-self-center'>
                <div className="missionbox1">
                  <img src={line} className='img-fluid' />
                  <h4>Our Mission</h4>
                  <div className='para-mission'>
                    <p>Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin. The first two words themselves are a truncation of dolorem ipsum ("pain itself").</p>
                  </div>
                </div>
              </div>
              <div className='col-md-6 col-12'>
                <div className="img-mission1">
                  <img src={img} className='img-fluid' />
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-md-6 col-12'>
                <div className="img-mission2">
                  <img src={img} className='img-fluid' />
                </div>
              </div>

              <div className='col-md-6 col-12 align-self-center'>
                <div className="missionbox1">
                  <img src={line} className='img-fluid' />
                  <h4>Our Journey</h4>
                  <div className='para-mission'>
                    <p>Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin. The first two words themselves are a truncation of dolorem ipsum ("pain itself").</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='meet-team'>
        <div className='container-fluid'>
          <div className='headingteam'>
            <div className=''>
              <img src={line} className='img-fluid' />
              <h4>Meet our Team</h4>
              <p>UPPVL's 8 teams showcase talent and competition. Discover the teams, meet the players, and follow their league journey.</p>
            </div>

            <OwlCarousel className="owl-theme" {...options}>
          <div className="item">
          <img src={team1} className='t1' />
          </div>


          <div className="item">
          <img src={team2} className='t2' />
          </div>


          <div className="item">
          <img src={team1} className='t3' />
          </div>


          <div className="item">
          <img src={team1} className='t1' />
          </div>


          <div className="item">
          <img src={team2} className='t2' />
          </div>


          <div className="item">
          <img src={team1} className='t3' />
          </div>

      </OwlCarousel>  


          </div>
        </div>
      </section>

      <section id='video-section'>
       <div className='whitebox'>
       <div className='container-fluid'>
            <div className='videocontent'>
                <div className='videotitle'>
                  <img src={line}   className='img-fluid'/>
                    <h4>Why uupvl?</h4>
                    <p>UPPVL isn’t just about cricketball – it's about community, passion, and the love of the game. We are committed to organizing matches that bring people together, creating unforgettable experiences for fans and fostering a deep connection with the sport.</p>

                </div>
            </div>

            <div className="vm" style={{ position: 'relative', width: '760px', height: '315px' ,margin:'auto',display:'block',borderRadius:'40PX' }}>
      {/* Thumbnail Image */}
      {!isIframeLoaded && (
        <div
          onClick={handleThumbnailClick}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            borderRadius:'20px',
            height: '100%',
            backgroundImage: 'url(https://assets.goal.com/images/v3/blt981e23ca5fc03d2e/real_madrid_champions_league_champions_2022_23.jpg?auto=webp&format=pjpg&width=3840&quality=60)', // Replace with your thumbnail URL
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            cursor: 'pointer',
          }}
        ></div>
      )}

      {/* Iframe */}
      {isIframeLoaded && (
        <iframe
          src="https://www.youtube.com/embed/EJWSWVvCSv8?si=IokOVroZot3mzkKW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" // Replace with your iframe content URL
          width="100%"
          height="100%"
          style={{ border: 'none' }}
          allow="autoplay"
          title="Iframe Content"
        />
      )}
    </div>


        </div>


       </div>
      </section>


      <section id='vision' className='bg-black'>

<div className='container'>
  <div className='vision-box'>
    <div className='row'>
      <div className='col-md-6 col-12 align-self-center'>
        <div className='left-vision'>
          <img src={line}   className='img-fluid'/>
          <h4>Our Vision for <br></br> the Future</h4>

          <div className='vision-description'>
            <p>
            UPPVL remains focused on expanding the league, improving the quality of play, and reaching more fans across Uttar Pradesh and beyond. Our vision is to create a legacy of cricketball excellence, where young players aspire to compete and fans eagerly anticipate each match.            
            </p> </div>
        </div>
      </div>
      <div className='col-md-6 col-12 '>
      <div className='right-vision'>
      <img src={img} className='img-fluid'/>
      </div>
      </div>
    </div>
  </div>
</div>
      </section>
    </>
  );
}
