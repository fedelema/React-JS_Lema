import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';
/*import './../../images/disenos';*/

function Item({items}) {

    return (
        <div>
            <div className='card'>
                <img src={items?.img2} className='img-taza' alt={items?.nombre} />
                <div>
                    <h3>$ {items?.precio}</h3>
                    <p>{items?.nombre}</p>
                    <Link to={'/item/' + items?.id}>
                        <button className='ver-detalle' href='#'>Ver detalle</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Item;