import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import avatar from '../assets/images/doctor.jpg';
import { ContextGlobal } from './utils/global.context'


export const Card = ({ dentist }) => {

  const { state, dispatch } = useContext( ContextGlobal );
  const [ favoriteState, setFavoriteState ] = useState(state.favorites.includes(dentist.id));

  const onToggleFavorite = () => {
    const isCurrentlyFavorite = state.favorites.includes(dentist.id);

    if (isCurrentlyFavorite) {
        const updatedFavorites = state.favorites.filter(favId => favId !== dentist.id);
        dispatch({ type: 'TOGGLE_FAVORITE', payload: updatedFavorites });
        setFavoriteState(false);
    } else {
        const updatedFavorites = [...state.favorites, dentist.id];
        dispatch({ type: 'TOGGLE_FAVORITE', payload: updatedFavorites });
        setFavoriteState(true);
    }
  }

  return (
    <div className="card">
        <div className="card-header">
            <Link to={`/dentist/${dentist.id}`}>
                <img src={avatar} alt="Descripción de la imagen" />
            </Link>
            <button onClick={ onToggleFavorite } className={`favorite-icon ${(favoriteState) ? 'favorite-icon-enable' : ''}`} >&#10084;</button>
        </div>
        <div className="card-footer">
            <div className="name">
                <p>{ dentist.name }</p>
                <p>{ dentist.email }</p>
            </div>
        </div>
    </div>
  );
};
