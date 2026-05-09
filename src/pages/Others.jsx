import BackButton from '../components/BackButton';
import './Others.css';

const Others = () => {
  return (
    <div className="others-page page-transition container">
      <BackButton />
      <h1 className="huge-title">OTHERS</h1>

      <section className="others-category">
        <h2 className="category-heading">
          <span className="text-mint">LOGOS</span>
          <div className="heading-line"></div>
        </h2>
        <div className="others-grid logos-grid">
          {[
            { id: 2, src: '/images/logo-2.png', alt: 'Delicious Kitchen Logo' },
            { id: 3, src: '/images/logo-3.png', alt: 'MAN Logo' },
            { id: 4, src: '/images/logo-4.png', alt: 'CNJ Home Buyers Logo' },
            { id: 5, src: '/images/logo-5.png', alt: 'Abdul Raheem Star Logo' },
          ].map(logo => (
            <div key={`logo-${logo.id}`} className="others-card">
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </section>

      <section className="others-category">
        <h2 className="category-heading">
          <span className="text-mint">VISITING CARDS</span>
          <div className="heading-line"></div>
        </h2>
        <div className="others-grid cards-grid">
          {[
            { id: 1, src: '/images/vc-1.png', alt: 'DanceStudio Card' },
            { id: 2, src: '/images/vc-2.png', alt: 'Manager Card' },
            { id: 3, src: '/images/vc-3.png', alt: 'Corporate Card' },
            { id: 4, src: '/images/vc-4.png', alt: 'Catering Card' },
          ].map(card => (
            <div key={`card-${card.id}`} className="others-card card-landscape">
              <img src={card.src} alt={card.alt} />
            </div>
          ))}
        </div>
      </section>


    </div>
  );
};

export default Others;
