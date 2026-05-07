import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton';
import './Thumbnails.css';

const thumbnailData = [
  { id: 1, title: 'Recreated Suma Kanakala', subtitle: 'RAW TALKS PODCAST' },
  { id: 2, title: 'Bangalore PGs', subtitle: 'IRAN WAR EFFECTS' },
  { id: 3, title: '10 Min Workout', subtitle: 'FITNESS GUIDE' },
  { id: 4, title: 'Sankranthi Fest', subtitle: 'KONASEEMA CELEBRATION' },
  { id: 5, title: 'Recreated Latin America', subtitle: '90 DAYS TRAVEL VLOG' },
  { id: 6, title: 'Arabic Coffee (Gahwa)', subtitle: 'ISRAEL LOCAL ARABIC FOOD' },
  { id: 7, title: 'McDonald\'s vs Burger King', subtitle: 'FAST FOOD REVIEW' },
  { id: 8, title: 'Japan Street Food', subtitle: 'JAPAN VLOG' },
  { id: 9, title: 'Badrinath Divya Darshanam', subtitle: 'CHAR DHAM YATRA - DAY 8' },
];

const imageMap = {
  1: '/images/suma-raw-talks.jpg',
  2: '/images/rice-dal-pg.jpg',
  3: '/images/10-min-fitness.jpg',
  4: '/images/konaseema-sankranthi.jpg',
  5: '/images/latin-america-yatra.jpg',
  6: '/images/arabic-food.jpg',
  7: '/images/mcd-vs-bk.jpg',
  8: '/images/japan-street-food.jpg',
  9: '/images/badrinath.jpg',
};

const Thumbnails = () => {
  return (
    <div className="thumbnails-page page-transition container">
      <BackButton />
      <div className="page-header">
        <div className="page-numbers">
          <Link to="/thumbnails" className="page-num active">01</Link>
          <Link to="/posters" className="page-num">02</Link>
          <Link to="/short-videos" className="page-num">03</Link>
          <Link to="/others" className="page-num">04</Link>
        </div>
        <h1 className="section-title">FULL LENGTH THUMBNAILS</h1>
      </div>

      <div className="thumbnails-grid">
        {thumbnailData.map((project) => (
          <div key={project.id} className="thumbnail-card">
            <div className="thumbnail-image">
              <img src={imageMap[project.id]} alt={project.title} />
            </div>
            <div className="thumbnail-info">
              <h3 className="thumbnail-title">{project.title}</h3>
              <p className="thumbnail-subtitle">{project.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Thumbnails;
