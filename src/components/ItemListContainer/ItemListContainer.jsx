import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

function ItemListContainer({greeting}) {

    function agregarAlCarrito() {
        alert("Se agregó el producto al carrito!");
    }

    return (
        <div>
            <p className='item'>{greeting}</p>
            <ItemCount stock={10} initial={0} onAdd={agregarAlCarrito} />
            <ItemList />
        </div>
    );
}

export default ItemListContainer;