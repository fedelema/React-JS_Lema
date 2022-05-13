import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import './Cart.css'

function Cart(props) {

    const cartC = useContext(CartContext);
    const item = cartC.products;
    console.log(item);

    function finCompra() {
        cartC.clearCart();
        alert('GRACIAS POR TU COMPRA');
    }

    return (
        <div>
            {item.map((item, i) => <CartItem items={item} key={item.id}/>)}
            {cartC.getCartQuantity() > 0 ?
                <div className='div-precio-total'>
                    <h1>Precio total: ${cartC.totalPrice()}</h1>
                    <button className='boton-opciones-compra' onClick={finCompra}>Finalizar compra</button>
                    <Link to='/'><button className='boton-opciones-compra'>Seguir comprando</button></Link>
                </div> :
                <div>
                    <h1>El carrito está vacio</h1>
                    <Link to='/'><button className='boton-opciones-compra'>Volver al inicio</button></Link>
                </div>
            }
        </div>
    );
}

export default Cart;