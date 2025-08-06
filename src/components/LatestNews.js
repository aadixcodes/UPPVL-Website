// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Carousel } from 'react-bootstrap';
// import arrow from "../arrow.png";
// import lineabstract from "../line-abstract.svg";
// import Slider from 'react-slick';

// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
// // Sample image imports — replace with your actual images


// import new01 from '../heronews1.png';
// import new02 from '../heronews2.png'
// import new03 from '../heronews3.png'
// import new04 from '../heronews4.png'
// import new05 from '../heronews5.png'
// import new06 from '../heronews6.png'

// // Sample news data
// const newsData = [
//   { image: new01 },
//   { image: new02 },
//   { image: new03 },
//   { image: new04 },
//   { image: new05 },
//   { image: new06 },
// ];

// const sliderSettings = {
//   dots: false,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   margin:30,
//      nav: false,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   responsive: [
//     {
//       breakpoint: 992, // tablets
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 576, // mobile
//       settings: {
//         slidesToShow: 1,
//       },
//     },
//   ],
// };

// const LatestNews = () => {
//   return (
//     <section className="latest-news-section py-5" style={{ backgroundColor: "black" }}>
//       <div className="container">
//         <div className="section-heading text-white mb-4 text-center">
//           {/* <img src={lineabstract} className="img-fluid mb-3" alt="line abstract" /> */}
//           <h4>Latest News</h4>
//         </div>

//         <Slider {...sliderSettings}>
//           {newsData.map((news, idx) => (
//             <div key={idx} className="px-2">
//               <div className="newscard text-white bg-dark ">
//                 <img src={news.image} className="img-fluid mb-2" alt={`news-${idx}`} />
                
//               </div>
//             </div>
//           ))}
//         </Slider>

       
//       </div>
//     </section>
//   );
// };

// export default LatestNews;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import arrow from "../arrow.png";
import lineabstract from "../line-abstract.svg";
import Slider from 'react-slick';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import new01 from '../heronews1.png';
import new02 from '../heronews2.png';
import new03 from '../heronews3.png';
import new04 from '../heronews4.png';
import new05 from '../heronews5.png';
import new06 from '../heronews6.png';

// Updated news data with links
const newsData = [
  { image: new01, link: 'https://www.loktej.com/article/140548/uppvls-final-trials-to-be-held-in-noida-youth' },
  { image: new02, link: 'https://up18news.com/uppvl-trials-start-successful-first-phase-in-varanasi-on-29-march/' },
  { image: new03, link: 'https://www.google.com/url?sa=D&q=https://allahabadpost.in/sports/uppvl-trials-kick-off-first-phase-in-varanasi-concluded-on-march-29-30&ust=1754516460000000&usg=AOvVaw19WO6pbC2N6ubKYtSa63JL&hl=en' },
  { image: new04, link: 'https://english.loktej.com/article/18076/uppvl-trials-kick-off---first-phase-in-varanasi-concluded-on-march-29%E2%80%9330' },
  { image: new05, link: 'https://www.bhaskar.com/local/uttar-pradesh/gautambudh-nagar/news/preparations-for-the-first-pro-volleyball-league-in-up-135365964.html' },
  { image: new06, link: 'https://pinewz.com/hindi/video/other/grand-launch-of-uttar-pradesh-pro-volleyball-league-know-what-is-special-1751551483606' },
];

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  margin: 30,
  nav: false,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 992, // tablets
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 576, // mobile
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const LatestNews = () => {
  return (
    <section className="latest-news-section py-5" style={{ backgroundColor: "black" }}>
      <div className="container">
        <div className="section-heading text-white mb-4 text-center">
          <h4>Latest News</h4>
        </div>

        <Slider {...sliderSettings}>
          {newsData.map((news, idx) => (
            <div key={idx} className="px-2">
              <div className="newscard text-white bg-dark">
                <a href={news.link} target="_blank" rel="noopener noreferrer">
                  <img 
                    src={news.image} 
                    className="img-fluid mb-2" 
                    alt={`news-${idx}`} 
                    style={{ cursor: 'pointer' }}
                  />
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default LatestNews;