import React from 'react';
import './ItemDetail.css'

function agregarAlCarrito() {
    alert("Se agregó el producto al carrito!");
}

function ItemDetail({items}) {
    return (
        <div className='div-detalle'>
            <div className='div-img'>
                <img src='https://http2.mlstatic.com/D_NQ_NP_899975-MLA49593639948_042022-W.jpg' alt={items.nombre} />
            </div>
            <div className='div-prod'>
                <div className='div-info'>
                    <p>Nuevo - Producto Personalizado - {items.cat}</p>
                    <h1>{items.nombre}</h1>
                    <h2>$ {items.precio}</h2>
                    <p>{items.detalle}</p>
                    <button className='carrito' onClick={agregarAlCarrito}>Agregar al carrito</button>
                    <h4>Material: {items.material}</h4>
                    <h4>Descripción: {items.desc}</h4>
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