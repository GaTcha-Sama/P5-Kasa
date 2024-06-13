import React from 'react';
import '../styles/FlatGrid.scss';
import '../styles/FlatCard.scss';
import Data from '../data/Data.json';
import { useNavigate } from 'react-router-dom';

// Interface pour les données d'un élément dans Data.json
interface Flat {
  id: string;
  title: string;
  cover: string;
}

function FlatGrid() {
  const navigate = useNavigate();

  // Fonction pour gérer le clic sur un élément de la grille
  const handleItemClick = (item: Flat) => {
    navigate(`/flats/${item.id}`);
  };

  return (
    <div className="grid">
      {Data.map((item: Flat) => (
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
