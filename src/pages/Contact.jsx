import { ArrowRight } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page page-transition container">
      <div className="contact-header">
        <h1 className="huge-title">CONTACT</h1>
        <p className="contact-intro">
          Ready to build something brutally beautiful? Drop a line. Let's make some noise in the void.
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="info-card">
            <h3 className="info-title">EMAIL</h3>
            <a href="mailto:hello@designer.com" className="info-value email-link">hello@designer.com</a>
          </div>

          <div className="info-card">
            <h3 className="info-title text-mint">LOCATION</h3>
            <p className="info-value">NEW YORK CITY<br/>SECTOR 4, UNDERGROUND</p>
          </div>

          <div className="info-card">
            <h3 className="info-title text-mint">SOCIALS</h3>
            <div className="social-links-vertical">
              <a href="#">INSTAGRAM</a>
              <a href="#">TWITTER</a>
              <a href="#">LINKEDIN</a>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <form className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label>NAME</label>
                <input type="text" placeholder="YOUR NAME" />
              </div>
              <div className="form-group">
                <label>EMAIL</label>
                <input type="email" placeholder="YOUR EMAIL" />
              </div>
            </div>
            
            <div className="form-group">
              <label>SUBJECT</label>
              <input type="text" placeholder="PROJECT INQUIRY" />
            </div>

            <div className="form-group">
              <label>MESSAGE</label>
              <textarea placeholder="TELL ME ABOUT YOUR PROJECT..." rows="6"></textarea>
            </div>

            <div className="form-actions">
              <button type="button" className="btn btn-primary submit-btn">
                SEND TRANSMISSION <ArrowRight size={16} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
