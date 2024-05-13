import React from 'react'
import Collapse from '../../components/Collapse'
import '../../styles/About.scss'
import Banner from '../../components/Banner'
import ImgBannerAbout from '../../assets/img-about.png'

function About() {
  return (
    <div>
      <Banner image={ImgBannerAbout} />
      <Collapse />
    </div>
  )
}

export default About