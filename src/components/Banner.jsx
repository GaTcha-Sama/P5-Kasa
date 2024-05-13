import React from 'react'
import ImgBanner from '../assets/img-banner.png'
import '../styles/Banner.scss'

function Banner() {
  return (
    <div className='banner'>
        <img src={ImgBanner} alt='img-banner' className='banner__img' />
        <h1 className='banner__title'>Chez vous, partout et ailleurs</h1>
    </div>
  )
}

export default Banner