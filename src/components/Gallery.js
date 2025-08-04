
// import React, { useState, useEffect } from 'react';

// // Image data with categories (replace with your actual Cloudinary links)
// const galleryData = {
//   'trophy-launch': [
//     'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203227/Gallery_38_pikvvn.jpg',
//     'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203226/Gallery_37_fs6shi.jpg',
//     'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203225/Gallery_36_tynhjy.jpg',
//     'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203224/Gallery_35_nwqaio.jpg',
//     'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203223/Gallery_34_eieofw.jpg',
//     'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203222/Gallery_33_s1xnt1.jpg',
//     'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203221/Gallery_32_ujegz1.jpg',
//     'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203220/Gallery_31_hzbj6i.jpg',
//     'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203219/Gallery_30_hxgimn.jpg',
//     'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203218/Gallery_29_zcw5iv.jpg',
//     'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203218/Gallery_28_h4qwm8.jpg',
//     'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203215/Gallery_27_px5vkc.jpg',
//     'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203214/Gallery_26_cnjkb1.jpg',
//     'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203212/Gallery_25_bhnkct.jpg',
//     'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203211/Gallery_24_ebq6re.jpg',
//     'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203211/Gallery_23_azqbzo.jpg',
//     'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203210/Gallery_22_zymdyu.jpg',
//     'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203209/Gallery_21_z7ccod.jpg',
//     'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203209/Gallery_20_ccdaaf.jpg',
//     'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203208/Gallery_19_cufwws.jpg',
//     'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203207/Gallery_18_hyymyf.jpg',
//     'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203206/Gallery_17_rfoxrt.jpg',
//     'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203206/Gallery_16_ikzdc0.jpg',
//     'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203205/Gallery_15_yn0zrg.jpg',
//     'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203188/Gallery_14_b26fn6.jpg',
//     'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203187/Gallery_13_mhbppl.jpg',
//     'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203187/Gallery_12_djf6ur.jpg',
//     'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203187/Gallery_11_hsktbf.jpg',
//   ],
//   'auction': [
//     'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203047/G29_ji8rql.jpg',
//     'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203044/G30_dhzczi.jpg',
//     'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203043/G27_aofzrx.jpg',
//     'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203041/G22_gljzu3.jpg',
//     'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203041/G26_mvhbfj.jpg',
//     'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203039/G24_jcafuz.jpg',
//     'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203039/G23_ax2101.jpg',
//     'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203038/G20_tokn5j.jpg',
//     'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203038/G21_zdmam8.jpg',
//     'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203035/G13_cgcx2o.jpg',
//     'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203034/G19_xbdoq1.jpg',
//     'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203034/G17_hb23yy.jpg',
//     'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203034/G14_hihdqp.jpg',
//     'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203034/G18_lnaunx.jpg',
//     'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203033/G15_bixeil.jpg',
//     'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203031/G25_mbn94i.jpg',
//   ],
//   'trail': [
//     'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203159/G9_ucfkyw.jpg',
//     'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203158/G8_foax4t.jpg',
//     'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203157/G7_ysqfcr.jpg',
//     'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203156/G5_h20z3s.jpg',
//     'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203156/G4_o9keeb.jpg',
//     'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203153/G12_ylwmj7.jpg',
//     'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203152/G10_ku6ijf.jpg',
//     'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203152/G11_omv8rk.jpg',
//     'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203149/G3_gskh7f.jpg',
//     'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203149/G2_j5r7gu.jpg',
//     'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203148/Gallery_40_cyyflu.jpg',
//     'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203147/G1_ttayov.jpg',
//     'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203147/Gallery_39_s7vmco.jpg',
//   ],
//   'creators-tour': [
//     '',
//     ''
//   ],
//   'match-day': [
//     '',
//     '',
//     ''
//   ]
// };

// export default function Gallery() {
//   const [activeCategory, setActiveCategory] = useState('trophy-launch');
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulate loading delay
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 1500);
//     return () => clearTimeout(timer);
//   }, [activeCategory]);

//   return (
//     <div className="gallery-page" style={{ backgroundColor: '#0A1434' }}>
//       <div className="breadcrumb-container">
//         <div className="breadcrumb-overlay">
//           <div className="breadcrumb-content">
//             <h1 className="breadcrumb-title">Gallery</h1>
//           </div>
//         </div>
//       </div>

