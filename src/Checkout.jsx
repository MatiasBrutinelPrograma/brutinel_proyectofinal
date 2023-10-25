import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import { firestore } from './main';


const Checkout = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const { cart } = useContext(CartContext);

    const handleCheckout = () => {
        if (email !== confirmEmail) {
            alert('Los correos electrónicos no coinciden');
            return;
        }

        const db = firestore.collection('orders');
        db.add({
            buyer: {
                name,
                lastName,
                phone,
                email
            },
            items: cart,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            status: 'generada'
        }).then((docRef) => {
            console.log('Order ID: ', docRef.id);
        });
    };

    return (
        <div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre" />
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Apellido" />
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Teléfono" />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <button onClick={handleCheckout}>Realizar compra</button>
        </div>
    );
};

export default Checkout;
