import React from 'react'
import news1 from '../images/instaimage1.jpg'
import news2 from '../images/instaimage2.jpg'
import news3 from '../images/instaimage3.jpg'
import arrow from '../arrow.png'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
export default function Newscard() {


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
      <section className='newpage'>
        <section>
          <div className="container-fluid">
            
            <div className="section-heading"  >

              <h4 style={{ color: "black" }}>Uppvl Socials</h4>
            </div>
          </div>
        </section>

        <div className='container-fluid'>
          <div className='row'>

                        <OwlCarousel className="owl-theme" {...options}>


              <div className='newscard'>
                <div className='newsbox'>
                  <img src={news1} className='img-fluid' />






                </div>

              </div>


 <div className='newscard'>
                <div className='newsbox'>
                  <img src={news2} className='img-fluid' />






                </div>

              </div>




 <div className='newscard'>
                <div className='newsbox'>
                  <img src={news3} className='img-fluid' />






                </div>

              </div>


            </OwlCarousel>


           

            
         



          </div>
        </div>
      </section>
    </>
  )
}
