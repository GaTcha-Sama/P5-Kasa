import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../../styles/Flats.scss';
import Carroussel from '../../components/Carroussel';
import Collapse from '../../components/Collapse';
import Owner from '../../components/Owner';
import Tags from '../../components/Tags';
import Rating from '../../components/Rating';
import DataBase from '../../data/Data.json';

interface Host {
  name: string;
  picture: string;
}

interface FlatFromJSON {
  id: string;
  title: string;
  location: string;
  pictures: string[];
  tags: string[];
  host: Host;
  rating: string; // Initialement sous forme de string dans JSON
  description: string;
  equipments: string[];
}

interface Flat extends Omit<FlatFromJSON, 'rating'> {
  rating: number; // Converti en number
}

const Flats: React.FC = () => {
  const { id } = useParams<Record<string, string | undefined>>();
  const navigate = useNavigate();
  const [selectedData, setSelectedData] = useState<Flat | null>(null);

  useEffect(() => {
    if (!id) {
      navigate('*'); // Redirection si l'id est undefined
      return;
    }

    // Recherche de l'élément correspondant dans le tableau Data
    const data = DataBase.find((item: FlatFromJSON) => item.id === id);

    // Vérification si l'élément est trouvé ou non
    if (!data) {
      navigate('*'); // Redirection vers la page d'erreur si l'élément n'est pas trouvé
    } else {
      // Convertir rating en number
      const convertedData: Flat = {
        ...data,
        rating: parseFloat(data.rating),
      };
      setSelectedData(convertedData); // Met à jour les données sélectionnées dans l'état
    }
  }, [id, navigate]);

  if (!selectedData) {
    return null; // Renvoie null si les données ne sont pas encore disponibles
  }

  return (
    <div className='appart'>
      <div>
        <Carroussel pictures={selectedData.pictures} />
      </div>

      <main className='appart__header'>
        <section>
          <h1 className='appart__title'>{selectedData.title}</h1>
          <h3 className='appart__address'>{selectedData.location}</h3>
          <div>
            <Tags tags={selectedData.tags} />
          </div>
        </section>

        <section className='appart__host-stars'>
          <div className='appart__host'>
            <Owner 
              key={selectedData.id}
              name={selectedData.host.name} 
              picture={selectedData.host.picture}            
            />
            <div className='appart__host__name'></div>
            <div className='appart__host__picture'></div>
          </div>
          <div>
            <Rating rating={selectedData.rating} />
          </div>
        </section>
      </main>

      <div className="appart__collapse">
        <div className="appart__collapse__container">
          <Collapse
            collapseTitle={<h2 className="appart__collapse__title">Description</h2>}
            collapseDescription={<p>{selectedData.description}</p>} 
          />
        </div>

        <div className="appart__collapse__container">
          <Collapse 
            collapseTitle={<h2 className="appart__collapse__title">Equipements</h2>}
            collapseDescription={
              <ul className="appart__collapse__list">
                {selectedData.equipments.map((equipment, index) => (
                  <li key={`${index}-${equipment}`}>{equipment}</li>
                ))}
              </ul>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Flats;
