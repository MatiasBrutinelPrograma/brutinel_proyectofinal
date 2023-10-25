import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = () => {
    alert('Gracias!! En breve nos comunicaremos con usted.');
  };

  return (
    <div className="contact-container">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="input-field"
        placeholder="Nombre"
      />
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        className="input-field"
        placeholder="Apellido"
      />
      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="input-field"
        placeholder="Teléfono"
      />
      <button onClick={handleSubmit} className="contact-button">
        Enviar
      </button>
    </div>
  );
};

export default Contact;
