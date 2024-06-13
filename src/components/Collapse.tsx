import React, { useState } from 'react';
import '../styles/Collapse.scss';
import Arrow from '../assets/arrow-up.png';

interface CollapseProps {
  collapseTitle: React.ReactNode; // React.ReactNode pour accepter tout élément React valide
  collapseDescription: string; // Supposant que collapseDescription est une chaîne de caractères
}

const Collapse: React.FC<CollapseProps> = ({ collapseTitle, collapseDescription }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className="collapse">
      <div className="collapse__info">
        <div className="collapse__info__header">
          {collapseTitle}
          <img 
            src={Arrow} 
            className={`collapse__arrow-container ${isOpen ? 'rotate' : ''}`}
            alt="arrow" 
            onClick={handleClick}
          />
        </div>
      </div>
      <div>
        {isOpen && (
          <div className="collapse__body">
            <p>{collapseDescription}</p>
          </div>
        )}
      </div>
    </div>
  );
};