//       <div className="gallery-container">
//         {/* Filter Buttons */}
//         <div className="filter-buttons">
//           {Object.keys(galleryData).map((category) => (
//             <button
//               key={category}
//               className={`filter-button ${activeCategory === category ? 'active' : ''}`}
//               onClick={() => {
//                 setLoading(true);
//                 setActiveCategory(category);
//               }}
//             >
//               {category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
//             </button>
//           ))}
//         </div>

//         {/* Gallery Content */}
//         <div className="gallery-content">
//           {loading ? (
//             <div className="skeleton-grid">
//               {[...Array(6)].map((_, index) => (
//                 <div key={index} className="skeleton-item">
//                   <div className="skeleton-image"></div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="gallery-grid">
//               {galleryData[activeCategory].map((imgSrc, index) => (
//                 <div key={index} className="gallery-item">
//                   <img 
//                     src={imgSrc} 
//                     alt={`${activeCategory.replace('-', ' ')} ${index + 1}`}
//                     className="gallery-image"
//                     loading="lazy"
//                     width="500"
//                     height="300"
//                   />
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>

//       <style jsx>{`
//         .gallery-page {
//           min-height: 100vh;
//           color: white;
//           font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//         }

//         .breadcrumb-container {
//           position: relative;
//           height: 300px;
//           background-size: cover;
//           background-position: center;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           margin-bottom: 40px;
//         }

