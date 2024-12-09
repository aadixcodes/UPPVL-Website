import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About/About';
import Standing from './Standing/Standing';
import LeaderboardTable from './Standing/LeaderboardTable';
import Footer from './Footer';
import Header from './Header';
import News from './News';
import Contact from './Contact';

function App() {
  return (
    <Router>
     <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/standings" element={<Standing />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />


        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
