import React from 'react';
import Item from '../Item/Item';
import './ItemList.css';

function ItemList(props) {

    const productos = [
        {id:"T1", nombre:"Deadpool - Taza Cerámica Blanca", img:"taza-avengers-deadpool.jpg", precio:1200}, 
        {id:"T2", nombre:"Escudo Capitán América - Taza Cerámica Blanca", img:"taza-avengers-escudo.jpg", precio:1200}, 
        {id:"T3", nombre:"Groot - Taza Cerámica Blanca", img:"taza-avengers-groot.jpg", precio:1200}, 
        {id:"T4", nombre:"Iron Man - Taza Cerámica Blanca", img:"taza-avengers-ironman.jpg", precio:1200}, 
        {id:"T5", nombre:"Avengers Logo - Taza Cerámica Blanca", img:"taza-avengers-logo.jpg", precio:1200}
        ];

    const invocarProd = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos);
            }, 2000);
        });
    };

    invocarProd()
        .then((res) => console.log(res))
        .catch((err) => console.log(err))

    return (
        <div className='lista-items'>
            {productos.map((item, i) => <Item items={item} key={item.id} />)}
        </div>
    );
}

export default ItemList;