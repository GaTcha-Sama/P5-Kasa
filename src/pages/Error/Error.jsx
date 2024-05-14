import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Error.scss'

function Error() {
  return (
    <div className='error'>
      <h1 className='error__number'>404</h1>
      <h2 className='error__msg'>Oups! La page que vous demandez n'existe pas</h2>
      <Link to="/"><p className='error__return'>Retourner sur la page d'accueil</p></Link>
    </div>
  )
}

export default Error