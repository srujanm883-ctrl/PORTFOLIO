import { Link } from 'react-router-dom';
import { Layers, Image as ImageIcon, Video, MoreHorizontal } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home page-transition container">
      <header className="hero-section new-layout">
        <div className="hero-content-wrapper">
          <div className="hero-left">
            <h1 className="hero-title">
              <span className="glitch" data-text="M.S. SRUJAN">M.S. SRUJAN</span>
            </h1>
            <div className="hero-roles">
              <p>➔ Graphic designer</p>
              <p>➔ Digital marketer</p>
            </div>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">HIRE ME</Link>
              <a href="#my-works" className="btn btn-outline" onClick={(e) => { e.preventDefault(); document.getElementById('my-works').scrollIntoView({ behavior: 'smooth' }); }}>MY WORKS</a>
            </div>
          </div>

          <div className="hero-middle">
            <div className="profile-circle">
              <img src="/images/profile.jpg" alt="M.S. Srujan" className="profile-img" />
            </div>
          </div>

          <div className="hero-right">
            <div className="about-me-box portrait-mode">
              <h2 className="about-me-title">ABOUT ME</h2>
              <p className="about-me-text">
                This is Srujan , a Graphic Designer and Digital Marketer with 1.5+ years of experience . I specialize in creating high-CTR, cinematic visuals that use strategic "visual tension" to capture attention and scale your brand's growth. By blending technical Photoshop expertise with a marketing-first approach, I convert your ideas into professional assets that drive real engagement .
              </p>
            </div>
          </div>
        </div>
      </header>
      <section id="my-works" className="portfolio-section" style={{ marginTop: '4rem' }}>
        <h2 className="section-title text-center" style={{ textAlign: 'center', marginBottom: '3rem' }}>MY WORKS</h2>
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
      </section>
    </div>
  );
};

export default Home;
