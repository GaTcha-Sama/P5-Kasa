import React from 'react';
import Collapse from '../../components/Collapse';
import Banner from '../../components/Banner';
import ImgBannerAbout from '../../assets/img-about.png'; // Assurez-vous que le chemin est correct
import Data from '../../data/CollapseText.json';
import '../../styles/About.scss';

// Interface pour les données du fichier JSON
interface CollapseData {
  title: string;
  description: string;
}

const About: React.FC = () => {
  return (
    <div className='about-responsive'>
      <Banner image={ImgBannerAbout} title="Titre du banner" /> {/* Assurez-vous de passer le titre */}
      <section>
        {Data.map(({ title, description }: CollapseData, index: number) => (
          <Collapse
            key={`${title}-${index}`}
            collapseTitle={<h2>{title}</h2>}
            collapseDescription={description}
          />
        ))}
      </section>
    </div>
  );
};

export default About;
