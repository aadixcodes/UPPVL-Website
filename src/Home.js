import React from "react";
import "./App.css";
import img from "./line.svg";
import logo from "./logo1.svg";
import lineabstract from "./line-abstract.svg";
import Fixture from "./Fixture";
import Header from "./Header";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import l1 from "./image 13.png";
import l2 from "./Group 30.png";
import st from "./stadium01.jpg";
import FixtureHome from './FixtureHome'
import Footer from "./Footer";
import news from "./news.png";
import arrow from "./arrow.png";
import banner from "./bannerhero.jpg";
import matchBanner1 from "./matchBanner5.jpg";
import matchBanner2 from "./matchBanner6.jpg";
// import banner2 from "./Banner 2.jpg";
import line from "./line.svg";
import team1 from "./images/ASK.jpg";
import team2 from "./images/gorakhpur.jpg";
import team3 from "./images/kashi.jpg";
import team4 from "./images/lucknow.jpg";
import team5 from "./images/mathura.jpg";
import team6 from "./images/moradabad.jpg";
import team7 from "./images/muzzafarnagar.jpg";
import team8 from "./images/noidaa.jpg";
import About from "./About/About";
import LeaderboardTable from "./Standing/LeaderboardTable";
import PartnersSection from "./components/OurPartners";
import LatestNews from "./components/LatestNews";
import Newscard from "./components/Newscard";
import BlogCard from "./components/BlogCard";
import BlogHome from "./components/BlogHome";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
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

  // Team data with slugs
  const teams = [
    { id: 1, img: team1, slug: "ayodhya-super-kings-squad", name: "ASK" },
    { id: 2, img: team2, slug: "gorakhpur-giants-squad", name: "Gorakhpur" },
    { id: 3, img: team3, slug: "kashi-warriors-squad", name: "Kashi" },
    { id: 4, img: team4, slug: "lucknow-tigers-squad", name: "Lucknow" },
    { id: 5, img: team5, slug: "mathura-yodhyas-squad", name: "Mathura" },
    { id: 6, img: team6, slug: "moradabad-bulls-squad", name: "Moradabad" },
    { id: 7, img: team7, slug: "muzaffarnagar-lions-squad", name: "Muzzafarnagar" },
    { id: 8, img: team8, slug: "noida-thunders-squad", name: "Noida" }
  ];

  const handleTeamClick = (slug) => {
    navigate(`/team/${slug}`);
  };

  const options = {
    margin: 20, // Add margin between items
    nav: false, // Disable next/prev arrows
    loop: true,
    autoplay: true, // Enable autoplay
    center: true, // Start from center
    autoplayTimeout: 2000, // Autoplay timeout
    autoplayHoverPause: true, // Pause autoplay on hover
    items: 6, // Default number of items to display
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
        items: 5, // Show 4 items on very large screens
      },
    },
  };

  return (
    <>
      <section id="banner-slider">
        <div className="container-fluid p-0">
          <OwlCarousel
            className="owl-theme banner-carousel"
            loop
            margin={10}
            nav={false}
            dots={false}
            autoplay
            autoplayTimeout={3000}
            autoplayHoverPause
            items={1}
            navText={[
              "<div class='nav-btn prev-slide'>‹</div>",
              "<div class='nav-btn next-slide'>›</div>"
            ]}
          >
            <div className="item">
              <img src={banner} alt="Banner 1" className="img-fluid w-100" />
              <div className="anthem-button-container">
                <a href="https://www.youtube.com/watch?v=4D8Pu-Bh_5w" target="_blank" rel="noopener noreferrer" className="anthem-button">
                  Official Anthem
                </a>
              </div>
            </div>
            <div className="item">
              <img src={matchBanner1} alt="Banner 1" className="img-fluid w-100" />
              <div className="anthem-button-container">
                <a href="https://www.youtube.com/watch?v=4D8Pu-Bh_5w" target="_blank" rel="noopener noreferrer" className="anthem-button">
                  Official Anthem
                </a>
              </div>
            </div>
            <div className="item">
              <img src={matchBanner2} alt="Banner 1" className="img-fluid w-100" />
              <div className="anthem-button-container">
                <a href="https://www.youtube.com/watch?v=4D8Pu-Bh_5w" target="_blank" rel="noopener noreferrer" className="anthem-button">
                  Official Anthem
                </a>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>

      {/* Rest of your existing code remains unchanged */}
      <section id="fixtures">
        <div className="container-fluid">
          <div className="row">
            <FixtureHome />
          </div>
        </div>
      </section>
      
      <div>
        <Newscard />
      </div>
      
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
              {teams.map((team) => (
                <div
                  className="item"
                  key={team.id}
                  onClick={() => handleTeamClick(team.slug)}
                  style={{ cursor: 'pointer' }}
                >
                  <img
                    src={team.img}
                    className={`t${team.id}`}
                    alt={team.name}
                  />
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </section>
      
      <section id="stadium">
        <img src={st} className="img-fluid" />
        <BlogHome />
        <LatestNews />
        <PartnersSection />
      </section>
    </>
  );
}