import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <p>&copy; {year} SRUJAN MANDAPATI — ALL RIGHTS RESERVED</p>
        </div>
        <div className="footer-right">
          <a href="#" className="social-link">INSTAGRAM</a>
          <a href="#" className="social-link">BEHANCE</a>
          <a href="#" className="social-link">LINKEDIN</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
