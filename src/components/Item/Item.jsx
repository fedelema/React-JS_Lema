import React from 'react';
import './Item.css';
/*import './../../images/disenos';*/

function Item({items}) {

    return (
        <div>
            <div className='card'>
                <img src='https://http2.mlstatic.com/D_NQ_NP_899975-MLA49593639948_042022-W.jpg' className='img-taza' alt={items.nombre} />
                <div>
                    <h3>$ {items.precio}</h3>
                    <p>{items.nombre}</p>
                    <button className='ver-detalle' href='#'>Ver detalle</button>
                </div>
            </div>
        </div>
    );
}

export default Item;