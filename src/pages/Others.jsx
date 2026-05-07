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
          {[1, 2, 3, 4].map(i => (
            <div key={`logo-${i}`} className="others-card">
              <img src="/images/logos.png" alt={`Logo design ${i}`} />
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
          {[1, 2, 3, 4].map(i => (
            <div key={`card-${i}`} className="others-card card-landscape">
              <img src="/images/visiting-cards.png" alt={`Visiting card ${i}`} />
            </div>
          ))}
        </div>
      </section>

      <section className="others-category">
        <h2 className="category-heading">
          <span className="text-purple">FLYERS</span>
          <div className="heading-line purple-line"></div>
        </h2>
        <div className="others-grid flyers-grid">
          {[1, 2, 3, 4, 5].map(i => (
            <div key={`flyer-${i}`} className="others-card card-flyer">
              <img src="/images/flyers.png" alt={`Flyer design ${i}`} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Others;
