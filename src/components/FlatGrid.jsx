import React from 'react';
import '../styles/FlatGrid.scss';
import '../styles/FlatCard.scss';
import Data from '../data/Data.json';
import { useNavigate } from 'react-router-dom';

function FlatGrid() {
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    navigate(`/flats/${item.id}`);
  };

  return (
    <div className="grid">
      {Data.map((item) => (
        <div key={item.id}>
          {/* Encapsuler l'ensemble de la carte dans un bouton */}
          <button type="button" className='flat-card' onClick={() => handleItemClick(item)}>
            <img src={item.cover} alt="img-cover" className="flat-card__img" />
            <h2 className="flat-card__title">{item.title}</h2>
          </button>
        </div>
      ))}
    </div>
  );
}

export default FlatGrid;