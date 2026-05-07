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
              <img src="/images/poster-2.jpg" alt="" />
              <img src="/images/poster-3.jpg" alt="" />
              <img src="/images/poster-4.jpg" alt="" />
              <img src="/images/poster-1.jpg" alt="" />
              <img src="/images/poster-2.jpg" alt="" />
              <img src="/images/poster-3.jpg" alt="" />
              <img src="/images/poster-4.jpg" alt="" />
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
              <img src="/images/svt-1.jpg" alt="" />
              <img src="/images/svt-2.jpg" alt="" />
              <img src="/images/svt-3.jpg" alt="" />
              <img src="/images/svt-4.jpg" alt="" />
              <img src="/images/svt-5.jpg" alt="" />
              <img src="/images/svt-6.jpg" alt="" />
              <img src="/images/svt-7.jpg" alt="" />
              <img src="/images/svt-8.jpg" alt="" />
              <img src="/images/svt-9.jpg" alt="" />
            </div>
          </div>
          <h2 className="category-title">SHORT VIDEOS</h2>
        </Link>

        <Link to="/others" className="category-card card-dark">
          <div className="card-header">
            <span className="card-number text-secondary">04</span>
            <MoreHorizontal size={24} className="text-mint" />
          </div>
          <div className="card-bg-poster">
            <div className="thumbnail-collage-grid">
              <img src="/images/logos.png" alt="" />
              <img src="/images/visiting-cards.png" alt="" />
              <img src="/images/flyers.png" alt="" />
              <img src="/images/logos.png" alt="" />
              <img src="/images/visiting-cards.png" alt="" />
              <img src="/images/flyers.png" alt="" />
              <img src="/images/logos.png" alt="" />
              <img src="/images/visiting-cards.png" alt="" />
              <img src="/images/flyers.png" alt="" />
            </div>
          </div>
          <h2 className="category-title">OTHERS</h2>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
