import React from 'react';
import '../styles/Banner.scss';

interface BannerProps {
  image: string;
  title?: string; // title est optionnel avec "?"
}

const Banner: React.FC<BannerProps> = ({ image, title }) => {
  return (
    <div className='banner'>
      <img src={image} alt='img-banner' className='banner__img' />
      {title && <h1 className='banner__title'>{title}</h1>}
    </div>
  );
};

export default Banner;
