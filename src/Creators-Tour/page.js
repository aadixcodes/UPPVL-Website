import React, { useState, useEffect, useRef } from 'react';
import Header from '../Header';
import Breadcrumb from '../Breadcumb/Breadcrumb';
import st from '../Stadium.jpg';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

const CreatorsTour = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [playingVideo, setPlayingVideo] = useState(null);
  const [muted, setMuted] = useState(true);
  const videoRefs = useRef([]);

  // Mock video data (replace with your Cloudinary links)
  const videoLinks = [
    'https://res.cloudinary.com/dctkzy9nd/video/upload/v1754236437/vid1_xae86g.mp4',
    'https://res.cloudinary.com/dctkzy9nd/video/upload/v1754236436/vid2_eho5dh.mp4',
    'https://res.cloudinary.com/dctkzy9nd/video/upload/v1754236439/vid5_sgrzan.mp4',
    'https://res.cloudinary.com/dctkzy9nd/video/upload/v1754236446/vid3_lunqkj.mp4',
    'https://res.cloudinary.com/dctkzy9nd/video/upload/v1754236447/vid4_wo27ki.mp4',
    'https://res.cloudinary.com/dctkzy9nd/video/upload/v1754236573/vid8_z1jjxs.mp4',
    'https://res.cloudinary.com/dctkzy9nd/video/upload/v1754236458/vid6_mvxejb.mp4',
    'https://res.cloudinary.com/dctkzy9nd/video/upload/v1754236574/vid7_kocaqy.mp4',
    'https://res.cloudinary.com/dctkzy9nd/video/upload/v1754236580/vid9_twdwdy.mp4',
    'https://res.cloudinary.com/dctkzy9nd/video/upload/v1754236727/vid10_qabtqq.mp4',
    
  ];

  useEffect(() => {
    // Simulate loading videos
    const timer = setTimeout(() => {
      setVideos(videoLinks.map((url, index) => ({
        id: index + 1,
        url,
        title: `Creators Tour Highlight ${index + 1}`
      })));
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

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

  const toggleMute = () => {
    setMuted(!muted);
  };

  return (
    <>
      <div className="creators-tour-page">
        <div className="breadcrumb-container">
          <div className="breadcrumb-overlay">
            <div className="breadcrumb-content">
              <h1 className="breadcrumb-title">Creators Tour</h1>
            </div>
          </div>
        </div>

        <div className="ct-content">
          {loading ? (
            <div className="ct-videos-grid">
              {[...Array(8)].map((_, index) => (
                <div key={index} className="ct-video-skeleton">
                  <div className="ct-skeleton-thumbnail"></div>
                  <div className="ct-skeleton-title"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="ct-videos-grid">
              {videos.map((video) => (
                <div key={video.id} className="ct-video-card">
                  <div 
                    className="ct-video-container"
                    onClick={() => togglePlay(video.id)}
                  >
                    <video
                      ref={el => videoRefs.current[video.id - 1] = el}
                      src={video.url}
                      playsInline
                      muted={muted}
                      loop
                    />
                    <div className={`ct-play-control ${playingVideo === video.id ? 'ct-playing' : ''}`}>
                      {playingVideo === video.id ? (
                        <Pause size={48} color="#FFCA49" />
                      ) : (
                        <Play size={48} color="#FFCA49" />
                      )}
                    </div>
                    <button 
                      className="ct-mute-button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleMute();
                      }}
                    >
                      {muted ? (
                        <VolumeX size={24} color="#FFCA49" />
                      ) : (
                        <Volume2 size={24} color="#FFCA49" />
                      )}
                    </button>
                  </div>
                  <h3 className="ct-video-title">{video.title}</h3>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .creators-tour-page {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: white;
          background-color: #0A1434;
          min-height: 100vh;
        }

        .ct-breadcrumb-container {
          position: relative;
          height: 300px;
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0;
        }

        .ct-breadcrumb-overlay {
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

        .ct-breadcrumb-content {
          text-align: center;
          color: white;
          z-index: 1;
        }

        .ct-breadcrumb-title {
          font-size: 3rem;
          font-weight: 700;
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .ct-content {
          max-width: 1600px;
          margin: 0 auto;
          padding: 40px 20px;
          padding-bottom: 7rem;
        }

        .ct-videos-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 30px;
          justify-items: center;
        }

        .ct-video-card {
          width: 100%;
          max-width: 350px;
          margin-bottom: 30px;
        }

        .ct-video-container {
          position: relative;
          width: 100%;
          height: 0;
          padding-bottom: 177.78%; /* 9:16 aspect ratio for vertical videos */
          background-color: #1a2342;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
        }

        .ct-video-container video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .ct-play-control {
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
        }

        .ct-play-control.ct-playing {
          opacity: 0;
        }

        .ct-video-container:hover .ct-play-control {
          opacity: 1;
          background-color: rgba(0, 0, 0, 0.9);
        }

        .ct-mute-button {
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

        .ct-mute-button:hover {
          background-color: rgba(0, 0, 0, 0.9);
          transform: scale(1.1);
        }

        .ct-video-title {
          margin-top: 15px;
          font-size: 1.2rem;
          font-weight: 600;
          text-align: center;
          color: white;
        }

        /* Skeleton Loading */
        .ct-video-skeleton {
          width: 100%;
          max-width: 350px;
        }

        .ct-skeleton-thumbnail {
          width: 100%;
          height: 0;
          padding-bottom: 177.78%;
          background-color: #1a2342;
          border-radius: 12px;
          animation: pulse 1.5s infinite;
        }

        .ct-skeleton-title {
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
          .ct-videos-grid {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 25px;
          }
        }

        @media (max-width: 900px) {
          .ct-videos-grid {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 20px;
          }
        }

        @media (max-width: 600px) {
          .ct-breadcrumb-title {
            font-size: 2rem;
          }

          .ct-videos-grid {
            grid-template-columns: 1fr;
            max-width: 400px;
            margin: 0 auto;
          }

          .ct-video-card {
            max-width: 100%;
          }
        }

        @media (max-width: 400px) {
          .ct-breadcrumb-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default CreatorsTour;