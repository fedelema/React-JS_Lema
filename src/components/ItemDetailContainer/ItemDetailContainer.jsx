import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query } from 'firebase/firestore';
import ItemDetail from '../ItemDetail/ItemDetail';

function ItemDetailContainer(props) {

    const [item, setItem] = useState ({});
    const {id} = useParams();

    useEffect (() => {
        const db = getFirestore();

        const itemDetailId = query(
            collection(db, 'items'),
        );
        getDocs(itemDetailId).then((snapshot) => {
            setItem(snapshot.docs.map((doc) => ({id:doc.id, ...doc.data()})).filter(prod => prod.id === id)[0]);
        });
    }, [id]);
    
    return (
        <div>
            <ItemDetail items={item} />
        </div>
    );
}

export default ItemDetailContainer;