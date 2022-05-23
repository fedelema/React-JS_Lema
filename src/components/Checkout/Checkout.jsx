import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import Loading from '../Loading/Loading';
import './Checkout.css';


function Checkout(props) {
    
    const {products, totalPrice, clearCart} = useContext(CartContext);
    const [orderID, setOrderID] = useState();
    const [loading, setLoading] = useState(false);

    const [cliente, setCliente] = useState ({
        Nombre:'',
        Email:'',
        Telefono:''
    });
    
    const {Nombre, Email, Telefono} = cliente;

    const handleInputChange = (e) => {
        setCliente ({
            ...cliente, [e.target.name]:e.target.value
        }) 
    }

    const setOrder = async(data) => {
        setLoading(true);
        try {
            const db = getFirestore();
            const orderCollection = collection(db, "orders");
            const order = await addDoc(orderCollection, data);
            setOrderID(order.id);
            clearCart();
            setLoading(false);
        }
        catch (error) {
            console.log(error);
            alert('ERROR');
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const fecha = new Date();
        const items = products.map(e => { return {id: e.id, producto: e.nombre, precio: e.precio, cantidad: e.cantidad} });
        const total = totalPrice();
        const data = {cliente, fecha, items, total};
        console.log(data);
        setOrder(data);
    }

    return (
        <div>
            {loading ? <Loading /> :
                orderID ?
                    <div>
                        <h2>¡Compra finalizada con éxito!</h2>
                        <p>Gracias por elegirnos.</p>
                        <p>Su código de compra es: {orderID}</p>
                        <Link to='/'><button className='boton-opciones-compra'>Volver al inicio</button></Link>
                    </div> :
                    <div>
                        <h2>Completar los siguientes datos:</h2>
                        <form onSubmit={handleSubmit} className='form-checkout'>
                            <input type='text' name='Nombre' placeholder='Nombre completo' value={Nombre} 
                                onChange={handleInputChange} required /><br />
                            <input type='email' name='Email' placeholder='E-mail' value={Email} 
                                onChange={handleInputChange} required /><br />
                            <input type='number' name='Telefono' placeholder='Telefono' value={Telefono} 
                                onChange={handleInputChange} required /><br />
                            <input type='submit' value='Finalizar compra' className='boton-finalizar-compra' />
                        </form>
                    </div>
            }
        </div>
    );
}

export default Checkout;