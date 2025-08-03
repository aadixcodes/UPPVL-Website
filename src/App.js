import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Home from './Home';
import About from './About/About';
import Standing from './Standing/Standing';
import LeaderboardTable from './Standing/LeaderboardTable';
import Footer from './Footer';
import Header from './Header';
// import News from './News';
import Contact from './Contact';
// import Team from './Team';
import Team from './Team/page';
import TeamDetail from './Team/[slug]/page'
import News from './components/News';
import Gallery from './components/Gallery';
import BlogGridPage from './components/BlogGridPage';
import BlogDetailsPage from './components/BlogDetailsPage';
import Fixtures from './Fixtures/page'
import UPPVLTV from './Uppvl-tv/page';
import AuctionPage from './Auction/page';
import CreatorsTour from './Creators-Tour/page';

function App() {
  return (
    <Router>
     <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/standings" element={<Standing />} />
          <Route path="/news" element={<News />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/team/:slug" element={<TeamDetail />} />
          <Route path="/fixtures" element={<Fixtures />} />
          <Route path="/uppvl-tv" element={<UPPVLTV />} />
          <Route path="/auction" element={<AuctionPage />} />
          <Route path="/creators-tour" element={<CreatorsTour />} />

               <Route path="/blog" element={<BlogGridPage />} />
        <Route path="/blog/:id" element={<BlogDetailsPage />} />



        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
