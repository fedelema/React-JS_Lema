import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import './CartItem.css'

function CartItem({items}) {

    const cartC = useContext(CartContext);

    return (
        <div className='cart-item'>
            <img src={items?.img2} alt="" />
            <div className='cart-item-detalle'>
                <h2>{items?.nombre}</h2>
                <p>Precio unitario: $ {items?.precio}</p>
                <p>Cantidad: {items?.cantidad}</p>
                <h4>Precio: $ {items?.precio * items?.cantidad}</h4>
            </div>
            <div>
                <button onClick={() => cartC.removeProduct(items)}>Eliminar</button>
                <button onClick={() => cartC.removeOneProduct(items)}>Eliminar 1 unidad</button>
            </div>
        </div>
    );
}

export default CartItem;