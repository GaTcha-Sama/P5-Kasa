import React, { useState } from 'react'
import ArrowRight from '../assets/arrow-right.png'
import ArrowLeft from '../assets/arrow-left.png'
import '../styles/Carroussel.scss'


 function Carroussel({pictures}) {
  const [ currentPictures, setCurrentPictures] = useState(0)

  function changePictures(direction) {
    if(direction === "next") {
      setCurrentPictures((prevPicture) => (prevPicture +1) % pictures.length)
    } else if (direction === "previous") {
      setCurrentPictures((prevPicture) => prevPicture === 0 ? pictures.length -1 : prevPicture - 1)
    }
  }

  return (
    <div className='carroussel'>
        {pictures.length > 1 && (
          <img src={ArrowLeft} 
              className='carroussel__arrow-left'
              alt="arrow-left"
              onClick={() => changePictures("previous")}
          />
        )}

        <img src={pictures[currentPictures]}
              alt="pictures-next"
              className='carroussel__picture'
         />

         {pictures.length > 1 && (
          <img src={ArrowRight}
              className='carroussel__arrow-right'
              alt='arrow-right'
              onClick={() => changePictures("next")}
          />
         )}

         {pictures.length > 1 && (
          <p className='carroussel__number'>{currentPictures +1}/{pictures.length}</p>
         )}

    </div>
  )
}

export default Carroussel 