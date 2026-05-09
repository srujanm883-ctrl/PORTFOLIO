import { Link } from 'react-router-dom';
import { Layers, Image as ImageIcon, Video, MoreHorizontal } from 'lucide-react';
import './Portfolio.css';
import './Home.css';
const Portfolio = () => {
  return (
    <div className="portfolio-page page-transition container">
      <div className="portfolio-header">
        <h1 className="huge-title">PORTFOLIO</h1>
        <p className="portfolio-subtitle">EXPLORE MY WORK // SELECT A CATEGORY</p>
      </div>

      <div className="categories-grid">
        <Link to="/thumbnail-category" className="category-card card-dark">
          <div className="card-header">
            <span className="card-number text-secondary">01</span>
            <ImageIcon size={24} className="text-mint" />
          </div>
          <div className="card-bg-poster">
            <div className="thumbnail-collage-grid">
              <img src="/images/suma-raw-talks.jpg" alt="" />
              <img src="/images/rice-dal-pg.jpg" alt="" />
              <img src="/images/10-min-fitness.jpg" alt="" />
              <img src="/images/konaseema-sankranthi.jpg" alt="" />
              <img src="/images/latin-america-yatra.jpg" alt="" />
              <img src="/images/arabic-food.jpg" alt="" />
              <img src="/images/mcd-vs-bk.jpg" alt="" />
              <img src="/images/japan-street-food.jpg" alt="" />
              <img src="/images/badrinath.jpg" alt="" />
            </div>
          </div>
          <h2 className="category-title">THUMBNAILS</h2>
        </Link>

        <Link to="/posters" className="category-card card-dark">
          <div className="card-header">
            <span className="card-number text-secondary">02</span>
            <Layers size={24} className="text-mint" />
          </div>
          <div className="card-bg-poster">
              <div className="thumbnail-collage-grid">
                <img src="/images/poster-1.jpg" alt="" />
                <img src="/images/headphones.jpg" alt="" />
                <img src="/images/poster-3.jpg" alt="" />
                <img src="/images/poster-4.jpg" alt="" />
                <img src="/images/poster-5.jpg" alt="" />
                <img src="/images/poster-6.jpg" alt="" />
                <img src="/images/poster-7.jpg" alt="" />
                <img src="/images/poster-8.jpg" alt="" />
                <img src="/images/poster-1.jpg" alt="" />
              </div>
          </div>
          <h2 className="category-title">POSTERS</h2>
        </Link>

        <Link to="/short-videos" className="category-card card-dark">
          <div className="card-header">
            <span className="card-number text-secondary">03</span>
            <Video size={24} className="text-mint" />
          </div>
          <div className="card-bg-poster">
            <div className="thumbnail-collage-grid">
              <video src="/videos/aiera1.mp4" muted playsInline preload="metadata" />
              <video src="/videos/pb6.mp4" muted playsInline preload="metadata" />
              <video src="/videos/whatsapp-video.mp4" muted playsInline preload="metadata" />
              <video src="/videos/rifet-streaming.mp4" muted playsInline preload="metadata" />
              <video src="/videos/aiera1.mp4" muted playsInline preload="metadata" />
              <video src="/videos/pb6.mp4" muted playsInline preload="metadata" />
              <video src="/videos/whatsapp-video.mp4" muted playsInline preload="metadata" />
              <video src="/videos/rifet-streaming.mp4" muted playsInline preload="metadata" />
              <video src="/videos/aiera1.mp4" muted playsInline preload="metadata" />
            </div>
          </div>
          <h2 className="category-title">VIDEO EDITING</h2>
        </Link>

        <Link to="/others" className="category-card card-dark">
          <div className="card-header">
            <span className="card-number text-secondary">04</span>
            <MoreHorizontal size={24} className="text-mint" />
          </div>
          <div className="card-bg-poster">
            <div className="thumbnail-collage-grid">
              <img src="/images/logo-2.png" alt="" />
              <img src="/images/logo-3.png" alt="" />
              <img src="/images/logo-4.png" alt="" />
              <img src="/images/logo-5.png" alt="" />
              <img src="/images/vc-1.png" alt="" />
              <img src="/images/vc-2.png" alt="" />
              <img src="/images/logo-2.png" alt="" />
              <img src="/images/vc-3.png" alt="" />
              <img src="/images/logo-3.png" alt="" />
            </div>
          </div>
          <h2 className="category-title">OTHERS</h2>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
