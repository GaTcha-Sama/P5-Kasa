import React from 'react';
import Banner from '../../components/Banner';
import ImgBannerHome from '../src/assets/img-banner.png';
import FlatGrid from '../../components/FlatGrid';

interface BannerProps {
  image: string;
  title: string;
}

const Home: React.FC = () => {
  return (
    <div className='home'>
      <Banner image={ImgBannerHome} title="Chez vous, partout et ailleurs" />
      <FlatGrid />
    </div>
  );
};

export default Home;
