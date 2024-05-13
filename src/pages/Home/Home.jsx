import React from 'react'
import Banner from '../../components/Banner'
import ImgBannerHome from '../../assets/img-banner.png'
import FlatGrid from '../../components/FlatGrid'

function Home() {
  return (
    <div>
      <Banner image={ImgBannerHome} title="Chez vous, partout et ailleurs" />
      <FlatGrid />
    </div>
  ) 
}

export default Home