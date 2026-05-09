import BackButton from '../components/BackButton';
import './Posters.css';

const postersData = [
  { id: 1, title: 'Agni Ugadi', image: '/images/poster-1.jpg' },
  { id: 2, title: 'Headphones', image: '/images/headphones.jpg' },
  { id: 3, title: 'Dream House', image: '/images/poster-3.jpg' },
  { id: 4, title: 'Medical Health Centre', image: '/images/poster-4.jpg' },
  { id: 5, title: 'Event Planning', image: '/images/poster-5.jpg' },
  { id: 6, title: 'He is Risen', image: '/images/poster-6.jpg' },
  { id: 7, title: 'Sweet Lassi', image: '/images/poster-7.jpg' },
  { id: 8, title: 'Mama Ts Smokin Eats', image: '/images/poster-8.jpg' },
];

const Posters = () => {
  return (
    <div className="posters-page page-transition container">
      <BackButton />
      <h1 className="huge-title">POSTERS</h1>

      <div className="posters-grid">
        {postersData.map((poster) => (
          <div key={poster.id} className="poster-card">
            <img src={poster.image} alt={poster.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posters;
