import { useMemo } from 'react';
import { Navigate, useParams, useNavigate } from 'react-router-dom';
import { getHeroById } from '../helpers';

export const HeroPage = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  if(!id){
    return <Navigate to="marvel"/>
  }

  const hero = useMemo(() => getHeroById(id), [id]);

  const onNavigateBack = () => {

    //* Se puede poner navigate(-1) para regresar a la página previa,
    //* no obstante puede ser que no exista dicha página, entonces mejor así:
    navigate(`/${hero?.publisher === 'Marvel Comics' ? 'marvel': 'dc'}`);

  }

  if( !hero ){
    return <Navigate to="marvel"/>
  }

  return (
    <div className="row mt-4">
      <div className="col-4">
        <img 
          className="img-thumbnail animate__animated animate__fadeInLeft"
          src={`/assets/heroes/${id}.jpg`} alt={hero.superhero} 
        />
      </div>
      <div className="col-8">
        <h2>{hero.superhero}</h2>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><strong>Alter ego: </strong>{hero.alter_ego}</li>
          <li className="list-group-item"><strong>Publisher: </strong>{hero.publisher}</li>
          <li className="list-group-item"><strong>First appearance: </strong>{hero.first_appearance}</li>
        </ul>
        <div className="ms-2 mt-4">
          <h5>Characters:</h5>
          <p>{hero.characters}</p>
        </div>
        <button 
          className="btn btn-outline-primary float-end"
          onClick={ onNavigateBack }
        >
          Regresar
        </button>
      </div>
    </div>
  )
}
