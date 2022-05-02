import React from 'react';
import Item from '../Item/Item';
import './ItemList.css';

function ItemList({items}) {

    return (
        <div className='lista-items'>
            {items.map((item, i) => <Item items={item} key={item.id} />)}
        </div>
    );
}

export default ItemList;