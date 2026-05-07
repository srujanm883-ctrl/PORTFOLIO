import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton';
import './ShortVideoThumbnails.css';

const shortVideoThumbData = [
  { id: 1, glowColor: 'yellow', size: 'tall', image: '/images/svt-1.jpg' },
  { id: 2, glowColor: 'yellow', size: 'medium', image: '/images/svt-2.jpg' },
  { id: 3, glowColor: 'purple', size: 'medium', image: '/images/svt-3.jpg' },
  { id: 4, glowColor: 'blue', size: 'tall', image: '/images/svt-4.jpg' },
  { id: 5, glowColor: 'blue', size: 'tall', image: '/images/svt-5.jpg' },
  { id: 6, glowColor: 'red', size: 'medium', image: '/images/svt-6.jpg' },
  { id: 7, glowColor: 'orange', size: 'tall', image: '/images/svt-7.jpg' },
  { id: 8, glowColor: 'purple', size: 'tall', image: '/images/svt-8.jpg' },
  { id: 9, glowColor: 'blue', size: 'medium', image: '/images/svt-9.jpg' },
  { id: 10, glowColor: 'yellow', size: 'tall', image: '/images/svt-10.jpg' },
];

const ShortVideoThumbnails = () => {
  return (
    <div className="svt-page page-transition container">
      <BackButton />
      <div className="svt-header">
        <div className="page-numbers">
          <Link to="/thumbnails" className="page-num">01</Link>
          <Link to="/posters" className="page-num">02</Link>
          <Link to="/short-video-thumbnails" className="page-num active">03</Link>
          <Link to="/others" className="page-num">04</Link>
        </div>
        <div>
          <h1 className="section-title">SHORT VIDEO<br/>THUMBNAILS</h1>
          <p className="svt-subtitle">PIXEL PERFECT PREVIEWS // 2024 COLLECTION</p>
        </div>
      </div>

      <div className="svt-masonry">
        {shortVideoThumbData.map((item) => (
          <div
            key={item.id}
            className={`svt-card svt-glow-${item.glowColor} svt-size-${item.size}`}
          >
            <div className="svt-card-inner">
              <img
                src={item.image}
                alt={`Short video thumbnail ${item.id}`}
                className="svt-card-img"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShortVideoThumbnails;
