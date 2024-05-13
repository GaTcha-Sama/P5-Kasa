import React, { useState } from 'react';
import '../styles/Collapse.scss'; 
import Data from '../data/CollapseText.json'; 
import ArrowUp from '../assets/arrow-up.png';
import ArrowDown from '../assets/arrow-down.png';

function Collapse() { 
  const [activeCollapses, setActiveCollapses] = useState([]); // Utiliser un tableau pour stocker les éléments actifs
  const [arrowStates, setArrowStates] = useState({});

  const toggleCollapse = (id) => { 
    if (activeCollapses.includes(id)) {
      // Si l'élément est déjà actif, le retirer du tableau des actifs
      setActiveCollapses(activeCollapses.filter(item => item !== id));
    } else {
      // Sinon, l'ajouter au tableau des actifs
      setActiveCollapses([...activeCollapses, id]);
    }

    // Mettre à jour l'état de la flèche pour cet élément
    setArrowStates(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  return (
    <div className="collapse">
      {Data.map(item => (
        <div key={item.id} className="collapse__info">
          <div
            className={`collapse__info__header ${activeCollapses.includes(item.id) ? 'active' : ''}`}
            onClick={() => toggleCollapse(item.id)}
          >
            {item.title} {arrowStates[item.id] ? <img src={ArrowDown} alt="arrow-down" className='collapse__arrow-down' /> : <img src={ArrowUp} alt="arrow-up" className='collapse__arrow-up' />}
          </div>
          {activeCollapses.includes(item.id) && (
            <div className="collapse__body">
              {item.description} 
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Collapse;