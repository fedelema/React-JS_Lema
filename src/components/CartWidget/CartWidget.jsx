import React from 'react';
import Carrito from './../../images/carrito.svg'
import './CartWidget.css';

function CartWidget(props) {
    return (
        <div>
            <button className='boton-carrito'>
                <img className='logo-carrito' src={Carrito} alt="" />
            </button>
        </div>
    );
}

export default CartWidget;