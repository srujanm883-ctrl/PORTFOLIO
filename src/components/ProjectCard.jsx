import './ProjectCard.css';

const ProjectCard = ({ title, subtitle, duration, image, glowColor, size = "normal", customContent }) => {
  return (
    <div className={`project-card ${size} glow-${glowColor}`}>
      <div className="card-image-container">
        {image ? (
          <img src={image} alt={title} className="card-image" />
        ) : (
          <div className="placeholder-image"></div>
        )}
      </div>
      
      <div className="card-overlay">
        {customContent ? (
          customContent
        ) : (
          <>
            {duration && <span className="card-duration">{duration}</span>}
            <div className="card-content">
              {title && <h3 className="card-title">{title}</h3>}
              {subtitle && <p className="card-subtitle">{subtitle}</p>}
            </div>
            {duration === undefined && !title && (
              <div className="card-view-project">VIEW PROJECT</div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
