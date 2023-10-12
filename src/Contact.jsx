import React, { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = () => {
        alert('Gracias!! En Breve nos comunicaremos con Ud.');
    };

    return (
        <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre" />
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Apellido" />
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Teléfono" />
            <button onClick={handleSubmit}>Enviar</button>
        </div>
    );
};

export default Contact;
