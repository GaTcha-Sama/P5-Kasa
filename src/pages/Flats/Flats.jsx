import React from 'react'
import '../../styles/Flats.scss'
// import Carroussel from '../../components/Carroussel'
// import Collapse from '../../components/Collapse'
// import ImgTest from '../../assets/Background-test.png'
import Data from '../../data/Data.json'
import Carroussel from '../../components/Carroussel'

function Flats() {
  return (
    <div className='appart'>
      <Carroussel pictures={Data.pictures} />

      <h1>{Data.title}</h1>
      <h3>{Data.location}</h3>
      <div>

      </div>
    </div>
  )
}

export default Flats