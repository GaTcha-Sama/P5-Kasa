import React from 'react'
import ImgBannerAbout from '../assets/img-about.png'
import '../styles/Collapse.scss'
import CollapseText from '../data/CollapseText.json'

function Collapse() {
  return (
    <div className='banner'>
        <img src={ImgBannerAbout} alt='img-banner' className='banner__img' />
        <div className='about'>
            {CollapseText.map(item => (
            <div className="about__info" key={item.id}>
                <h2>{item.title}</h2> 
                <p>{item.description}</p>                  
            </div>
            ))}
        </div>
    </div>
  )
}

export default Collapse