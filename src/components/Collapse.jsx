import React, { useState } from 'react';
import '../styles/Collapse.scss';
import Arrow from '../assets/arrow-up.png';

function Collapse({collapseTitle , collapseDescription}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
      setIsOpen(!isOpen);
  };

  return (
      <div className="collapse">
          <div className='collapse__info'>
              <div className="collapse__info__header" onClick={handleClick}>
                  {collapseTitle}
                  <img src={Arrow}
                  className={`collapse__arrow-container ${isOpen ? "arrow-up" : "arrow-down"}`}
                  alt="arrow" />
              </div>
          </div>
          <div>
              {isOpen && (
              <div className="collapse__body">{collapseDescription}</div>
              )}
          </div>
      </div>
  );
}

export default Collapse