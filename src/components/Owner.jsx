import React from 'react'
import '../styles/Owner.scss'

function Owner({name, picture}) {
  return (
    <div className='host'>
    <figcaption className='host__owner'>
        <div className='host__owner__name'>{name}</div>
    </figcaption>
    <img src={picture} alt="pix-owner" className='host__picture' />
    </div>
  )
}

export default Owner