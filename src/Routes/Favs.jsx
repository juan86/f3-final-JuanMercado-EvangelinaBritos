import { useContext } from 'react';
import { Card, ContextGlobal} from '../Components';

export const Favs = () => {

  const { state } = useContext( ContextGlobal );

  const favoriteDentists = state.apiData.filter((dentist) => state.favorites.includes(dentist.id));

  return (
    <div 
        className="container">
        {
            (favoriteDentists.length < 1)
            ?  (
                <h1>No hay Favoritos</h1>
            ) 
            : (
                favoriteDentists.map((dentist) => (
                    <Card 
                        key={dentist.id}
                        dentist={dentist}
                    />
                ))
            )
        }
    </div>
  );

};
