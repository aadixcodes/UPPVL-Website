// import React, { useState, useEffect, useRef } from 'react';
// import Header from '../Header';
// import Breadcrumb from '../Breadcumb/Breadcrumb';
// import st from '../Stadium.jpg';
// import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

// const UPPVLTV = () => {
//   const [videos, setVideos] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [playingVideo, setPlayingVideo] = useState(null);
//   const [muted, setMuted] = useState(true);
//   const videoRefs = useRef([]);

//   // Mock video data (replace with your Cloudinary links)
//   const videoLinks = [
//     'https://res.cloudinary.com/dctkzy9nd/video/upload/v1754202930/vid8_nqanbk.mp4',
//     'https://res.cloudinary.com/dctkzy9nd/video/upload/v1754202929/vid7_komoel.mp4',
//     'https://res.cloudinary.com/dctkzy9nd/video/upload/v1754202923/vid1_fajuht.mp4',
//     'https://res.cloudinary.com/dctkzy9nd/video/upload/v1754202921/vid2_ekg0jr.mp4',
//     'https://res.cloudinary.com/dctkzy9nd/video/upload/v1754202919/vid5_qhgcda.mp4',
//     'https://res.cloudinary.com/dctkzy9nd/video/upload/v1754202918/vid3_cmpl6t.mp4',
//     'https://res.cloudinary.com/dctkzy9nd/video/upload/v1754202916/vid4_z2axiz.mp4',
//     'https://res.cloudinary.com/dctkzy9nd/video/upload/v1754202906/vid6_murmdg.mp4'
//   ];

//   useEffect(() => {
//     // Simulate loading videos
//     const timer = setTimeout(() => {
//       setVideos(videoLinks.map((url, index) => ({
//         id: index + 1,
//         url,
//         title: `UPPVL Highlight ${index + 1}`
//       })));
//       setLoading(false);
//     }, 1500);

//     return () => clearTimeout(timer);
//   }, []);

//   const togglePlay = (videoId) => {
//     // Pause all videos first
//     videoRefs.current.forEach(video => {
//       if (video) video.pause();
//     });

//     if (playingVideo === videoId) {
//       setPlayingVideo(null);
//     } else {
//       const video = videoRefs.current[videoId - 1];
//       if (video) {
//         video.play()
//           .then(() => setPlayingVideo(videoId))
//           .catch(error => console.error('Error playing video:', error));
//       }
//     }
//   };

//   const toggleMute = () => {
//     setMuted(!muted);
//   };

//   return (
//     <>
//       <div className="uppvl-tv-page">
//         <div className="breadcrumb-container">
//           <div className="breadcrumb-overlay">
//             <div className="breadcrumb-content">
//               <h1 className="breadcrumb-title">UPPVL TV</h1>
//             </div>
//           </div>
//         </div>

//         <div className="tv-content">
//           {loading ? (
//             <div className="videos-grid">
//               {[...Array(8)].map((_, index) => (
//                 <div key={index} className="video-skeleton">
//                   <div className="skeleton-thumbnail"></div>
//                   <div className="skeleton-title"></div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="videos-grid">
//               {videos.map((video) => (
//                 <div key={video.id} className="video-card">
//                   <div 
//                     className="video-container"
//                     onClick={() => togglePlay(video.id)}
//                   >
//                     <video
//                       ref={el => videoRefs.current[video.id - 1] = el}
//                       src={video.url}
//                       playsInline
//                       muted={muted}
//                       loop
//                     />
//                     <div className={`play-control ${playingVideo === video.id ? 'playing' : ''}`}>
//                       {playingVideo === video.id ? (
//                         <Pause size={48} color="#FFCA49" />
//                       ) : (
//                         <Play size={48} color="#FFCA49" />
//                       )}
//                     </div>
//                     <button 
//                       className="mute-button"
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         toggleMute();
//                       }}
//                     >
//                       {muted ? (
//                         <VolumeX size={24} color="#FFCA49" />
//                       ) : (
//                         <Volume2 size={24} color="#FFCA49" />
//                       )}
//                     </button>
//                   </div>
//                   <h3 className="video-title">{video.title}</h3>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>

