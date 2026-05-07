import { Link } from 'react-router-dom';
import { Layers, Smartphone } from 'lucide-react';
import BackButton from '../components/BackButton';
import './ThumbnailCategory.css';

const ThumbnailCategory = () => {
  return (
    <div className="thumb-category-page page-transition container">
      <BackButton />
      <div className="thumb-category-header">
        <h1 className="huge-title">THUMBNAILS</h1>
        <p className="thumb-category-subtitle">SELECT YOUR CATEGORY // CHOOSE A FORMAT</p>
      </div>

      <section className="thumb-category-grid">
        <Link to="/thumbnails" className="thumb-choice-card thumb-choice-full">
          <div className="thumb-bg-poster">
            <div className="tc-collage-grid">
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
          <div className="thumb-choice-glow"></div>
          <div className="thumb-choice-header">
            <span className="thumb-choice-number">01</span>
            <Layers size={24} />
          </div>
          <div className="thumb-choice-icon-area">
            <div className="thumb-choice-icon-ring">
              <Layers size={56} strokeWidth={1.2} />
            </div>
          </div>
          <div className="thumb-choice-info">
            <h2 className="thumb-choice-title">FULL LENGTH<br/>THUMBNAILS</h2>
            <p className="thumb-choice-desc">16:9 WIDESCREEN DESIGNS</p>
          </div>
          <div className="thumb-choice-arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </Link>

        <Link to="/short-video-thumbnails" className="thumb-choice-card thumb-choice-short">
          <div className="thumb-bg-poster">
            <div className="tc-collage-grid tc-collage-vertical">
              <img src="/images/svt-1.jpg" alt="" />
              <img src="/images/svt-2.jpg" alt="" />
              <img src="/images/svt-3.jpg" alt="" />
              <img src="/images/svt-4.jpg" alt="" />
              <img src="/images/svt-5.jpg" alt="" />
            </div>
          </div>
          <div className="thumb-choice-glow"></div>
          <div className="thumb-choice-header">
            <span className="thumb-choice-number">02</span>
            <Smartphone size={24} />
          </div>
          <div className="thumb-choice-icon-area">
            <div className="thumb-choice-icon-ring">
              <Smartphone size={56} strokeWidth={1.2} />
            </div>
          </div>
          <div className="thumb-choice-info">
            <h2 className="thumb-choice-title">SHORT VIDEO<br/>THUMBNAILS</h2>
            <p className="thumb-choice-desc">9:16 VERTICAL PREVIEWS</p>
          </div>
          <div className="thumb-choice-arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </Link>
      </section>
    </div>
  );
};

export default ThumbnailCategory;
