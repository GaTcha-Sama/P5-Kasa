import React, { useState } from 'react';
import '../styles/Collapse.scss';
import ArrowUp from '../assets/arrow-up.png';
import ArrowDown from '../assets/arrow-down.png'

function Collapse({ collapseTitle, collapseDescription }) {
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
              src={isOpen ? ArrowDown : ArrowUp} 
              className="collapse__arrow-container"
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
  }
  
  export default Collapse