//       <style jsx>{`
//         .uppvl-tv-page {
//           font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//           color: white;
//           background-color: #0A1434;
//           min-height: 100vh;
//         }

//         .breadcrumb-container {
//           position: relative;
//           height: 300px;
//           background-size: cover;
//           background-position: center;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           margin-bottom: 0;
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

//         .tv-content {
//           max-width: 1600px;
//           margin: 0 auto;
//           padding: 40px 20px;
//           padding-bottom: 7rem;
//         }

//         .videos-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
//           gap: 30px;
//           justify-items: center;
//         }

//         .video-card {
//           width: 100%;
//           max-width: 350px;
//           margin-bottom: 30px;
//         }

//         .video-container {
//           position: relative;
//           width: 100%;
//           height: 0;
//           padding-bottom: 177.78%; /* 9:16 aspect ratio for vertical videos */
//           background-color: #1a2342;
//           border-radius: 12px;
//           overflow: hidden;
//           cursor: pointer;
//           box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
//         }

//         .video-container video {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//         }

//         .play-control {
//           position: absolute;
//           top: 50%;
//           left: 50%;
//           transform: translate(-50%, -50%);
//           width: 80px;
//           height: 80px;
//           background-color: rgba(0, 0, 0, 0.7);
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           transition: all 0.3s ease;
//           opacity: 1;
//         }

//         .play-control.playing {
//           opacity: 0;
//         }

//         .video-container:hover .play-control {
//           opacity: 1;
//           background-color: rgba(0, 0, 0, 0.9);
//         }

//         .mute-button {
//           position: absolute;
//           bottom: 15px;
//           right: 15px;
//           width: 40px;
//           height: 40px;
//           background-color: rgba(0, 0, 0, 0.7);
//           border: none;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//           z-index: 2;
//           transition: all 0.3s ease;
//         }

//         .mute-button:hover {
//           background-color: rgba(0, 0, 0, 0.9);
//           transform: scale(1.1);
//         }

//         .video-title {
//           margin-top: 15px;
//           font-size: 1.2rem;
//           font-weight: 600;
//           text-align: center;
//           color: white;
//         }

//         /* Skeleton Loading */
//         .video-skeleton {
//           width: 100%;
//           max-width: 350px;
//         }

//         .skeleton-thumbnail {
//           width: 100%;
//           height: 0;
//           padding-bottom: 177.78%;
//           background-color: #1a2342;
//           border-radius: 12px;
//           animation: pulse 1.5s infinite;
//         }

//         .skeleton-title {
//           width: 80%;
//           height: 20px;
//           margin: 15px auto 0;
//           background-color: #1a2342;
//           border-radius: 4px;
//           animation: pulse 1.5s infinite;
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
//           .videos-grid {
//             grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
//             gap: 25px;
//           }
//         }

//         @media (max-width: 900px) {
//           .videos-grid {
//             grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
//             gap: 20px;
//           }
//         }

//         @media (max-width: 600px) {
//           .breadcrumb-title {
//             font-size: 2rem;
//           }

//           .videos-grid {
//             grid-template-columns: 1fr;
//             max-width: 400px;
//             margin: 0 auto;
//           }

//           .video-card {
//             max-width: 100%;
//           }
//         }

//         @media (max-width: 400px) {
//           .breadcrumb-title {
//             font-size: 1.5rem;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default UPPVLTV;


import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

const VideoGallery = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [playingVideo, setPlayingVideo] = useState(null);
  const [muted, setMuted] = useState(true);
  const [activeCategory, setActiveCategory] = useState('uppvl-tv');
  const videoRefs = useRef([]);


