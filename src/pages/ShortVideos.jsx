import { Play, ArrowDown } from 'lucide-react';
import BackButton from '../components/BackButton';
import './ShortVideos.css';

const shortVideosData = [
  { id: 1, title: 'Reference Video', duration: '00:15', glowColor: 'purple', videoUrl: '/videos/aiera1.mp4' },
  { id: 2, title: 'GLITCH CITY', duration: '00:22', glowColor: 'mint', videoUrl: '/videos/pb6.mp4' },
  { id: 3, title: 'WhatsApp Video', duration: '00:30', glowColor: 'mint', videoUrl: '/videos/whatsapp-video.mp4' },
  { id: 4, title: 'RIFET STREAMING', duration: '00:30', glowColor: 'purple', videoUrl: '/videos/rifet-streaming.mp4' },
];

const ShortVideos = () => {
  return (
    <div className="short-videos-page page-transition container">
      <BackButton />
      <div className="section-header">
        <h1 className="section-title">VIDEO EDITING</h1>
        <p className="section-subtitle">HIGH-OCTANE VISUALS // SCROLL TO INGEST</p>
      </div>

      <div className="videos-grid">
        {shortVideosData.map((video) => (
          <div key={video.id} className={`video-card glow-border-${video.glowColor}`}>

            <div className="video-card-image">
              {video.videoUrl ? (
                <video src={video.videoUrl} controls playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                <img src="/images/short-videos.png" alt={video.title} />
              )}
              {!video.videoUrl && (
                <div className="video-play-overlay">
                  <div className="video-play-btn">
                    <Play size={32} fill="white" />
                  </div>
                </div>
              )}
            </div>

          </div>
        ))}
      </div>

      <div className="load-more-section">
        <button className="btn btn-outline-mint load-more-btn">
          LOAD MORE FRAGMENTS <ArrowDown size={16} />
        </button>
      </div>
    </div>
  );
};

export default ShortVideos;
