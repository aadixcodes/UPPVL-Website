import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import arrow from "../arrow.png";
import lineabstract from "../line-abstract.svg";
import Slider from 'react-slick';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// Sample image imports — replace with your actual images
import news1 from "../../src/1.jpg";
import news2 from "../../src/2.jpg";
import news3 from "../../src/3.jpg";
import news4 from "../../src/4.jpg";
import news5 from "../../src/5.jpg";
import news6 from "../../src/6.jpg";
import news7 from "../../src/7.jpg";
import news8 from "../../src/8.jpg";
import news9 from "../../src/9.jpg";
import news10 from "../../src/10.jpg";


import new01 from '../Deccan.jpg';
import new02 from '../Allahbad.jpg'
import new03 from '../Lokmat.jpg'

// Sample news data
const newsData = [
  { title: "Title 1", subTitle: "Description 1", image: new01, date: "3 July 2024" },
  { title: "Title 2", subTitle: "Description 2", image: new02, date: "2 July 2024" },
  { title: "Title 3", subTitle: "Description 3", image: new03, date: "1 July 2024" },
  // { title: "Title 4", subTitle: "Description 4", image: news4, date: "30 June 2024" },
  // { title: "Title 5", subTitle: "Description 5", image: news5, date: "29 June 2024" },
  // { title: "Title 6", subTitle: "Description 6", image: news6, date: "28 June 2024" },
  // { title: "Title 7", subTitle: "Description 7", image: news7, date: "27 June 2024" },
  // { title: "Title 8", subTitle: "Description 8", image: news8, date: "26 June 2024" },
  // { title: "Title 9", subTitle: "Description 9", image: news9, date: "25 June 2024" },
  // { title: "Title 10", subTitle: "Description 10", image: news10, date: "24 June 2024" },
];

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  margin:30,
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
          {/* <img src={lineabstract} className="img-fluid mb-3" alt="line abstract" /> */}
          <h4>Latest News</h4>
        </div>

        <Slider {...sliderSettings}>
          {newsData.map((news, idx) => (
            <div key={idx} className="px-2">
              <div className="newscard text-white bg-dark ">
                <img src={news.image} className="img-fluid mb-2" alt={`news-${idx}`} />
                
              </div>
            </div>
          ))}
        </Slider>

       
      </div>
    </section>
  );
};

export default LatestNews;