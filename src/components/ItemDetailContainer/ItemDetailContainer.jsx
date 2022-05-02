import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';

const getItem = () => {
    const myPromise = new Promise ((resolve, reject) => {
        const productos = [
            {id:"T1", nombre:"Deadpool - Taza Cerámica Blanca", img:"taza-avengers-deadpool.jpg", precio:1200, cat:"TAZAS", material: "Cerámica", desc: "Nuestras tazas tienen una altura de 10cm y una capacidad de 400ml. Son aptas para microondas"}, 
            {id:"T2", nombre:"Escudo Capitán América - Taza Cerámica Blanca", img:"taza-avengers-escudo.jpg", precio:1200, cat:"TAZAS", material: "Cerámica", desc: "Nuestras tazas tienen una altura de 10cm y una capacidad de 400ml. Son aptas para microondas"}, 
            {id:"T3", nombre:"Groot - Taza Cerámica Blanca", img:"taza-avengers-groot.jpg", precio:1200, cat:"TAZAS", material: "Cerámica", desc: "Nuestras tazas tienen una altura de 10cm y una capacidad de 400ml. Son aptas para microondas"}, 
            {id:"T4", nombre:"Iron Man - Taza Cerámica Blanca", img:"taza-avengers-ironman.jpg", precio:1200, cat:"TAZAS", material: "Cerámica", desc: "Nuestras tazas tienen una altura de 10cm y una capacidad de 400ml. Son aptas para microondas"}, 
            {id:"T5", nombre:"Avengers Logo - Taza Cerámica Blanca", img:"taza-avengers-logo.jpg", precio:1200, cat:"TAZAS", material: "Cerámica", desc: "Nuestras tazas tienen una altura de 10cm y una capacidad de 400ml. Son aptas para microondas"}
            ];
        setTimeout (() => {
            resolve(productos);
        }, 2000);
    });
    return myPromise;
}

function ItemDetailContainer(props) {

    const [products, setProducts] = useState ([]);

    useEffect (() => {
        getItem()
        .then (res => {
            setProducts(res);
        })
    }, []);
    
    return (
        <div>
            {products.map((item, i) => <ItemDetail items={item} key={item.id} />)}
        </div>
    );
}

export default ItemDetailContainer;