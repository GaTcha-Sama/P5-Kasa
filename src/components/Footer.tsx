import React from 'react';
import '../styles/Footer.scss';
import LogoFooter from '../assets/logo-footer.png';

const Footer: React.FC = () => {
  return (
    <div className='footer'>
      <div className='footer__logo'>
        <img src={LogoFooter} alt='logo-footer' />
      </div>
      <div className='footer__txt'>© 2020 Kasa. All rights reserved</div>
    </div>
  );
};

export default Footer;
