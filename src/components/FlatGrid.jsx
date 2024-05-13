import React from 'react'
import '../styles/FlatGrid.scss'
import '../styles/FlatCard.scss'
import Data from '../data/Data.json'
import { Link } from 'react-router-dom'

function FlatGrid() {
  return (
    <div className='grid'>
        {Data.map(item => (
        <div className="flat-card" key={item.id}>
          <img src={item.cover} alt="img-cover" className='flat-card__img' /> 
          <Link to ="./flats"><h2 className="flat-card__title">{item.title}</h2></Link>                 
        </div>
      ))}
    </div>
  )
}

export default FlatGrid