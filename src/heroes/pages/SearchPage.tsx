import { FormEvent } from "react";
import queryString from 'query-string'
import { HeroCard } from '../components/HeroCard';
import { useForm } from '../../hooks/userForm';
import { useLocation, useNavigate } from 'react-router-dom';
import { getHeroesByName } from '../helpers/getHeroesByName';


export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const {q = ''} = queryString.parse(location.search);

  const heroes = getHeroesByName(q as string);

  const { searchText, onInputChange } = useForm({
    searchText: q as string,
  });

  const onSearchSubmit = (event: FormEvent<HTMLFormElement>) =>{

    event.preventDefault();
    if('searchText'.trim().length <= 1) return;

    navigate(`?q=${searchText}`)
  }

  return (
    <div className="mt-3">
      <h1>Search Page</h1>

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={ onSearchSubmit }>
            <input type="text" 
              placeholder="Search hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={onInputChange}
            />
            <button
              className="btn btn-primary mt-1 float-end"
            >
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div className="alert alert-primary" style={{ display: q?.length != 0 ? 'none' : 'block' }}>
            Search a hero
          </div>

          <div className="alert alert-danger" style={{ display: heroes.length == 0 && q?.length != 0 ? 'block' : 'none' }}>
            No hero with <strong>{q}</strong>
          </div>

          {
            heroes.map(hero => <HeroCard key={hero.id} hero={hero} />)
          }

        </div>
      </div>

    </div>
  )
}
