import { useContext } from 'react';
import { Card, ContextGlobal } from '../Components'

export const Home = () => {

  const { state } = useContext( ContextGlobal );
  
  return (
      <div className="container">
          {
              
              state.apiData.map((dentist) => (
                  <Card 
                      key={dentist.id}
                      dentist={dentist}
                  />
              ))
          }
      </div>
  )
}