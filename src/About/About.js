import React, { useEffect, useState } from 'react';
import Breadcrumb from '../Breadcumb/Breadcrumb'
import Header from '../Header'
import line from './line.png'
import img from './image 45.png'
import kulvant from './kulvant01.png'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import lineabstract from "../line-abstract.svg";
import vision from  './VISION.jpg'
import mission from './MISSION.jpg'
import team1 from "../images/ASK.jpg";
import team2 from "../images/gorakhpur.jpg";
import team3 from "../images/kashi.jpg";
import team4 from "../images/lucknow.jpg";
import team5 from "../images/mathura.jpg";
import team6 from "../images/moradabad.jpg";
import team7 from "../images/muzzafarnagar.jpg";
import team8 from "../images/noidaa.jpg";

import aadiyogi from './aadiyogi.png'
export default function About() {
    const [isIframeLoaded, setIsIframeLoaded] = useState(false);
    const handleThumbnailClick = () => {
      setIsIframeLoaded(true);
    };

    const options = {
      margin: 20, // Add margin between items
      nav: false, // Disable next/prev arrows
      autoplay: true, // Enable autoplay
      loop:true,
      center: true, // Start from center
      autoplayTimeout:2000, // Autoplay timeout
      autoplayHoverPause: true, // Pause autoplay on hover
      items: 5, // Default number of items to display
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
            <p>The UPPVL is a groundbreaking initiative designed to transform the landscape of volleyball in Uttar Pradesh. With a vision to ignite passion for the sport and to empower athletes, the UPVL serves as a high-energy platform that merges local talent with global ambition. This league symbolises Uttar Pradesh’s rich heritage, commitment to sports excellence, and the undying spirit of competition.

</p>
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
                    <p>To catalyse the growth of volleyball at the grassroots level, creating opportunities for aspiring athletes while fostering a sense of community and camaraderie through the universal language of sports.
</p>
                  </div>
                </div>
              </div>
              <div className='col-md-6 col-12'>
                <div className="img-mission1">
                  <img src={mission} className='img-fluid' />
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-md-6 col-12'>
                <div className="img-mission2">
                  <img src={vision} className='img-fluid' />
                </div>
              </div>

              <div className='col-md-6 col-12 align-self-center'>
                <div className="missionbox1">
                  <img src={line} className='img-fluid' />
                  <h4>Our Vision</h4>
                  <div className='para-mission'>
                    <p>To establish the Uttar Pradesh Pro Volleyball League as the pinnacle of Indian volleyball—a league renowned not just for its high-level competition, but for its ability to inspire, entertain, and cultivate future volleyball legends. Our vision is to make volleyball a sport synonymous with Uttar Pradesh’s sporting identity.
</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section id='meet-team'>
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
      </section> */}
{/* 
      <section id="meet-team">
              <div className="container-fluid">
                <div className="headingteam">
                  <div className="">
                    <img src={lineabstract} className="img-fluid" />
                    <h4>Meet our Team</h4>
                    <p>
                      UPPVL's 8 teams showcase talent and competition. Discover the
                      teams, meet the players, and follow their league journey.
                    </p>
                  </div>
      
                  <OwlCarousel className="owl-theme" {...options}>
                    <div className="item">
                      <img src={team1} className="t1" />
                    </div>
      
                    <div className="item">
                      <img src={team2} className="t2" />
                    </div>
      
                    <div className="item">
                      <img src={team3} className="t3" />
                    </div>
      
                    <div className="item">
                      <img src={team4} className="t4" />
                    </div>
      
                    <div className="item">
                      <img src={team5} className="t5" />
                    </div>
      
                    <div className="item">
                      <img src={team6} className="t6" />
                    </div>

                     <div className="item">
                      <img src={team6} className="t7" />
                    </div>

                     <div className="item">
                      <img src={team6} className="t8" />
                    </div>
                  </OwlCarousel>
                </div>
              </div>
            </section> */}

      <section id='video-section'>
       <div className='whitebox'>
       <div className='container-fluid'>
            <div className='videocontent'>
                <div className='videotitle'>

                  <img src={aadiyogi}  className='img-fluid' />
                    <h4 className='text-black'>Adiyogi Sports Pvt. Ltd. </h4>
                  <img src={line}   className='img-fluid mb-2'/>
                    <p>Adiyogi Manpower India Pvt. Ltd. is dedicated to enhancing the sports landscape in India through a range of services, including sports management, marketing, talent management, grassroots development, and TV production. We are proud to partner with the Uttar Pradesh Pro Volleyball League (UPPVL) to elevate its reach and impact, bringing exciting volleyball action to fans across the region. 
                      
                      
                      </p>
                      
                      <br></br><p>Our commitment to fostering a vibrant sports culture in Uttar Pradesh involves supporting local talent and creating opportunities for athletes to shine. As the marketing partner for UPPVL, we aim to promote the growth of the league and volleyball as a sport, providing a platform where athletes can showcase their skills and brands can engage with a passionate audience. Adiyogi’s involvement in the UPPVL reflects our dedication to nurturing a thriving sports community and contributing to the growth of volleyball in Uttar Pradesh and beyond.
</p>

                </div>
            </div>

      


        </div>


       </div>
      </section>


      <section id='vision' className='bg-black'>

<div className='container'>
  <div className='vision-box'>
    <div className='row'>
      <div className='col-md-8 col-12 align-self-center'>
        <div className='left-vision'>
          <img src={line}   className='img-fluid'/>
          <h4>Founder Note</h4>

          <div className='vision-description'>
            <p>
"When I envisioned the Uttar Pradesh Pro Volleyball League, it wasn’t just about launching another sports event, it was about creating a movement. A movement that gives wings to hidden talent in every corner of Uttar Pradesh, a movement that celebrates discipline, teamwork, and passion through the beautiful sport of volleyball. </p>


<p>Uttar Pradesh has always had the spirit of champions. What it needed was a platform  and that’s what UPPVL aims to be. From dusty courts in villages to stadium lights in the city, our goal is to transform dreams into careers, and passion into pride.
</p>



<p>UPPVL is more than a league. It is a story of opportunity, a celebration of grit, and a tribute to the youth of this state who are ready to rise, rally, and represent.</p>
 
 <p>I invite every volleyball enthusiast, player, coach, and fan to be a part of this historic journey. Together, let’s serve up greatness."
</p>


<div className='designation'>
  <h5>Kulwant Baliyan</h5>
<h6>
<i>Founder, Uttar Pradesh Pro Volleyball League</i>
</h6>
</div>
 </div>
        </div>
      </div>
      <div className='col-md-4 col-12 align-self-center'>
      <div className='right-vision'>
      <img src={kulvant} className='img-fluid'/>
      </div>
      </div>
    </div>
  </div>
</div>
      </section>
    </>
  );
}
