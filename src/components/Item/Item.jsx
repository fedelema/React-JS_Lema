import React from 'react';
import './Item.css';
/*import './../../images/disenos';*-
/*const imagenes = require.context ('./images', true, '/.jpg$/');*/

function Item({items}) {

    return (
        <div>
            <div className='card'/*class="card" style="width: 18rem;"*/>
                <img src='https://http2.mlstatic.com/D_NQ_NP_899975-MLA49593639948_042022-W.jpg' /*class="card-img-top"*/ className='img-taza' alt={items.nombre} />
                <div /*class="card-body"*/>
                    <h3 /*class="card-title"*/>$ {items.precio}</h3>
                    <p /*class="card-text"*/>{items.nombre}</p>
                    <button className='carrito'/*href="#" class="btn btn-primary"*/>Ver detalle</button>
                </div>
            </div>
        </div>
    );
}

export default Item;