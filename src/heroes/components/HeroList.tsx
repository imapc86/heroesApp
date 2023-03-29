import { FC, useMemo } from 'react';
import { Hero } from '../Interfaces/Hero.interface';
import { HeroCard } from './';

import { getHeroesByPublisher } from '../helpers';

interface Props {
  publisher:string
}

export const HeroList: FC<Props> = ({publisher}) => {

  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {
        heroes.map((heroe:Hero) => <HeroCard key={heroe.id} hero={heroe} />)
      }
    </div>
  );
}
