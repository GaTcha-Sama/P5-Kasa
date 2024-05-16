import React from 'react'
import '../styles/Tags.scss'

function Tags({tags}) {
  return (
    <ul className='tags'>
      {tags.map((tag, index) =>
        <li key={index}>{tag}</li>)}
    </ul>
  )
}

export default Tags