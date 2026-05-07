import BackButton from '../components/BackButton';
import './Posters.css';

const postersData = [
  { id: 1, title: 'Agni Ugadi', image: '/images/poster-1.jpg' },
  { id: 2, title: 'Delicious Burger', image: '/images/poster-2.jpg' },
  { id: 3, title: 'Dream House', image: '/images/poster-3.jpg' },
  { id: 4, title: 'Medical Health Centre', image: '/images/poster-4.jpg' },
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
