import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import Carrito from './../../images/carrito.svg'
import './CartWidget.css';
import RakunNegro from './../../images/rakun-negro.jpeg'

function CartWidget(props) {

    const cartC = useContext(CartContext);

    if (cartC.getCartQuantity() > 0) {
        return (
            <div className='nav-carrito'>
                <Link to='/cart'>
                    <button className='boton-carrito'>
                        <img className='logo-carrito' src={Carrito} alt="" />
                        <p>{cartC.getCartQuantity()} productos</p>
                    </button>
                </Link>
                <button className='boton-vaciar-carrito' onClick={() => cartC.clearCart()}>Vaciar carrito</button>
            </div>
        );
    }
    else {
        return (
            <NavLink to='/'><img className='nav-logo' src={RakunNegro} alt="" /></NavLink>
        );
    }
}

export default CartWidget;