import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'

function agregarAlCarrito() {
    alert("Se agregó el producto al carrito!");
}

function ItemDetail({items}) {
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
                    <ItemCount stock={items?.stock} initial={1} onAdd={agregarAlCarrito} />
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