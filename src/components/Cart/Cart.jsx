import React, { useContext } from 'react';
import CartContext from '../../context/CartContext';
import './Cart.css'

function Cart(props) {

    const cartC = useContext(CartContext);

    return (
        <div>
            Cart
        </div>
    );
}

export default Cart;