//         .breadcrumb-overlay {
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           background-color: rgba(0, 0, 0, 0.6);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .breadcrumb-content {
//           text-align: center;
//           color: white;
//           z-index: 1;
//         }

//         .breadcrumb-title {
//           font-size: 3rem;
//           font-weight: 700;
//           margin: 0;
//           text-transform: uppercase;
//           letter-spacing: 2px;
//         }

//         .gallery-container {
//           width: 100%;
//           max-width: 1500px;
//           margin: 0 auto;
//           padding: 0 20px 60px;
//         }

//         .filter-buttons {
//           display: flex;
//           justify-content: center;
//           flex-wrap: wrap;
//           gap: 15px;
//           margin-bottom: 30px;
//         }

//         .filter-button {
//           padding: 10px 25px;
//           font-size: 1rem;
//           border-radius: 30px;
//           border: 2px solid #FFCA49;
//           background-color: transparent;
//           color: #FFCA49;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           text-transform: capitalize;
//           font-weight: 500;
//         }

//         .filter-button:hover {
//           background-color: rgba(255, 202, 73, 0.1);
//         }

//         .filter-button.active {
//           background-color: #FFCA49;
//           color: #0A1434;
//           font-weight: 600;
//         }

//         .gallery-content {
//           width: 100%;
//         }

//         .gallery-grid {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 30px;
//         }

//         .gallery-item {
//           border-radius: 8px;
//           overflow: hidden;
//           box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
//           transition: transform 0.3s ease;
//         }

//         .gallery-item:hover {
//           transform: translateY(-5px);
//         }

//         .gallery-image {
//           width: 100%;
//           height: 300px;
//           object-fit: cover;
//           display: block;
//         }

//         /* Skeleton Loading */
//         .skeleton-grid {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 30px;
//         }

//         .skeleton-item {
//           border-radius: 8px;
//           overflow: hidden;
//         }

//         .skeleton-image {
//           width: 100%;
//           height: 300px;
//           background-color: #1a2342;
//           animation: pulse 1.5s infinite ease-in-out;
//         }

//         @keyframes pulse {
//           0%, 100% {
//             opacity: 0.6;
//           }
//           50% {
//             opacity: 0.3;
//           }
//         }

//         @media (max-width: 1200px) {
//           .gallery-grid,
//           .skeleton-grid {
//             grid-template-columns: repeat(3, 1fr);
//             gap: 20px;
//           }
//         }

//         @media (max-width: 992px) {
//           .gallery-grid,
//           .skeleton-grid {
//             grid-template-columns: repeat(2, 1fr);
//           }
//         }

//         @media (max-width: 768px) {
//           .breadcrumb-title {
//             font-size: 2.2rem;
//           }

//           .filter-buttons {
//             gap: 10px;
//           }

//           .filter-button {
//             padding: 8px 20px;
//             font-size: 0.9rem;
//           }

//           .gallery-image,
//           .skeleton-image {
//             height: 250px;
//           }
//         }

//         @media (max-width: 576px) {
//           .breadcrumb-container {
//             height: 250px;
//           }

//           .breadcrumb-title {
//             font-size: 1.8rem;
//           }

//           .filter-buttons {
//             gap: 8px;
//           }

//           .filter-button {
//             padding: 6px 15px;
//             font-size: 0.8rem;
//           }

//           .gallery-grid,
//           .skeleton-grid {
//             grid-template-columns: 1fr;
//             gap: 15px;
//           }

//           .gallery-image,
//           .skeleton-image {
//             height: 300px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';

// Image data with categories (replace with your actual Cloudinary links)
const galleryData = {
  'trial': [
    'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203159/G9_ucfkyw.jpg',
    'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203158/G8_foax4t.jpg',
    'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203157/G7_ysqfcr.jpg',
    'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203156/G5_h20z3s.jpg',
    'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203156/G4_o9keeb.jpg',
    'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203153/G12_ylwmj7.jpg',
    'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203152/G10_ku6ijf.jpg',
    'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203152/G11_omv8rk.jpg',
    'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203149/G3_gskh7f.jpg',
    'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203149/G2_j5r7gu.jpg',
    'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203148/Gallery_40_cyyflu.jpg',
    'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203147/G1_ttayov.jpg',
    'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203147/Gallery_39_s7vmco.jpg',
  ],
  'trophy-launch': [
    'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203227/Gallery_38_pikvvn.jpg',
    'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203226/Gallery_37_fs6shi.jpg',
    'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203225/Gallery_36_tynhjy.jpg',
    'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203224/Gallery_35_nwqaio.jpg',
    'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203223/Gallery_34_eieofw.jpg',
    'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203222/Gallery_33_s1xnt1.jpg',
    'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203221/Gallery_32_ujegz1.jpg',
    'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203220/Gallery_31_hzbj6i.jpg',
    'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203219/Gallery_30_hxgimn.jpg',
    'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203218/Gallery_29_zcw5iv.jpg',
    'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203218/Gallery_28_h4qwm8.jpg',
    'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203215/Gallery_27_px5vkc.jpg',
    'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203214/Gallery_26_cnjkb1.jpg',
    'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203212/Gallery_25_bhnkct.jpg',
    'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203211/Gallery_24_ebq6re.jpg',
    'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203211/Gallery_23_azqbzo.jpg',
    'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203210/Gallery_22_zymdyu.jpg',
    'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203209/Gallery_21_z7ccod.jpg',
    'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203209/Gallery_20_ccdaaf.jpg',
    'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203208/Gallery_19_cufwws.jpg',
    'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203207/Gallery_18_hyymyf.jpg',
    'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203206/Gallery_17_rfoxrt.jpg',
    'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203206/Gallery_16_ikzdc0.jpg',
    'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203205/Gallery_15_yn0zrg.jpg',
    'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203188/Gallery_14_b26fn6.jpg',
    'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203187/Gallery_13_mhbppl.jpg',
    'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203187/Gallery_12_djf6ur.jpg',
    'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203187/Gallery_11_hsktbf.jpg',
  ],
  'auction': [
    'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203047/G29_ji8rql.jpg',
    'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203044/G30_dhzczi.jpg',
    'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203043/G27_aofzrx.jpg',
    'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203041/G22_gljzu3.jpg',
    'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203041/G26_mvhbfj.jpg',
    'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203039/G24_jcafuz.jpg',
    'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203039/G23_ax2101.jpg',
    'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203038/G20_tokn5j.jpg',
    'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203038/G21_zdmam8.jpg',
    'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203035/G13_cgcx2o.jpg',
    'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203034/G19_xbdoq1.jpg',
    'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203034/G17_hb23yy.jpg',
    'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203034/G14_hihdqp.jpg',
    'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203034/G18_lnaunx.jpg',
    'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203033/G15_bixeil.jpg',
    'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754203031/G25_mbn94i.jpg',
  ],
  // 'creators-tour': [
  //   '',
  //   ''
  // ],
  'match-day': [
    '',
    '',
    ''
  ]
};

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('trial');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  // Filter out empty image URLs
  const filteredImages = galleryData[activeCategory].filter(img => img.trim() !== '');

  return (
    <div className="gallery-page" style={{ backgroundColor: '#0A1434' }}>
      <div className="breadcrumb-container">
        <div className="breadcrumb-overlay">
          <div className="breadcrumb-content">
            <h1 className="breadcrumb-title">Gallery</h1>
          </div>
        </div>
      </div>

      <div className="gallery-container">
        {/* Filter Buttons */}
        <div className="filter-buttons">
          {Object.keys(galleryData).map((category) => (
            <button
              key={category}
              className={`filter-button ${activeCategory === category ? 'active' : ''}`}
              onClick={() => {
                setLoading(true);
                setActiveCategory(category);
              }}
            >
              {category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </button>
          ))}
        </div>

        {/* Gallery Content */}
        <div className="gallery-content">
          {loading ? (
            <div className="skeleton-grid">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="skeleton-item">
                  <div className="skeleton-image"></div>
                </div>
              ))}
            </div>
          ) : filteredImages.length === 0 ? (
            <div className="no-images-message">
              <p>Images for {activeCategory.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} will be available soon</p>
            </div>
          ) : (
            <div className="gallery-grid">
              {filteredImages.map((imgSrc, index) => (
                <div key={index} className="gallery-item">
                  <img 
                    src={imgSrc} 
                    alt={`${activeCategory.replace('-', ' ')} ${index + 1}`}
                    className="gallery-image"
                    loading="lazy"
                    width="500"
                    height="300"
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="500" height="300" viewBox="0 0 500 300"%3E%3Crect fill="%231a2342" width="500" height="300"/%3E%3Ctext fill="%23ffffff" font-family="Arial" font-size="16" x="50%" y="50%" text-anchor="middle" dominant-baseline="middle"%3EImage coming soon%3C/text%3E%3C/svg%3E';
                    }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .gallery-page {
          min-height: 100vh;
          color: white;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .breadcrumb-container {
          position: relative;
          height: 300px;
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 40px;
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

        .gallery-container {
          width: 100%;
          max-width: 1700px;
          margin: 0 auto;
          padding: 0 20px 60px;
        }

        .filter-buttons {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 15px;
          margin-bottom: 30px;
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

        .gallery-content {
          width: 100%;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }

        .gallery-item {
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease;
        }

        .gallery-item:hover {
          transform: translateY(-5px);
        }

        .gallery-image {
          width: 100%;
          height: 300px;
          object-fit: cover;
          display: block;
          border: 5px solid #FFCA49;
        }

        /* No images message */
        .no-images-message {
          text-align: center;
          padding: 60px 20px;
          font-size: 1.2rem;
          color: #FFCA49;
          background-color: rgba(26, 35, 66, 0.5);
          border-radius: 8px;
          margin: 20px 0;
        }

        /* Skeleton Loading */
        .skeleton-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .skeleton-item {
          border-radius: 8px;
          overflow: hidden;
        }

        .skeleton-image {
          width: 100%;
          height: 300px;
          background-color: #1a2342;
          animation: pulse 1.5s infinite ease-in-out;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.6;
          }
          50% {
            opacity: 0.3;
          }
        }

        @media (max-width: 1200px) {
          .gallery-grid,
          .skeleton-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }
        }

        @media (max-width: 992px) {
          .gallery-grid,
          .skeleton-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .breadcrumb-title {
            font-size: 2.2rem;
          }

          .filter-buttons {
            gap: 10px;
          }

          .filter-button {
            padding: 8px 20px;
            font-size: 0.9rem;
          }

          .gallery-image,
          .skeleton-image {
            height: 250px;
          }
        }

        @media (max-width: 576px) {
          .breadcrumb-container {
            height: 250px;
          }

          .breadcrumb-title {
            font-size: 1.8rem;
          }

          .filter-buttons {
            gap: 8px;
          }

          .filter-button {
            padding: 6px 15px;
            font-size: 0.8rem;
          }

          .gallery-grid,
          .skeleton-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .gallery-image,
          .skeleton-image {
            height: 300px;
          }
        }
      `}</style>
    </div>
  );
}