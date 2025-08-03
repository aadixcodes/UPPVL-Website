// import React from 'react'
// import Header from '../Header'
// import Breadcrumb from '../Breadcumb/Breadcrumb'
// import st from '../Stadium.jpg'
// export default function AuctionPage() {
//     return (
//         <>

//             <div className="breadcrumb-container">
//                 <div className="breadcrumb-overlay">
//                     <div className="breadcrumb-content">
//                         <h1 className="breadcrumb-title">Auction 2025</h1>
//                     </div>
//                 </div>
//             </div>
//             <div>
//             </div>
//         </>
//     )
// }
import React from 'react';
import Header from '../Header';
import Breadcrumb from '../Breadcumb/Breadcrumb';
import st from '../Stadium.jpg';

// Player images
const CategoryAImage = 'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203302/auction1_nb0add.jpg';
const CategoryBImage = 'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203303/auction2_elqy8w.jpg';
const CategoryCImage = 'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203306/auction3_db2yzy.jpg';

// Gallery images
const GalleryImages = [
  'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754210859/auctionGlimpse7_oe03lm.jpg',
  'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754210858/auctionGlimpse2_jvwbaa.jpg',
  'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754210856/auctionGlimpse3_oajox9.jpg',
  'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754210849/auctionGlimpse4_yflqup.jpg',
  'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754210848/auctionGlimpse9_lip5ni.jpg',
  'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754210848/auctionGlimpse8_aaqat8.jpg',
  'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754210845/auctionGlimpse6_sd5qa4.jpg',
  'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754210845/auctionGlimpse12_bcialy.jpg',
  'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754210841/auctionGlimpse5_xucaiq.jpg',
  'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754210511/auctionGlimpse10_r1gkgv.jpg',
  'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203314/auctionGlimpse1_fwn4bm.jpg',
  'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203312/auctionGlimpse11_iaskmx.jpg'
];

const AuctionPage = () => {
  const auctionDescription = `The UPPVL 2025 Player Auction, held on July 3rd at The Gaurs Sarovar Premiere in Gaur 
  City, Noida, marked a historic moment for Indian volleyball. With 8 franchises and over 400 
  athletes vying for a spot, the atmosphere was electric—filled with strategic bidding, 
  emotional breakthroughs, and the promise of a thrilling inaugural season. Teams built their 
  squads across categories like Icon Players, Setters, Liberos, Attackers, and Emerging 
  Talent, all within a fixed budget cap. From Ayodhya Super Kings' marquee signing of 
  national star Amit Gulia to Kashi Warriors' smart grab of a clutch libero, the auction was a 
  masterclass in planning and passion. Noida Thunders leaned on experience, while 
  Muzaffarnagar Lions invested in future stars. In just 4 hours, 150 players were drafted, with 
  each franchise forming a balanced unit of 10–12 athletes, ready to take the UPPVL stage by 
  storm.`;

  const topPicks = [
    { category: 'A', image: CategoryAImage, price: '₹2.5 Lakh' },
    { category: 'B', image: CategoryBImage, price: '₹1 Lakh' },
    { category: 'C', image: CategoryCImage, price: '₹40K' }
  ];

  return (
    <>
      <div className="auction-page">
        <div className="breadcrumb-container">
          <div className="breadcrumb-overlay">
            <div className="breadcrumb-content">
              <h1 className="breadcrumb-title">UPPVL 2025 Player Auction</h1>
            </div>
          </div>
        </div>

        <div className="auction-content">
          <div className="auction-description">
            <p>{auctionDescription}</p>
          </div>

          <div className="top-picks-section">
            <h2 className="section-title breadcrumb-title">Auction Top Highlights</h2>
            
            <div className="categories-grid">
              {topPicks.map((category) => (
                <div key={category.category} className="category-card">
                  <h3 className="category-title">Category {category.category}</h3>
                  <p className="category-price">💸 {category.price} Picks</p>
                  <div className="category-image-container">
                    <div className="category-image">
                      <img src={category.image} alt={`Category ${category.category}`} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="gallery-section">
            <h2 className="section-title breadcrumb-title" style={{ marginTop: '60px' }}>Auction Glimpses</h2>
            <div className="gallery-grid">
              {GalleryImages.map((image, index) => (
                <div key={index} className="gallery-item">
                  <img src={image} alt={`Auction moment ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .auction-page {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: white;
          background-color: #0A1434;
        }

        .breadcrumb-container {
          position: relative;
          height: 300px;
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0;
        }

        .breadcrumb-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .breadcrumb-content {
          text-align: center;
          color: white;
          z-index: 1;
        }

        .breadcrumb-title {
          font-size: 3rem;
          font-weight: 700;
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .auction-content {
          max-width: 1600px;
          margin: 0 auto;
          padding: 40px 20px;
        }

        .auction-description {
          max-width: 1100px;
          margin: 0 auto 50px;
          font-style: 'poppins, sans-serif';
          font-size: 18px;
          line-height: 1.8;
          text-align: center;
          color: rgba(255, 255, 255, 0.9);
        }

        .section-title {
          color: #FFCA49;
          font-size: 2rem;
          text-align: center;
          margin-bottom: 40px;
        }

        .top-picks-section {
          margin-bottom: 60px;
        }

        .categories-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .category-card {
          text-align: center;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .category-image-container {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .category-image {
          border-radius: 8px;
          overflow: hidden;
          // box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .category-image img {
          width: 80%;
          height: auto;
          max-height: 500px;
          object-fit: contain;
          display: block;
          border: 5px solid #FFCA49;
        }

        .gallery-section {
          width: 100%;
          margin-top: 40px;
          margin-bottom: 7rem;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .gallery-item {
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease;
        }

        .gallery-item:hover {
          transform: scale(1.02);
        }

        .gallery-item img {
          width: 100%;
          height: 300px;
          object-fit: cover;
          display: block;
          border: 5px solid #FFCA49;
        }

        @media (max-width: 1200px) {
          .gallery-grid {
            gap: 20px;
          }
          
          .gallery-item img {
            height: 250px;
          }
        }

        @media (max-width: 900px) {
          .categories-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .category-image img {
            max-height: 600px;
          }

          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .breadcrumb-title {
            font-size: 2rem;
            padding-top: 3rem;
          }

          .auction-description {
            font-size: 1rem;
            padding: 0 15px;
          }

          .section-title {
            font-size: 1.5rem;
          }

          .category-title {
            font-size: 1.3rem;
          }

          .category-image img {
            max-height: 400px;
          }

          .gallery-grid {
            grid-template-columns: 1fr;
          }

          .gallery-item img {
            height: 300px;
          }
        }

        @media (max-width: 400px) {
          .breadcrumb-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default AuctionPage;