// 'https://res.cloudinary.com/dctkzy9nd/video/upload/v1754202930/vid8_nqanbk.mp4',
//     'https://res.cloudinary.com/dctkzy9nd/video/upload/v1754202929/vid7_komoel.mp4',
//     'https://res.cloudinary.com/dctkzy9nd/video/upload/v1754202923/vid1_fajuht.mp4',
//     'https://res.cloudinary.com/dctkzy9nd/video/upload/v1754202921/vid2_ekg0jr.mp4',
//     'https://res.cloudinary.com/dctkzy9nd/video/upload/v1754202919/vid5_qhgcda.mp4',
//     '',
//     '',
//     ''


  // Video data with thumbnails for both categories
  const videoData = {
    'uppvl-tv': [
      {
        id: 1,
        url: 'https://res.cloudinary.com/dctkzy9nd/video/upload/v1754202930/vid8_nqanbk.mp4',
        thumbnail: 'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754256873/thumb1_kndzi9.png',
        title: 'UPPVL Highlight 1'
      },
      {
        id: 2,
        url: 'https://res.cloudinary.com/dctkzy9nd/video/upload/v1754202929/vid7_komoel.mp4',
        thumbnail: 'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754256874/thumb2_fgdgnq.png',
        title: 'UPPVL Highlight 2'
      },
      {
        id: 3,
        url: 'https://res.cloudinary.com/dctkzy9nd/video/upload/v1754202923/vid1_fajuht.mp4',
        thumbnail: 'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754256875/thumb3_kbi42t.png',
        title: 'UPPVL Highlight 2'
      },
      {
        id: 4,
        url: 'https://res.cloudinary.com/dctkzy9nd/video/upload/v1754202921/vid2_ekg0jr.mp4',
        thumbnail: 'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754256872/thumb4_vblxt6.png',
        title: 'UPPVL Highlight 2'
      },
      {
        id: 5,
        url: 'https://res.cloudinary.com/dctkzy9nd/video/upload/v1754202919/vid5_qhgcda.mp4',
        thumbnail: 'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754256873/thumb5_madp7z.png',
        title: 'UPPVL Highlight 2'
      },
      {
        id: 6,
        url: 'https://res.cloudinary.com/dctkzy9nd/video/upload/v1754202918/vid3_cmpl6t.mp4',
        thumbnail: 'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754256884/thumb6_vxl8nw.png',
        title: 'UPPVL Highlight 2'
      },
      {
        id: 7,
        url: 'https://res.cloudinary.com/dctkzy9nd/video/upload/v1754202916/vid4_z2axiz.mp4',
        thumbnail: 'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754256945/thumb7_wjlth9.png',
        title: 'UPPVL Highlight 2'
      },
      {
        id: 8,
        url: 'https://res.cloudinary.com/dctkzy9nd/video/upload/v1754202906/vid6_murmdg.mp4',
        thumbnail: 'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754256872/thumb8_h8xsaj.png',
        title: 'UPPVL Highlight 2'
      },
    ],


    'creators-tour': [
      {
        id: 1,
        url: 'https://res.cloudinary.com/dctkzy9nd/video/upload/v1754236437/vid1_xae86g.mp4',
        thumbnail: 'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754256854/ctthumb1_b06z7e.png',
        title: 'Creators Tour Highlight 1'
      },
      {
        id: 2,
        url: 'https://res.cloudinary.com/dctkzy9nd/video/upload/v1754236436/vid2_eho5dh.mp4',
        thumbnail: 'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754256853/ctthumb2_oqcypr.png',
        title: 'Creators Tour Highlight 2'
      },
      {
        id: 3,
        url: 'https://res.cloudinary.com/dctkzy9nd/video/upload/v1754236439/vid5_sgrzan.mp4',
        thumbnail: 'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754256853/ctthumb3_w22bei.png',
        title: 'Creators Tour Highlight 2'
      },
      {
        id: 4,
        url: 'https://res.cloudinary.com/dctkzy9nd/video/upload/v1754236446/vid3_lunqkj.mp4',
        thumbnail: 'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754256854/ctthumb4_b8jrhh.png',
        title: 'Creators Tour Highlight 2'
      },
      {
        id: 5,
        url: 'https://res.cloudinary.com/dctkzy9nd/video/upload/v1754236447/vid4_wo27ki.mp4',
        thumbnail: 'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754256856/ctthumb5_u8fd76.png',
        title: 'Creators Tour Highlight 2'
      },
      {
        id: 6,
        url: 'https://res.cloudinary.com/dctkzy9nd/video/upload/v1754236573/vid8_z1jjxs.mp4',
        thumbnail: 'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754256855/ctthumb6_lmlsjg.png',
        title: 'Creators Tour Highlight 2'
      },
      {
        id: 7,
        url: 'https://res.cloudinary.com/dctkzy9nd/video/upload/v1754236458/vid6_mvxejb.mp4',
        thumbnail: 'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754256856/ctthumb7_yew8e7.png',
        title: 'Creators Tour Highlight 2'
      },
      {
        id: 8,
        url: 'https://res.cloudinary.com/dctkzy9nd/video/upload/v1754236574/vid7_kocaqy.mp4',
        thumbnail: 'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754256855/ctthumb8_u2m7rv.png',
        title: 'Creators Tour Highlight 2'
      },
      {
        id: 9,
        url: 'https://res.cloudinary.com/dctkzy9nd/video/upload/v1754236580/vid9_twdwdy.mp4',
        thumbnail: 'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754256854/ctthumb9_hwvafv.png',
        title: 'Creators Tour Highlight 2'
      },
      {
        id: 10,
        url: 'https://res.cloudinary.com/dctkzy9nd/video/upload/v1754236727/vid10_qabtqq.mp4',
        thumbnail: 'https://res.cloudinary.com/dctkzy9nd/image/upload/v1754256852/ctthumb10_qi51xr.png',
        title: 'Creators Tour Highlight 2'
      },
    ]
  };

  useEffect(() => {
    // Simulate loading videos
    const timer = setTimeout(() => {
      setVideos(videoData[activeCategory]);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [activeCategory]);

  const togglePlay = (videoId) => {
    // Pause all videos first
    videoRefs.current.forEach(video => {
      if (video) video.pause();
    });

    if (playingVideo === videoId) {
      setPlayingVideo(null);
    } else {
      const video = videoRefs.current[videoId - 1];
      if (video) {
        video.play()
          .then(() => setPlayingVideo(videoId))
          .catch(error => console.error('Error playing video:', error));
      }
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    setMuted(!muted);
  };

  return (
    <>
      <div className="uppvl-tv-page">
        <div className="breadcrumb-container">
          <div className="breadcrumb-overlay">
            <div className="breadcrumb-content">
              <h1 className="breadcrumb-title">UPPVL TV</h1>
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="filter-buttons">
          <button
            className={`filter-button ${activeCategory === 'uppvl-tv' ? 'active' : ''}`}
            onClick={() => {
              setLoading(true);
              setPlayingVideo(null);
              setActiveCategory('uppvl-tv');
            }}
          >
            Trophy Launch & Auction
          </button>
          <button
            className={`filter-button ${activeCategory === 'creators-tour' ? 'active' : ''}`}
            onClick={() => {
              setLoading(true);
              setPlayingVideo(null);
              setActiveCategory('creators-tour');
            }}
          >
            Creators Tour
          </button>
        </div>

        <div className="tv-content">
          {loading ? (
            <div className="videos-grid">
              {[...Array(8)].map((_, index) => (
                <div key={index} className="video-skeleton">
                  <div className="skeleton-thumbnail"></div>
                  {/* <div className="skeleton-title"></div> */}
                </div>
              ))}
            </div>
          ) : (
            <div className="videos-grid">
              {videos.map((video) => (
                <div key={video.id} className="video-card">
                  <div 
                    className="video-container"
                    onClick={() => togglePlay(video.id)}
                  >
                    <video
                      ref={el => videoRefs.current[video.id - 1] = el}
                      src={video.url}
                      playsInline
                      muted={muted}
                      loop
                      style={{ display: playingVideo === video.id ? 'block' : 'none' }}
                    />
                    <img
                      src={video.thumbnail}
                      alt="Video thumbnail"
                      className="video-thumbnail"
                      style={{ display: playingVideo === video.id ? 'none' : 'block' }}
                    />
                    <div className={`play-control ${playingVideo === video.id ? 'playing' : ''}`}>
                      {playingVideo === video.id ? (
                        <Pause size={48} color="#FFCA49" />
                      ) : (
                        <Play size={48} color="#FFCA49" />
                      )}
                    </div>
                    <button 
                      className="mute-button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleMute(e);
                      }}
                    >
                      {muted ? (
                        <VolumeX size={24} color="#FFCA49" />
                      ) : (
                        <Volume2 size={24} color="#FFCA49" />
                      )}
                    </button>
                  </div>
                  {/* <h3 className="video-title">{video.title}</h3> */}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .uppvl-tv-page {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: white;
          background-color: #0A1434;
          min-height: 100vh;
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

        /* Filter Buttons */
        .filter-buttons {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin: 20px 0;
          padding: 0 20px;
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
          font-weight: 500;
        }

        .filter-button.active {
          background-color: #FFCA49;
          color: #0A1434;
          font-weight: 600;
        }

        .tv-content {
          max-width: 1600px;
          margin: 0 auto;
          padding: 40px 20px;
          padding-bottom: 7rem;
        }

        .videos-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 30px;
          justify-items: center;
        }

        .video-card {
          width: 100%;
          max-width: 350px;
          margin-bottom: 30px;
        }

        .video-container {
          position: relative;
          width: 100%;
          height: 0;
          padding-bottom: 177.78%;
          background-color: #1a2342;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
        }

        .video-container video,
        .video-thumbnail {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .play-control {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80px;
          height: 80px;
          background-color: rgba(0, 0, 0, 0.7);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          opacity: 1;
          z-index: 2;
        }

        .play-control.playing {
          opacity: 0;
        }

        .video-container:hover .play-control {
          opacity: 1;
          background-color: rgba(0, 0, 0, 0.9);
        }

        .mute-button {
          position: absolute;
          bottom: 15px;
          right: 15px;
          width: 40px;
          height: 40px;
          background-color: rgba(0, 0, 0, 0.7);
          border: none;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 2;
          transition: all 0.3s ease;
        }

        .mute-button:hover {
          background-color: rgba(0, 0, 0, 0.9);
          transform: scale(1.1);
        }

        .video-title {
          margin-top: 15px;
          font-size: 1.2rem;
          font-weight: 600;
          text-align: center;
          color: white;
        }

        /* Skeleton Loading */
        .video-skeleton {
          width: 100%;
          max-width: 350px;
        }

        .skeleton-thumbnail {
          width: 100%;
          height: 0;
          padding-bottom: 177.78%;
          background-color: #1a2342;
          border-radius: 12px;
          animation: pulse 1.5s infinite;
        }

        .skeleton-title {
          width: 80%;
          height: 20px;
          margin: 15px auto 0;
          background-color: #1a2342;
          border-radius: 4px;
          animation: pulse 1.5s infinite;
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
          .videos-grid {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 25px;
          }
        }

        @media (max-width: 900px) {
          .videos-grid {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 20px;
          }
        }

        @media (max-width: 600px) {
          .breadcrumb-title {
            font-size: 2rem;
          }

          .filter-buttons {
            flex-direction: column;
            align-items: center;
          }

          .videos-grid {
            grid-template-columns: 1fr;
            max-width: 400px;
            margin: 0 auto;
          }

          .video-card {
            max-width: 100%;
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

export default VideoGallery;