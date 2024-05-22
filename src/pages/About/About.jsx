import React from 'react'
import Collapse from '../../components/Collapse'
import Banner from '../../components/Banner'
import ImgBannerAbout from '../../assets/img-about.png'
import Data from '../../data/CollapseText.json'
import '../../styles/About.scss'

function About() {
  return (
    <div className='about-responsive'>
      <Banner image={ImgBannerAbout} />
      <section>
                {Data.map(({ title, description}, index) => (
                    <Collapse key={`${title}-${index}`}
                    collapseTitle={<h2>{title}</h2>}
                    collapseDescription={description}
                    />
                ))}
      </section>
    </div>
  )
}

export default About