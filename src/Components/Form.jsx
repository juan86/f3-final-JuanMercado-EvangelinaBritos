import { useState } from "react";

export const Form = () => {
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
  });

  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
  };

  const handleSubmit = (e) => {
      e.preventDefault();

      if (formData.fullName.length < 5 || !formData.email.includes('@')) {
        setError('Por favor verifique su información nuevamente');
        setSuccessMessage('');
        return;
      }

      setSuccessMessage(`Gracias ${formData.fullName}, te contactaremos cuanto antes vía mail`);
      setError('');

      setFormData({
        fullName: '',
        email: '',
      });
      setError('');
  };

  return (
    <div className="form-container">
                <h2>Contacto</h2>
                
                <form className="bootstrap-form" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="fullName">Nombre completo:</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </div>
                  <button type="submit">Enviar</button>
                </form>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            </div>
  );
};
