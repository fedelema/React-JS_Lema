import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'

function ItemDetail({items}) {

    const cartC = useContext(CartContext);
    
    function addHandler (quantityToAdd) {
        cartC.addProduct({cantidad: quantityToAdd, ...items});
    }

    return (
        <div className='div-detalle'>
            <div className='div-img'>
                <img src={items?.img2} alt={items?.nombre} />
            </div>
            <div className='div-prod'>
                <div className='div-info'>
                    <p>Nuevo - Producto Personalizado - {items?.categoria}</p>
                    <h1>{items?.nombre}</h1>
                    <h2>$ {items?.precio}</h2>
                    <p>{items?.detalle}</p>
                    <div>
                        <div>
                            {cartC.isInCart(items.id) === true ?
                                <Link to='/cart'><button className='boton-opciones-compra'>Terminar compra</button></Link> :
                                <ItemCount stock={items?.stock} initial={1} onAdd={addHandler} />
                            }
                        </div>
                        {/* <button className='boton-opciones-compra' onClick={() => console.log(cartC.products)}>Imprimir carrito</button> */}
                        {cartC.isInCart(items.id) === true ?
                            <div>
                                <button className='boton-opciones-compra' onClick={() => cartC.removeProduct(items)}>Quitar producto</button>
                                <button className='boton-opciones-compra' onClick={() => cartC.removeOneProduct(items)}>Quitar 1 unidad</button>
                            </div> :
                            ''
                        }
                        <Link to='/'><button className='boton-opciones-compra'>Seguir comprando</button></Link>
                    </div>
                    <h4>Material: {items?.material}</h4>
                    <h4>Descripción: {items?.descripcion}</h4>
                </div>
                <div className='div-general'>
                    <p>Envíos por moto a CABA ($300) y alrededores<br />Consultar precio por zona</p>
                    <hr />
                    <p>Retiro gratis por Parque Chacabuco</p>
                    <hr />
                    <p>Stock disponible</p>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;