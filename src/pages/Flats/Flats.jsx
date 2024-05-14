import React from 'react'
import '../../styles/Flats.scss'
// import Carroussel from '../../components/Carroussel'
import Collapse from '../../components/Collapse'
// import ImgTest from '../../assets/Background-test.png'
import Data from '../../data/Data.json'

function Flats() {
  return (
    <div className='appart'>
      {Data.map(item => (
        <div className='appart__page'>
          <div className='appart__img' key={item.id}>
            <img src={item.cover} alt="carroussel" className='appart__carroussel' /> 
          </div>
          <h1 className='appart__title'>{item.title}</h1>
          <h3 className='appart__location'>{item.location}</h3>
          <div>
            {item.name} 
            {item.picture}
          </div>
        </div>
      ))}
        <Collapse />
    </div>
  )
}

export default Flats