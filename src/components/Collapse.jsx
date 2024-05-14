import React, { useState } from 'react';
import '../styles/Collapse.scss';
import Data from '../data/CollapseText.json';
import ArrowUp from '../assets/arrow-up.png';
import ArrowDown from '../assets/arrow-down.png';

function Collapse() {
  const [activeCollapses, setActiveCollapses] = useState([])

  const toggleCollapse = (id) => {
    setActiveCollapses((prevActiveCollapses) => {
      const updatedActiveCollapses = prevActiveCollapses.includes(id)
        ? prevActiveCollapses.filter((item) => item !== id)
        : [...prevActiveCollapses, id];
      return updatedActiveCollapses;
    })
  }

  return (
    <div className="collapse">
      {Data.map((item) => (
        <div key={item.id} className="collapse__info">
          <div className="collapse__info__header">
            <div className="collapse__info__title">{item.title}</div>
              <div className={`collapse__arrow-container ${activeCollapses.includes(item.id) ? 'active' : ''}`}
                onClick={() => toggleCollapse(item.id)} role="button"tabIndex={0} >
              <img
                src={activeCollapses.includes(item.id) ? ArrowDown : ArrowUp}
                alt={`arrow-${activeCollapses.includes(item.id) ? 'down' : 'up'}`}
                className="collapse__arrow"
              />
            </div>
          </div>
          {activeCollapses.includes(item.id) && (<div className="collapse__body">{item.description}</div>)}
          </div>
      ))}
    </div>
  )
}

export default Collapse