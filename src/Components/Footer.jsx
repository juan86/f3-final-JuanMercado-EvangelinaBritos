


import instagram from '../assets/images/ico-instagram.png'
import facebook from '../assets/images/ico-facebook.png'
import tiktok from '../assets/images/ico-tiktok.png'
import whatsapp from '../assets/images/ico-whatsapp.png' 


export const Footer = () => {
  return (
      <footer className="footer">
    <div className="container">
    <p>
        <span className="info-label">Integrador:</span> Juan Mercado, Evangelina Britos
      </p>
      <p>
        <span className="info-label">Materia:</span> Front 3
      </p>
      <p>
        <span className="info-label">Carrera:</span> Certified Tech Developer
      </p>
      <img className='imagen-oscura' src={instagram} alt='Intagram'/>

      <img className='imagen-oscura' src={facebook} alt='Facebook'/>

      <img className='imagen-oscura' src={tiktok} alt='Tiktok'/>

      <img className='imagen-oscura' src={whatsapp} alt='Whatsapp'/>
      </div>

     </footer>
  )
}