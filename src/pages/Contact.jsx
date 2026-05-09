import { ArrowRight } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page page-transition container">
      <div className="contact-header">
        <h1 className="huge-title">CONTACT US</h1>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="info-card">
            <h3 className="info-title">EMAIL</h3>
            <a href="mailto:Srujaneditzz19@gmail.com" className="info-value email-link">Srujaneditzz19@gmail.com</a>
          </div>

          <div className="info-card">
            <h3 className="info-title text-mint">WHATSAPP</h3>
            <a href="https://wa.me/919701855329" target="_blank" rel="noopener noreferrer" className="info-value email-link">+91 9701855329</a>
          </div>

          <div className="info-card">
            <h3 className="info-title text-mint">SOCIAL MEDIA</h3>
            <div className="social-links-vertical">
              <a href="https://www.instagram.com/srujan.editzz?igsh=MWhiMnNkdWEzZWpqMQ==" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> INSTAGRAM
              </a>

            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <div className="application-box" style={{ padding: '2.5rem', border: '1px solid var(--border-color)', borderRadius: '12px', backgroundColor: 'var(--bg-card)', position: 'relative', overflow: 'hidden' }}>
            <div className="work-together-content" style={{ 
              marginBottom: '2.5rem', 
              padding: '2rem', 
              border: '1px dashed var(--accent-mint)', 
              borderRadius: '8px', 
              backgroundColor: 'rgba(0, 210, 255, 0.05)',
              boxShadow: 'inset 0 0 15px rgba(0, 210, 255, 0.05)'
            }}>
              <h2 className="info-title text-mint" style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '1rem', letterSpacing: '1px', textTransform: 'uppercase' }}>LET'S WORK TOGETHER</h2>
              <p className="work-description" style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1.05rem', margin: '0' }}>
                Let’s collaborate to push your brand’s boundaries and unlock its true potential. While I won't claim to revolutionize every channel overnight, I guarantee you will see a measurable shift in the quality and impact of your visual presence. I am ready to help you scale—let's work together to drive the change your business deserves.
              </p>
            </div>

            <div className="form-actions" style={{ marginTop: '0rem' }}>
              <a 
                href="https://forms.gle/73XDZzGbuxVHptvF7" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary submit-btn"
                style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
              >
                APPLICATION FORM <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
