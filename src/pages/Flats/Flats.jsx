import React from 'react'
import '../../styles/Flats.scss'
// import Carroussel from '../../components/Carroussel'
// import Collapse from '../../components/Collapse'
import ImgTest from '../../assets/Background-test.png'
// import Data from '../../data/Data.json'

function Flats() {
  return (
    <div className='appart'>
      <img src={ImgTest} alt='appart__img' />

      <h1 className='appart__title'>Titre de la location</h1>
      <h3 className='appart__address'>Adresse de la location</h3>
      <div className='appart__tags'>
        <ul>
          <li>Tag 1</li>
          <li>Tag 2</li>
          <li>Tag 3</li>
        </ul>
      </div>
      <div className='appart__host'>
        <div className='appart__name'>Alexandre Dumas</div>
        <div className='appart__picture'></div>
      </div>
      <div className='appart__rating'></div>

      <div className='appart__collapse'>
        <div className='appart__equipments'></div>
      </div>
    </div>
  )
}

export default Flats