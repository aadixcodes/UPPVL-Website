import React, { useState } from 'react'
import news1 from '../images/newspage1.png'
import news2 from '../images/newspage2.png'
import news3 from '../images/newspage3.png'
import news4 from '../images/newspage4.png'
import news5 from '../images/newspage5.png'
import news6 from '../images/newspage6.png'
import arrow from '../arrow.png'

export default function News() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  // News data with categories and links
  const newsData = [
    { id: 1, image: news1, category: 'trial', link: 'https://www.loktej.com/article/140548/uppvls-final-trials-to-be-held-in-noida-youth' },
    { id: 2, image: news2, category: 'trial', link: 'https://up18news.com/uppvl-trials-start-successful-first-phase-in-varanasi-on-29-march/' },
    { id: 3, image: news3, category: 'trial', link: 'https://www.google.com/url?sa=D&q=https://allahabadpost.in/sports/uppvl-trials-kick-off-first-phase-in-varanasi-concluded-on-march-29-30&ust=1754516460000000&usg=AOvVaw19WO6pbC2N6ubKYtSa63JL&hl=en' },
    { id: 4, image: news4, category: 'trial', link: 'https://english.loktej.com/article/18076/uppvl-trials-kick-off---first-phase-in-varanasi-concluded-on-march-29%E2%80%9330' },
    { id: 5, image: news5, category: 'auction', link: 'https://www.bhaskar.com/local/uttar-pradesh/gautambudh-nagar/news/preparations-for-the-first-pro-volleyball-league-in-up-135365964.html' },
    { id: 6, image: news6, category: 'auction', link: 'https://pinewz.com/hindi/video/other/grand-launch-of-uttar-pradesh-pro-volleyball-league-know-what-is-special-1751551483606' }
  ];

  // Filter news based on active filter
  const filteredNews = activeFilter === 'all' 
    ? newsData 
    : newsData.filter(news => news.category === activeFilter);

  return (
    <>
      <div className="breadcrumb-container">
        <div className="breadcrumb-overlay">
          <div className="breadcrumb-content">
            <h1 className="breadcrumb-title">News</h1>
          </div>
        </div>
      </div>

      <section className='newpage'>
        <div className='container-fluid'>
          {/* Filter Buttons */}
          <div className='row mb-4'>
            <div className='col-12 text-center'>
              <div className="filter-buttons">
                <button
                  className={`filter-button ${activeFilter === 'all' ? 'active' : ''}`}
                  onClick={() => setActiveFilter('all')}
                >
                  All
                </button>
                <button
                  className={`filter-button ${activeFilter === 'trial' ? 'active' : ''}`}
                  onClick={() => setActiveFilter('trial')}
                >
                  Trial
                </button>
                <button
                  className={`filter-button ${activeFilter === 'auction' ? 'active' : ''}`}
                  onClick={() => setActiveFilter('auction')}
                >
                  Auction & Trophy Launch
                </button>
              </div>
            </div>
          </div>

          <div className='row'>
            {filteredNews.map((news) => (
              <div className='col-md-4 col-12' key={news.id}>
                <div className='newscard'>
                  <div className='newsbox'>
                    <a href={news.link} target="_blank" rel="noopener noreferrer">
                      <img src={news.image} className='img-fluid' alt={`News ${news.id}`} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .filter-buttons {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 15px;
          margin-bottom: 20px;
        }

        .filter-button {
          padding: 10px 25px;
          font-size: 1rem;
          border-radius: 30px;
          border: 2px solid #FFCA49;
          background-color: transparent;
          color: #FFCA49;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: capitalize;
          font-weight: 500;
        }

        .filter-button:hover {
          background-color: rgba(255, 202, 73, 0.1);
        }

        .filter-button.active {
          background-color: #FFCA49;
          color: #0A1434;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .filter-buttons {
            gap: 10px;
          }

          .filter-button {
            padding: 8px 20px;
            font-size: 0.9rem;
          }
        }

        @media (max-width: 576px) {
          .filter-buttons {
            gap: 8px;
          }

          .filter-button {
            padding: 6px 15px;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </>
  )
}