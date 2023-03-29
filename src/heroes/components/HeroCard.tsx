import { FC } from 'react'
import { Link } from 'react-router-dom';
import { Hero } from '../Interfaces/Hero.interface';

interface Props {
  hero: Hero
}

export const HeroCard: FC<Props> = ({hero}) => {

  const heroImageUrl = `/assets/heroes/${hero.id}.jpg`;

  return (
    <div className="col-12 animate__animated animate__fadeIn">
      <div className="card mb-3" style={{maxWidth: "540px"}} >
        <div className="row g-0">
          <div className="col-md-4">
            <img src={heroImageUrl} alt={hero.superhero} className="img-fluid rounded-start"/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{ hero.superhero }</h5>
              <p className="card-text">{ hero.alter_ego }</p>
              <p className="card-text">
                {
                  (hero.alter_ego !== hero.characters && hero.characters)
                }
              </p>
              <p className="card-text">
                <small className="text-body-secondary">{hero.first_appearance}</small>
              </p>
              <Link to={`/hero/${hero.id}`}>Mas...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
