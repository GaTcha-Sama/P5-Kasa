import React from 'react'
import StarColor from '../assets/star-color.png'
import StarShadow from '../assets/star-shadow-modif.png'
import '../styles/Rating.scss'

function Rating({ rating }) {
  const maxRate = 5 

  function showStars(index) {
      if (index < rating) {
          return StarColor 
      }
      return StarShadow 
  }

  return (
      <ul className="rating">
          {Array.from({ length: maxRate }, (_, index) => (
              <li key={index}>
                  <img src={showStars(index)} alt="stars" />
              </li>
          ))}
      </ul>
  )
}

export default Rating