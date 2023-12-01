import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ContextGlobal } from '../Components';
import avatar from '../assets/images/doctor.jpg'


export const Detail = () => {

  const { id } = useParams();
  const { state } = useContext( ContextGlobal );

  console.log(id);
  
  const  [ dentist ]  =  state.apiData.filter( dentist => dentist.id == id);

  return (
    <div className='content-card'>
      <div className="detail-card">
        <div className="detail-card-content">
          <div className="left-column">
            <img src={avatar} alt="Avatar" />
          </div>
          <div className="right-column">
            <h3>{dentist.name}</h3>
            <p><span>Email:</span> {dentist.email}</p>
            <p><span>Phone:</span> {dentist.phone}</p>
            <p><span>Website:</span> {dentist.website}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
