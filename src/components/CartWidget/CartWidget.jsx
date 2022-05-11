import React, { useContext } from 'react';
import CartContext from '../../context/CartContext';
import Carrito from './../../images/carrito.svg'
import './CartWidget.css';

function CartWidget(props) {

    const cartC = useContext(CartContext);

    return (
        <div>
            <button className='boton-carrito'>
                <img className='logo-carrito' src={Carrito} alt="" />
                <p>{cartC.getCartQuantity()} productos</p>
            </button>
        </div>
    );
}

export default CartWidget;