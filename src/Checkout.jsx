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
            {/* Aquí puedes agregar campos de entrada para recoger la información del comprador */}
            {/* También puedes agregar una lista de los productos en el carrito */}
            {/* Asegúrate de validar la información antes de llamar a handleCheckout */}
            <button onClick={handleCheckout}>Realizar compra</button>
        </div>
    );
};

export default Checkout;
