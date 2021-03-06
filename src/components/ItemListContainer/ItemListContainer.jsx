import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore';
import ItemList from '../ItemList/ItemList';
import Loading from '../Loading/Loading';
import './ItemListContainer.css';

function ItemListContainer({greeting}) {

    const [products, setProducts] = useState ([]);
    const {categoriaId} = useParams();
    const [loading, setLoading] = useState(false);

    useEffect (() => {
        setLoading(true);
        const db = getFirestore();
        const itemsCollection = collection(db, 'items');

        // PARA AGREGAR ITEMS A FIRESTORE
        /* const nuevoItem = {}
        addDoc(itemsCollection, nuevoItem); */

        getDocs(itemsCollection)
            .then((snapshot) => {
                categoriaId ? 
                setProducts(snapshot.docs.map((doc) => ({id:doc.id, ...doc.data()})).filter(prod => prod.categoria === categoriaId)) :
                setProducts(snapshot.docs.map((doc) => ({id:doc.id, ...doc.data()})))
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                alert('ERROR');
            });
    }, [categoriaId]);

    return (
        <div>
            {loading ?
                <Loading /> :
                <ItemList items={products} />
            }
        </div>
    );
}

export default ItemListContainer;


// CODIGO QUE NO USO

//LLAMADA DE PRODUCTOS CON PROMISE
/* const getProducts = (categoria) => {
    const myPromise = new Promise ((resolve, reject) => {
        let precio_tazas = 1200;
        let precio_remeras_blancas = 1500;
        let precio_remeras_grises = 1500;
        let precio_remeras_ranglan = 1750;
        const productos = [
            {id:"T1", nombre:"Deadpool - Taza Cerámica Blanca", img:"taza-avengers-deadpool.jpg", precio: precio_tazas, stock:5, categoria:"TAZAS", material:"Cerámica", descripcion:"Nuestras tazas tienen una altura de 10cm y una capacidad de 400ml. Son aptas para microondas", img2:'https://http2.mlstatic.com/D_NQ_NP_899975-MLA49593639948_042022-W.jpg'}, 
            {id:"T2", nombre:"Escudo Capitán América - Taza Cerámica Blanca", img:"taza-avengers-escudo.jpg", precio: precio_tazas, stock:5, categoria:"TAZAS", material:"Cerámica", descripcion:"Nuestras tazas tienen una altura de 10cm y una capacidad de 400ml. Son aptas para microondas", img2:'https://http2.mlstatic.com/D_NQ_NP_899975-MLA49593639948_042022-W.jpg'}, 
            {id:"T3", nombre:"Groot - Taza Cerámica Blanca", img:"taza-avengers-groot.jpg", precio: precio_tazas, stock:5, categoria:"TAZAS", material:"Cerámica", descripcion:"Nuestras tazas tienen una altura de 10cm y una capacidad de 400ml. Son aptas para microondas"}, 
            {id:"T4", nombre:"Iron Man - Taza Cerámica Blanca", img:"taza-avengers-ironman.jpg", precio: precio_tazas, stock:5, categoria:"TAZAS", material:"Cerámica", descripcion:"Nuestras tazas tienen una altura de 10cm y una capacidad de 400ml. Son aptas para microondas"}, 
            {id:"T5", nombre:"Avengers Logo - Taza Cerámica Blanca", img:"taza-avengers-logo.jpg", precio: precio_tazas, stock:5, categoria:"TAZAS", material:"Cerámica", descripcion:"Nuestras tazas tienen una altura de 10cm y una capacidad de 400ml. Son aptas para microondas"},
            {id:"T6", nombre:"Spiderman - Taza Cerámica Blanca", img:"taza-avengers-spiderman.jpg", precio: precio_tazas, stock:5, categoria:"TAZAS", material:"Cerámica", descripcion:"Nuestras tazas tienen una altura de 10cm y una capacidad de 400ml. Son aptas para microondas"}, 
            {id:"T7", nombre:"Mickey 1 - Taza Cerámica Blanca", img:"taza-disney-1.jpg", precio: precio_tazas, stock:5, categoria:"TAZAS", material:"Cerámica", descripcion:"Nuestras tazas tienen una altura de 10cm y una capacidad de 400ml. Son aptas para microondas"}, 
            {id:"T8", nombre:"Mickey 2 - Taza Cerámica Blanca", img:"taza-disney-2.jpg", precio: precio_tazas, stock:5, categoria:"TAZAS", material:"Cerámica", descripcion:"Nuestras tazas tienen una altura de 10cm y una capacidad de 400ml. Son aptas para microondas"}, 
            {id:"T9", nombre:"Friends - Taza Cerámica Blanca", img:"taza-friends.jpg", precio: precio_tazas, stock:5, categoria:"TAZAS", material:"Cerámica", descripcion:"Nuestras tazas tienen una altura de 10cm y una capacidad de 400ml. Son aptas para microondas"}, 
            {id:"T10", nombre:"Daenerys GOT - Taza Cerámica Blanca", img:"taza-got-1.jpg", precio: precio_tazas, stock:5, categoria:"TAZAS", material:"Cerámica", descripcion:"Nuestras tazas tienen una altura de 10cm y una capacidad de 400ml. Son aptas para microondas"}, 
            {id:"T11", nombre:"Jon Snow GOT - Taza Cerámica Blanca", img:"taza-got-2.jpg", precio: precio_tazas, stock:5, categoria:"TAZAS", material:"Cerámica", descripcion:"Nuestras tazas tienen una altura de 10cm y una capacidad de 400ml. Son aptas para microondas"}, 
            {id:"T12", nombre:"Trono de Hierro GOT - Taza Cerámica Blanca", img:"taza-got-3.jpg", precio: precio_tazas, stock:5, categoria:"TAZAS", material:"Cerámica", descripcion:"Nuestras tazas tienen una altura de 10cm y una capacidad de 400ml. Son aptas para microondas"}, 
            {id:"T13", nombre:"Not Today GOT - Taza Cerámica Blanca", img:"taza-got-4.jpg", precio: precio_tazas, stock:5, categoria:"TAZAS", material:"Cerámica", descripcion:"Nuestras tazas tienen una altura de 10cm y una capacidad de 400ml. Son aptas para microondas"}, 
            {id:"T14", nombre:"Stark Logo GOT - Taza Cerámica Blanca", img:"taza-got-5.jpg", precio: precio_tazas, stock:5, categoria:"TAZAS", material:"Cerámica", descripcion:"Nuestras tazas tienen una altura de 10cm y una capacidad de 400ml. Son aptas para microondas"}, 
            {id:"T15", nombre:"Looney Tunes - Taza Cerámica Blanca", img:"taza-looneytunes-1.jpg", precio: precio_tazas, stock:5, categoria:"TAZAS", material:"Cerámica", descripcion:"Nuestras tazas tienen una altura de 10cm y una capacidad de 400ml. Son aptas para microondas"}, 
            {id:"T16", nombre:"Tune Squad - Taza Cerámica Blanca", img:"taza-looneytunes-2.jpg", precio: precio_tazas, stock:5, categoria:"TAZAS", material:"Cerámica", descripcion:"Nuestras tazas tienen una altura de 10cm y una capacidad de 400ml. Son aptas para microondas"}, 
            {id:"T17", nombre:"Paw Patrol - Taza Cerámica Blanca", img:"taza-pawpatrol.jpg", precio: precio_tazas, stock:5, categoria:"TAZAS", material:"Cerámica", descripcion:"Nuestras tazas tienen una altura de 10cm y una capacidad de 400ml. Son aptas para microondas"}, 
            {id:"T18", nombre:"Peaky Blinders - Taza Cerámica Blanca", img:"taza-peaky.jpg", precio: precio_tazas, stock:5, categoria:"TAZAS", material:"Cerámica", descripcion:"Nuestras tazas tienen una altura de 10cm y una capacidad de 400ml. Son aptas para microondas"}, 
            {id:"T19", nombre:"Homero Simpsons 1 - Taza Cerámica Blanca", img:"taza-simpsons-1.jpg", precio: precio_tazas, stock:5, categoria:"TAZAS", material:"Cerámica", descripcion:"Nuestras tazas tienen una altura de 10cm y una capacidad de 400ml. Son aptas para microondas"}, 
            {id:"T20", nombre:"Homero Simpsons 2 - Taza Cerámica Blanca", img:"taza-simpsons-2.jpg", precio: precio_tazas, stock:5, categoria:"TAZAS", material:"Cerámica", descripcion:"Nuestras tazas tienen una altura de 10cm y una capacidad de 400ml. Son aptas para microondas"},
            {id:"RB1", nombre:"Mickey 1 - Remera Blanca Hombre/Unisex", img:"blanca-h-disney-1.jpg", precio: precio_remeras_blancas, stock:5, categoria:"REMERAS_BLANCAS", material:"Modal Premium Blanco", descripcion:"Nuestras remeras contienen un 70% poliéster y 30% algodón, haciendo que el dibujo se adhiera mejor a la tela mientras mantiene su suavidad.", img2:'https://ih1.redbubble.net/image.2452761945.2688/ssrco,slim_fit_t_shirt,mens,fafafa:ca443f4786,front,square_product,600x600.jpg'}, 
            {id:"RB2", nombre:"Mickey 2 - Remera Blanca Hombre/Unisex", img:"blanca-h-disney-2.jpg", precio: precio_remeras_blancas, stock:5, categoria:"REMERAS_BLANCAS", material:"Modal Premium Blanco", descripcion:"Nuestras remeras contienen un 70% poliéster y 30% algodón, haciendo que el dibujo se adhiera mejor a la tela mientras mantiene su suavidad.", img2:'https://ih1.redbubble.net/image.2452761945.2688/ssrco,slim_fit_t_shirt,mens,fafafa:ca443f4786,front,square_product,600x600.jpg'},
            {id:"RB3", nombre:"Mickey 3 - Remera Blanca Hombre/Unisex", img:"blanca-h-disney-3.jpg", precio: precio_remeras_blancas, stock:5, categoria:"REMERAS_BLANCAS", material:"Modal Premium Blanco", descripcion:"Nuestras remeras contienen un 70% poliéster y 30% algodón, haciendo que el dibujo se adhiera mejor a la tela mientras mantiene su suavidad."}, 
            {id:"RB4", nombre:"Pato Lucas - Remera Blanca Hombre/Unisex", img:"blanca-h-looneytunes-1.jpg", precio: precio_remeras_blancas, stock:5, categoria:"REMERAS_BLANCAS", material:"Modal Premium Blanco", descripcion:"Nuestras remeras contienen un 70% poliéster y 30% algodón, haciendo que el dibujo se adhiera mejor a la tela mientras mantiene su suavidad."}, 
            {id:"RB5", nombre:"Taz - Remera Blanca Hombre/Unisex", img:"blanca-h-looneytunes-2.jpg", precio: precio_remeras_blancas, stock:5, categoria:"REMERAS_BLANCAS", material:"Modal Premium Blanco", descripcion:"Nuestras remeras contienen un 70% poliéster y 30% algodón, haciendo que el dibujo se adhiera mejor a la tela mientras mantiene su suavidad."}, 
            {id:"RB6", nombre:"Silvestre - Remera Blanca Hombre/Unisex", img:"blanca-h-looneytunes-3.jpg", precio: precio_remeras_blancas, stock:5, categoria:"REMERAS_BLANCAS", material:"Modal Premium Blanco", descripcion:"Nuestras remeras contienen un 70% poliéster y 30% algodón, haciendo que el dibujo se adhiera mejor a la tela mientras mantiene su suavidad."}, 
            {id:"RB7", nombre:"Marvin - Remera Blanca Hombre/Unisex", img:"blanca-h-looneytunes-4.jpg", precio: precio_remeras_blancas, stock:5, categoria:"REMERAS_BLANCAS", material:"Modal Premium Blanco", descripcion:"Nuestras remeras contienen un 70% poliéster y 30% algodón, haciendo que el dibujo se adhiera mejor a la tela mientras mantiene su suavidad."}, 
            {id:"RB8", nombre:"Rick y Morty - Remera Blanca Hombre/Unisex", img:"blanca-h-rick-1.jpg", precio: precio_remeras_blancas, stock:5, categoria:"REMERAS_BLANCAS", material:"Modal Premium Blanco", descripcion:"Nuestras remeras contienen un 70% poliéster y 30% algodón, haciendo que el dibujo se adhiera mejor a la tela mientras mantiene su suavidad."}, 
            {id:"RB9", nombre:"Meeseeks - Remera Blanca Hombre/Unisex", img:"blanca-h-rick-2.jpg", precio: precio_remeras_blancas, stock:5, categoria:"REMERAS_BLANCAS", material:"Modal Premium Blanco", descripcion:"Nuestras remeras contienen un 70% poliéster y 30% algodón, haciendo que el dibujo se adhiera mejor a la tela mientras mantiene su suavidad."}, 
            {id:"RB10", nombre:"Mickey 1 - Remera Blanca Mujer", img:"blanca-m-disney-1.jpg", precio: precio_remeras_blancas, stock:5, categoria:"REMERAS_BLANCAS", material:"Modal Premium Blanco", descripcion:"Nuestras remeras contienen un 70% poliéster y 30% algodón, haciendo que el dibujo se adhiera mejor a la tela mientras mantiene su suavidad."}, 
            {id:"RB11", nombre:"Mickey 2 - Remera Blanca Mujer", img:"blanca-m-disney-2.jpg", precio: precio_remeras_blancas, stock:5, categoria:"REMERAS_BLANCAS", material:"Modal Premium Blanco", descripcion:"Nuestras remeras contienen un 70% poliéster y 30% algodón, haciendo que el dibujo se adhiera mejor a la tela mientras mantiene su suavidad."}, 
            {id:"RB12", nombre:"Minnie - Remera Blanca Mujer", img:"blanca-m-disney-3.jpg", precio: precio_remeras_blancas, stock:5, categoria:"REMERAS_BLANCAS", material:"Modal Premium Blanco", descripcion:"Nuestras remeras contienen un 70% poliéster y 30% algodón, haciendo que el dibujo se adhiera mejor a la tela mientras mantiene su suavidad."}, 
            {id:"RB13", nombre:"Bugs Bunny - Remera Blanca Mujer", img:"blanca-m-looneytunes-1.jpg", precio: precio_remeras_blancas, stock:5, categoria:"REMERAS_BLANCAS", material:"Modal Premium Blanco", descripcion:"Nuestras remeras contienen un 70% poliéster y 30% algodón, haciendo que el dibujo se adhiera mejor a la tela mientras mantiene su suavidad."}, 
            {id:"RB14", nombre:"Tweety - Remera Blanca Mujer", img:"blanca-m-looneytunes-2.jpg", precio: precio_remeras_blancas, stock:5, categoria:"REMERAS_BLANCAS", material:"Modal Premium Blanco", descripcion:"Nuestras remeras contienen un 70% poliéster y 30% algodón, haciendo que el dibujo se adhiera mejor a la tela mientras mantiene su suavidad."}, 
            {id:"RB15", nombre:"Minions 1 - Remera Blanca Mujer", img:"blanca-m-minions-1.jpg", precio: precio_remeras_blancas, stock:5, categoria:"REMERAS_BLANCAS", material:"Modal Premium Blanco", descripcion:"Nuestras remeras contienen un 70% poliéster y 30% algodón, haciendo que el dibujo se adhiera mejor a la tela mientras mantiene su suavidad."}, 
            {id:"RB16", nombre:"Minions 2 - Remera Blanca Mujer", img:"blanca-m-minions-2.jpg", precio: precio_remeras_blancas, stock:5, categoria:"REMERAS_BLANCAS", material:"Modal Premium Blanco", descripcion:"Nuestras remeras contienen un 70% poliéster y 30% algodón, haciendo que el dibujo se adhiera mejor a la tela mientras mantiene su suavidad."}, 
            {id:"RB17", nombre:"Pickle Rick - Remera Blanca Mujer", img:"blanca-m-rick-1.jpg", precio: precio_remeras_blancas, stock:5, categoria:"REMERAS_BLANCAS", material:"Modal Premium Blanco", descripcion:"Nuestras remeras contienen un 70% poliéster y 30% algodón, haciendo que el dibujo se adhiera mejor a la tela mientras mantiene su suavidad."}, 
            {id:"RB18", nombre:"Rick y Morty - Remera Blanca Mujer", img:"blanca-m-rick-2.jpg", precio: precio_remeras_blancas, stock:5, categoria:"REMERAS_BLANCAS", material:"Modal Premium Blanco", descripcion:"Nuestras remeras contienen un 70% poliéster y 30% algodón, haciendo que el dibujo se adhiera mejor a la tela mientras mantiene su suavidad."},
            {id:"RG1", nombre:"Mickey 1 - Remera Gris Hombre/Unisex", img:"gris-h-disney-1.jpg", precio: precio_remeras_grises, stock:5, categoria:"REMERAS_GRISES", material:"Modal Premium - Gris Melange", descripcion:"Nuestras remeras contienen un 70% poliéster y 30% algodón, haciendo que el dibujo se adhiera mejor a la tela mientras mantiene su suavidad.", img2:'https://ih1.redbubble.net/image.2976458885.7831/ssrco,lightweight_sweatshirt,mens,heather_grey_lightweight_raglan_sweatshirt,front,square_product,x600-bg,f8f8f8.jpg'}, 
            {id:"RG2", nombre:"Mickey 2 - Remera Gris Hombre/Unisex", img:"gris-h-disney-2.jpg", precio: precio_remeras_grises, stock:5, categoria:"REMERAS_GRISES", material:"Modal Premium - Gris Melange", descripcion:"Nuestras remeras contienen un 70% poliéster y 30% algodón, haciendo que el dibujo se adhiera mejor a la tela mientras mantiene su suavidad.", img2:'https://ih1.redbubble.net/image.2976458885.7831/ssrco,lightweight_sweatshirt,mens,heather_grey_lightweight_raglan_sweatshirt,front,square_product,x600-bg,f8f8f8.jpg'}, 
            {id:"RG3", nombre:"Peaky Blinders 1 - Remera Gris Hombre/Unisex", img:"gris-h-peaky-1.jpg", precio: precio_remeras_grises, stock:5, categoria:"REMERAS_GRISES", material:"Modal Premium - Gris Melange", descripcion:"Nuestras remeras contienen un 70% poliéster y 30% algodón, haciendo que el dibujo se adhiera mejor a la tela mientras mantiene su suavidad."}, 
            {id:"RG4", nombre:"Peaky Blinders 2 - Remera Gris Hombre/Unisex", img:"gris-h-peaky-2.jpg", precio: precio_remeras_grises, stock:5, categoria:"REMERAS_GRISES", material:"Modal Premium - Gris Melange", descripcion:"Nuestras remeras contienen un 70% poliéster y 30% algodón, haciendo que el dibujo se adhiera mejor a la tela mientras mantiene su suavidad."}, 
            {id:"RG5", nombre:"Peaky Blinders 3 - Remera Gris Hombre/Unisex", img:"gris-h-peaky-3.jpg", precio: precio_remeras_grises, stock:5, categoria:"REMERAS_GRISES", material:"Modal Premium - Gris Melange", descripcion:"Nuestras remeras contienen un 70% poliéster y 30% algodón, haciendo que el dibujo se adhiera mejor a la tela mientras mantiene su suavidad."}, 
            {id:"RG6", nombre:"Peaky Blinders 4 - Remera Gris Hombre/Unisex", img:"gris-h-peaky-4.jpg", precio: precio_remeras_grises, stock:5, categoria:"REMERAS_GRISES", material:"Modal Premium - Gris Melange", descripcion:"Nuestras remeras contienen un 70% poliéster y 30% algodón, haciendo que el dibujo se adhiera mejor a la tela mientras mantiene su suavidad."}, 
            {id:"RG7", nombre:"Stranger Things - Remera Gris Hombre/Unisex", img:"gris-h-strangerthings-1.jpg", precio: precio_remeras_grises, stock:5, categoria:"REMERAS_GRISES", material:"Modal Premium - Gris Melange", descripcion:"Nuestras remeras contienen un 70% poliéster y 30% algodón, haciendo que el dibujo se adhiera mejor a la tela mientras mantiene su suavidad."}, 
            {id:"RG8", nombre:"Toy Story 1 - Remera Gris Hombre/Unisex", img:"gris-h-toystory-1.jpg", precio: precio_remeras_grises, stock:5, categoria:"REMERAS_GRISES", material:"Modal Premium - Gris Melange", descripcion:"Nuestras remeras contienen un 70% poliéster y 30% algodón, haciendo que el dibujo se adhiera mejor a la tela mientras mantiene su suavidad."}, 
            {id:"RG9", nombre:"Toy Story 2 - Remera Gris Hombre/Unisex", img:"gris-h-toystory-2.jpg", precio: precio_remeras_grises, stock:5, categoria:"REMERAS_GRISES", material:"Modal Premium - Gris Melange", descripcion:"Nuestras remeras contienen un 70% poliéster y 30% algodón, haciendo que el dibujo se adhiera mejor a la tela mientras mantiene su suavidad."}, 
            {id:"RG10", nombre:"Mickey 1 - Remera Gris Mujer", img:"gris-m-disney-1.jpg", precio: precio_remeras_grises, stock:5, categoria:"REMERAS_GRISES", material:"Modal Premium - Gris Melange", descripcion:"Nuestras remeras contienen un 70% poliéster y 30% algodón, haciendo que el dibujo se adhiera mejor a la tela mientras mantiene su suavidad."}, 
            {id:"RG11", nombre:"Mickey 2 - Remera Gris Mujer", img:"gris-m-disney-2.jpg", precio: precio_remeras_grises, stock:5, categoria:"REMERAS_GRISES", material:"Modal Premium - Gris Melange", descripcion:"Nuestras remeras contienen un 70% poliéster y 30% algodón, haciendo que el dibujo se adhiera mejor a la tela mientras mantiene su suavidad."}, 
            {id:"RG12", nombre:"Pato Lucas - Remera Gris Mujer", img:"gris-m-looneytunes-1.jpg", precio: precio_remeras_grises, stock:5, categoria:"REMERAS_GRISES", material:"Modal Premium - Gris Melange", descripcion:"Nuestras remeras contienen un 70% poliéster y 30% algodón, haciendo que el dibujo se adhiera mejor a la tela mientras mantiene su suavidad."}, 
            {id:"RG13", nombre:"Stitch 1 - Remera Gris Mujer", img:"gris-m-stitch-1.jpg", precio: precio_remeras_grises, stock:5, categoria:"REMERAS_GRISES", material:"Modal Premium - Gris Melange", descripcion:"Nuestras remeras contienen un 70% poliéster y 30% algodón, haciendo que el dibujo se adhiera mejor a la tela mientras mantiene su suavidad."}, 
            {id:"RG14", nombre:"Stitch 2 - Remera Gris Mujer", img:"gris-m-stitch-2.jpg", precio: precio_remeras_grises, stock:5, categoria:"REMERAS_GRISES", material:"Modal Premium - Gris Melange", descripcion:"Nuestras remeras contienen un 70% poliéster y 30% algodón, haciendo que el dibujo se adhiera mejor a la tela mientras mantiene su suavidad."}, 
            {id:"RG15", nombre:"Stranger Things 1 - Remera Gris Mujer", img:"gris-m-strangerthings-1.jpg", precio: precio_remeras_grises, stock:5, categoria:"REMERAS_GRISES", material:"Modal Premium - Gris Melange", descripcion:"Nuestras remeras contienen un 70% poliéster y 30% algodón, haciendo que el dibujo se adhiera mejor a la tela mientras mantiene su suavidad."}, 
            {id:"RG16", nombre:"Stranger Things 2 - Remera Gris Mujer", img:"gris-m-strangerthings-2.jpg", precio: precio_remeras_grises, stock:5, categoria:"REMERAS_GRISES", material:"Modal Premium - Gris Melange", descripcion:"Nuestras remeras contienen un 70% poliéster y 30% algodón, haciendo que el dibujo se adhiera mejor a la tela mientras mantiene su suavidad."}, 
            {id:"RG17", nombre:"Stranger Things 3 - Remera Gris Mujer", img:"gris-m-strangerthings-3.jpg", precio: precio_remeras_grises, stock:5, categoria:"REMERAS_GRISES", material:"Modal Premium - Gris Melange", descripcion:"Nuestras remeras contienen un 70% poliéster y 30% algodón, haciendo que el dibujo se adhiera mejor a la tela mientras mantiene su suavidad."}, 
            {id:"RG18", nombre:"Toy Story - Remera Gris Mujer", img:"gris-m-toystory-1.jpg", precio: precio_remeras_grises, stock:5, categoria:"REMERAS_GRISES", material:"Modal Premium - Gris Melange", descripcion:"Nuestras remeras contienen un 70% poliéster y 30% algodón, haciendo que el dibujo se adhiera mejor a la tela mientras mantiene su suavidad."},
            {id:"RR1", nombre:"Batman 1 - Remera Ranglan Hombre/Unisex", img:"ranglan-h-batman-1.jpg", precio: precio_remeras_ranglan, stock:5, categoria:"REMERAS_RANGLAN", material:"Modal Premium - Ranglan Blanco con mangas negras", descripcion:"Nuestras remeras contienen un 70% poliéster y 30% algodón, haciendo que el dibujo se adhiera mejor a la tela mientras mantiene su suavidad.", img2:'https://ih1.redbubble.net/image.2997681766.7948/ra,raglan,x1860,white_black,front-c,330,336,600,600-bg,f8f8f8.jpg'}, 
            {id:"RR2", nombre:"Batman 2 - Remera Ranglan Hombre/Unisex", img:"ranglan-h-batman-2.jpg", precio: precio_remeras_ranglan, stock:5, categoria:"REMERAS_RANGLAN", material:"Modal Premium - Ranglan Blanco con mangas negras", descripcion:"Nuestras remeras contienen un 70% poliéster y 30% algodón, haciendo que el dibujo se adhiera mejor a la tela mientras mantiene su suavidad.", img2:'https://ih1.redbubble.net/image.2997681766.7948/ra,raglan,x1860,white_black,front-c,330,336,600,600-bg,f8f8f8.jpg'}, 
            {id:"RR3", nombre:"Guason - Remera Ranglan Hombre/Unisex", img:"ranglan-h-batman-3.jpg", precio: precio_remeras_ranglan, stock:5, categoria:"REMERAS_RANGLAN", material:"Modal Premium - Ranglan Blanco con mangas negras", descripcion:"Nuestras remeras contienen un 70% poliéster y 30% algodón, haciendo que el dibujo se adhiera mejor a la tela mientras mantiene su suavidad."}, 
            {id:"RR4", nombre:"Friends 1 - Remera Ranglan Hombre/Unisex", img:"ranglan-h-friends-1.jpg", precio: precio_remeras_ranglan, stock:5, categoria:"REMERAS_RANGLAN", material:"Modal Premium - Ranglan Blanco con mangas negras", descripcion:"Nuestras remeras contienen un 70% poliéster y 30% algodón, haciendo que el dibujo se adhiera mejor a la tela mientras mantiene su suavidad."}, 
            {id:"RR5", nombre:"Friends 2 - Remera Ranglan Hombre/Unisex", img:"ranglan-h-friends-2.jpg", precio: precio_remeras_ranglan, stock:5, categoria:"REMERAS_RANGLAN", material:"Modal Premium - Ranglan Blanco con mangas negras", descripcion:"Nuestras remeras contienen un 70% poliéster y 30% algodón, haciendo que el dibujo se adhiera mejor a la tela mientras mantiene su suavidad."}, 
            {id:"RR6", nombre:"Tune Squad - Remera Ranglan Hombre/Unisex", img:"ranglan-h-looneytunes-1.jpg", precio: precio_remeras_ranglan, stock:5, categoria:"REMERAS_RANGLAN", material:"Modal Premium - Ranglan Blanco con mangas negras", descripcion:"Nuestras remeras contienen un 70% poliéster y 30% algodón, haciendo que el dibujo se adhiera mejor a la tela mientras mantiene su suavidad."}, 
            {id:"RR7", nombre:"Rick y Morty 1 - Remera Ranglan Hombre/Unisex", img:"ranglan-h-rick-1.jpg", precio: precio_remeras_ranglan, stock:5, categoria:"REMERAS_RANGLAN", material:"Modal Premium - Ranglan Blanco con mangas negras", descripcion:"Nuestras remeras contienen un 70% poliéster y 30% algodón, haciendo que el dibujo se adhiera mejor a la tela mientras mantiene su suavidad."}, 
            {id:"RR8", nombre:"Rick y Morty 2 - Remera Ranglan Hombre/Unisex", img:"ranglan-h-rick-2.jpg", precio: precio_remeras_ranglan, stock:5, categoria:"REMERAS_RANGLAN", material:"Modal Premium - Ranglan Blanco con mangas negras", descripcion:"Nuestras remeras contienen un 70% poliéster y 30% algodón, haciendo que el dibujo se adhiera mejor a la tela mientras mantiene su suavidad."}, 
            {id:"RR9", nombre:"Los Simpsons 1 - Remera Ranglan Hombre/Unisex", img:"ranglan-h-simpsons-1.jpg", precio: precio_remeras_ranglan, stock:5, categoria:"REMERAS_RANGLAN", material:"Modal Premium - Ranglan Blanco con mangas negras", descripcion:"Nuestras remeras contienen un 70% poliéster y 30% algodón, haciendo que el dibujo se adhiera mejor a la tela mientras mantiene su suavidad."}, 
            {id:"RR10", nombre:"Los Simpsons 2 - Remera Ranglan Hombre/Unisex", img:"ranglan-h-simpsons-2.jpg", precio: precio_remeras_ranglan, stock:5, categoria:"REMERAS_RANGLAN", material:"Modal Premium - Ranglan Blanco con mangas negras", descripcion:"Nuestras remeras contienen un 70% poliéster y 30% algodón, haciendo que el dibujo se adhiera mejor a la tela mientras mantiene su suavidad."}, 
            {id:"RR11", nombre:"Friends 1 - Remera Ranglan Mujer", img:"ranglan-m-friends-1.jpg", precio: precio_remeras_ranglan, stock:5, categoria:"REMERAS_RANGLAN", material:"Modal Premium - Ranglan Blanco con mangas negras", descripcion:"Nuestras remeras contienen un 70% poliéster y 30% algodón, haciendo que el dibujo se adhiera mejor a la tela mientras mantiene su suavidad."}, 
            {id:"RR12", nombre:"Friends 2 - Remera Ranglan Mujer", img:"ranglan-m-friends-2.jpg", precio: precio_remeras_ranglan, stock:5, categoria:"REMERAS_RANGLAN", material:"Modal Premium - Ranglan Blanco con mangas negras", descripcion:"Nuestras remeras contienen un 70% poliéster y 30% algodón, haciendo que el dibujo se adhiera mejor a la tela mientras mantiene su suavidad."}, 
            {id:"RR13", nombre:"Friends 3 - Remera Ranglan Mujer", img:"ranglan-m-friends-3.jpg", precio: precio_remeras_ranglan, stock:5, categoria:"REMERAS_RANGLAN", material:"Modal Premium - Ranglan Blanco con mangas negras", descripcion:"Nuestras remeras contienen un 70% poliéster y 30% algodón, haciendo que el dibujo se adhiera mejor a la tela mientras mantiene su suavidad."}, 
            {id:"RR14", nombre:"Friends 4 - Remera Ranglan Mujer", img:"ranglan-m-friends-4.jpg", precio: precio_remeras_ranglan, stock:5, categoria:"REMERAS_RANGLAN", material:"Modal Premium - Ranglan Blanco con mangas negras", descripcion:"Nuestras remeras contienen un 70% poliéster y 30% algodón, haciendo que el dibujo se adhiera mejor a la tela mientras mantiene su suavidad."}, 
            {id:"RR15", nombre:"Rick y Morty 1 - Remera Ranglan Mujer", img:"ranglan-m-rick-1.jpg", precio: precio_remeras_ranglan, stock:5, categoria:"REMERAS_RANGLAN", material:"Modal Premium - Ranglan Blanco con mangas negras", descripcion:"Nuestras remeras contienen un 70% poliéster y 30% algodón, haciendo que el dibujo se adhiera mejor a la tela mientras mantiene su suavidad."}, 
            {id:"RR16", nombre:"Rick y Morty 2 - Remera Ranglan Mujer", img:"ranglan-m-rick-2.jpg", precio: precio_remeras_ranglan, stock:5, categoria:"REMERAS_RANGLAN", material:"Modal Premium - Ranglan Blanco con mangas negras", descripcion:"Nuestras remeras contienen un 70% poliéster y 30% algodón, haciendo que el dibujo se adhiera mejor a la tela mientras mantiene su suavidad."}, 
            {id:"RR17", nombre:"Los Simpsons - Remera Ranglan Mujer", img:"ranglan-m-simpsons-1.jpg", precio: precio_remeras_ranglan, stock:5, categoria:"REMERAS_RANGLAN", material:"Modal Premium - Ranglan Blanco con mangas negras", descripcion:"Nuestras remeras contienen un 70% poliéster y 30% algodón, haciendo que el dibujo se adhiera mejor a la tela mientras mantiene su suavidad."},
            ];
        const filtrado = categoria ? productos.filter(prod => prod.categoria == categoria) : productos;
        setTimeout (() => {
            resolve(filtrado);
        }, 2000);
    });
    return myPromise;
} */
/*     useEffect (() => {
        setLoading(true);
        getProducts(categoriaId)
        .then (res => {
            setProducts(res);
            setLoading(false);
        })
        .catch (err => {
            console.log(err);
            alert('ERROR');
        });
    }, [categoriaId]); */

// LOADING
// import Loading from '../Loading/Loading';
// const [loading, setLoading] = useState(false);
    /*     if (loading) {
        return (<Loading />)
    }
    else {
    return (
        <div>
            <ItemList items={products} />
        </div>
    );
    } */