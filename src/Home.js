import React from 'react'
import './App.css';
import img from './line.svg'
import logo from './logo1.svg'
import lineabstract from './line-abstract.svg'
import Fixture from './Fixture';
import Header from './Header';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import l1 from './image 13.png'
import l2 from './Group 30.png'
import st from './Standing/standium.png'
import Footer from './Footer';
import news from './news.png'
import arrow from './arrow.png'
import banner from './banner1.jpg'
import line from './line.svg'
import team1 from './team1.png'
import team2 from './team2.png'

export default function Home() {
  const responsiveSettings = {
    0: {
      items: 1, // Show 1 item on small screens
    },
    600: {
      items: 2, // Show 2 items on medium screens
    },
    1000: {
      items: 3, // Show 3 items on larger screens
    },
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
        items: 2.2, // Show 1 item on small screens
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

<div class="banner">
    <img src={banner}   className='img-fluid' />
</div>

<section id='fixtures'>
<div className='container-fluid'>

  <div className='section-heading'>
    <img src={lineabstract} className='img-fluid'/>
    <h4>Latest Videos</h4>
  </div>
  <div className='row'>
<Fixture/>
  </div>
</div>
</section>


<section id='fixture-home'>
  <div className='container-fluid'>
    <div className='section-heading'>
    <img src={lineabstract} className='img-fluid'/>
    <h4>Team Matches</h4>
    </div>

    <div className='row'>
      <div className=''>
        <OwlCarousel className="owl-theme" 
        
        loop
        dots={false}
        margin={30}
        responsive={responsiveSettings}
        
        >


        <div class="match-card">
      <div class="header">
        <div class="date">
        <div className='row'>
          <div className='col-3 align-self-center'>
          <div class="day">20</div>
        
          </div>
          <div className='col-6 align-self-center'>
          <div class="month">SUNDAY</div>
          <div class="year">OCTOBER</div>
          </div>
          </div>
        </div>
        <div class="details">
          <div class="match-info">
            <div className='match-infocaption'>DAY 14, MATCH 20</div></div>
        </div>
      </div>
      <div class="content">
        <div class="team">
          <img src={l1} alt="India Logo" />
        </div>
        <div class="match-info">
          <div class="conference">Conference #48</div>
          <div class="time">21:00</div>
          <div class="teams">INDIA v New Zealand</div>
          <div class="location">Noida Indoor Stadium</div>
        </div>
        <div class="team">
          <img src={l2} alt="New Zealand Logo" />
        </div>
      </div>
      <div class="footer">
        <button class="btn">
          
          <a className='button-text1'>
          Tickets
            </a></button>
        <button class="btn">
        <a className='button-text1'>
          Match Day Tour
            </a>
        </button>
      </div>
    </div>


          </OwlCarousel>
        </div> 

        <div className='large-button'>
          <a className="gradient-text">
            View ALL Matches
          </a>
        </div>
        </div>
     </div>
</section>



<section id='meet-team'>
        <div className='container-fluid'>
          <div className='headingteam'>
            <div className=''>
              <img src={lineabstract} className='img-fluid' />
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





<section id="news">



<div className='section-heading'>
<img src={lineabstract} className='img-fluid'/>
    <h4>News & Articles</h4>
  </div>

<div className='container'>
  <div className='row'>
  
    <div className='col-md-4 col-12'>
      <div className='newscard'>
       <div className='newsbox'>
        <img src={news} className='img-fluid'/>

        <div className='caption-news'>
          <h5>Lorem ipsum dolor, consectetur sitadipiscing elit amet</h5>
          <p>Lorem ipsum dolor, consectetur sitadipiscing elit amet</p>

          <div className='read-more'>
            <p> Read More <img src={arrow} className='img-fluid arrowreadmore' /></p>
          </div>
        </div>

      <div className='card-footer'>

        <div className='row'>
          <div className='col-md-6 col-8'>
            <div className='date-news'>
              <p>3 July 2024  &nbsp;&nbsp; | &nbsp;&nbsp; NEWS</p>
            </div>
          </div>

        </div>
      </div>


       </div>

      </div>


    </div>


    <div className='col-md-4 col-12'>
      <div className='newscard'>
       <div className='newsbox'>
        <img src={news} className='img-fluid'/>

        <div className='caption-news'>
          <h5>Lorem ipsum dolor, consectetur sitadipiscing elit amet</h5>
          <p>Lorem ipsum dolor, consectetur sitadipiscing elit amet</p>

          <div className='read-more'>
            <p> Read More <img src={arrow} className='img-fluid arrowreadmore' /></p>
          </div>
        </div>

      <div className='card-footer'>

        <div className='row'>
          <div className='col-md-6 col-8'>
            <div className='date-news'>
              <p>3 July 2024  &nbsp;&nbsp; | &nbsp;&nbsp; NEWS</p>
            </div>
          </div>

        </div>
      </div>


       </div>

      </div>


    </div>



    <div className='col-md-4 col-12'>
      <div className='newscard'>
       <div className='newsbox'>
        <img src={news} className='img-fluid'/>

        <div className='caption-news'>
          <h5>Lorem ipsum dolor, consectetur sitadipiscing elit amet</h5>
          <p>Lorem ipsum dolor, consectetur sitadipiscing elit amet</p>

          <div className='read-more'>
            <p> Read More <img src={arrow} className='img-fluid arrowreadmore' /></p>
          </div>
        </div>

      <div className='card-footer'>

        <div className='row'>
          <div className='col-md-6 col-8'>
            <div className='date-news'>
              <p>3 July 2024  &nbsp;&nbsp; | &nbsp;&nbsp; NEWS</p>
            </div>
          </div>

        </div>
      </div>


       </div>

      </div>


    </div>


    <div className='col-md-4 col-12'>
      <div className='newscard'>
       <div className='newsbox'>
        <img src={news} className='img-fluid'/>

        <div className='caption-news'>
          <h5>Lorem ipsum dolor, consectetur sitadipiscing elit amet</h5>
          <p>Lorem ipsum dolor, consectetur sitadipiscing elit amet</p>

          <div className='read-more'>
            <p> Read More <img src={arrow} className='img-fluid arrowreadmore' /></p>
          </div>
        </div>

      <div className='card-footer'>

        <div className='row'>
          <div className='col-md-6 col-8'>
            <div className='date-news'>
              <p>3 July 2024  &nbsp;&nbsp; | &nbsp;&nbsp; NEWS</p>
            </div>
          </div>

        </div>
      </div>


       </div>

      </div>


    </div>



    <div className='col-md-4 col-12'>
      <div className='newscard'>
       <div className='newsbox'>
        <img src={news} className='img-fluid'/>

        <div className='caption-news'>
          <h5>Lorem ipsum dolor, consectetur sitadipiscing elit amet</h5>
          <p>Lorem ipsum dolor, consectetur sitadipiscing elit amet</p>

          <div className='read-more'>
            <p> Read More <img src={arrow} className='img-fluid arrowreadmore' /></p>
          </div>
        </div>

      <div className='card-footer'>

        <div className='row'>
          <div className='col-md-6 col-8'>
            <div className='date-news'>
              <p>3 July 2024  &nbsp;&nbsp; | &nbsp;&nbsp; NEWS</p>
            </div>
          </div>

        </div>
      </div>


       </div>

      </div>


    </div>
  </div>
</div>

</section>



<section id='stadium'>
        <img src={st} className='img-fluid'/>
    </section>

</>

  )
}
