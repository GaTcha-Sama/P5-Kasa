import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import '../../styles/Flats.scss'
import Carroussel from '../../components/Carroussel'
import Collapse from '../../components/Collapse'
import Owner from '../../components/Owner'
import Tags from '../../components/Tags'
import Rating from '../../components/Rating'
import DataBase from '../../data/Data.json'

function Flats() {
  
  const {id} = useParams()
  const navigate = useNavigate()
  const [selectedData, setSelectedData] = useState(null)

  useEffect(() => {
    // Recherche de l'élément correspondant dans le tableau Data
    const data = DataBase.find((item) => item.id === id);

    // Vérification si l'élément est trouvé ou non
    if (!data) {
        // Redirection vers la page d'erreur si l'élément n'est pas trouvé
        navigate('*');
    } else {
        setSelectedData(data); // Met à jour les données sélectionnées dans l'état
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

        <section>
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
                            {selectedData.equipments.map((equipments, index) => (
                            <li key={`${index}-${equipments}`}>{equipments}</li>
                        ))}
                        </ul>
                        }
                    />
                </div>
            </div>
    </div>
  )
}

export default Flats