import { Play, ArrowDown } from 'lucide-react';
import BackButton from '../components/BackButton';
import './ShortVideos.css';

const shortVideosData = [
  { id: 1, title: 'NEON PULSE', duration: '00:15', glowColor: 'purple' },
  { id: 2, title: 'GLITCH CITY', duration: '00:22', glowColor: 'mint' },
  { id: 3, title: 'QUANTUM LEAP', duration: '00:30', glowColor: 'mint' },
  { id: 4, title: 'RIFET STREAMING', duration: '00:30', glowColor: 'purple' },
  { id: 5, title: 'CYBER DRIFT', duration: '00:15', glowColor: 'mint' },
  { id: 6, title: 'PIXEL DUST', duration: '00:35', glowColor: 'white' },
  { id: 7, title: 'SYNTH WAVE', duration: '00:25', glowColor: 'mint' },
  { id: 8, title: 'SYNTH WAVE', duration: '00:12', glowColor: 'white' },
];

const ShortVideos = () => {
  return (
    <div className="short-videos-page page-transition container">
      <BackButton />
      <div className="section-header">
        <h1 className="section-title">SHORT VIDEOS PAGE</h1>
        <p className="section-subtitle">HIGH-OCTANE VISUALS // SCROLL TO INGEST</p>
      </div>

      <div className="videos-grid">
        {shortVideosData.map((video) => (
          <div key={video.id} className={`video-card glow-border-${video.glowColor}`}>
            <div className="video-play-icon-small">
              <Play size={14} fill="currentColor" />
            </div>
            <div className="video-card-image">
              <img src="/images/short-videos.png" alt={video.title} />
              <div className="video-play-overlay">
                <div className="video-play-btn">
                  <Play size={32} fill="white" />
                </div>
              </div>
            </div>
            <div className="video-card-info">
              <span className="video-duration">{video.duration}</span>
              <h3 className="video-title">{video.title}</h3>
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
