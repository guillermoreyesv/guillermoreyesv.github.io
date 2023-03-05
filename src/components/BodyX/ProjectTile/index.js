import React from 'react';
import './ProjectTile.css';
import PropTypes from 'prop-types';



export default function ProjectTile(props) {
  const { src, alt, title, description, asrc, tecnologies=[] } = props;
  return (
    <a target='_blank' rel='noreferrer' href={asrc}>
      <div className="project">
        <img rel="preconnect" loading='lazy' src={src} alt={alt} className="project-preview" />
        <div className="project-details">
          <h4 className="project-title">{title}</h4>
          <p className="project-description">{description}</p>
          <div className='technologie-container'>
            {tecnologies.map(imagen => (
              <img alt={imagen.split('/').pop().split('.')[0]} key={imagen} className='technologie-icon' src={imagen} />
            ))}
            
          </div>
        </div>
      </div>
    </a>
  );
}

ProjectTile.propTypes = {
  src: PropTypes.node.isRequired,
  alt: PropTypes.node,
  title: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
  asrc: PropTypes.node.isRequired,
  tecnologies: PropTypes.node.isRequired,
};
  