import React from 'react'
import '../styles/FlatGrid.scss'
import '../styles/FlatCard.scss'
import Data from '../data/Data.json'

function FlatGrid() {
  return (
    <div className='grid'>
        {Data.map(item => (
        <div className="flat-card" key={item.id}>
          <img src={item.cover} alt="img-cover" className='flat-card__img' /> 
          <h2 className="flat-card__title">{item.title}</h2>                   
        </div>
      ))}
    </div>
  )
}

export default FlatGrid