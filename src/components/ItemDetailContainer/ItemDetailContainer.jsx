import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDoc, doc, getFirestore } from 'firebase/firestore';
import ItemDetail from '../ItemDetail/ItemDetail';
import Loading from '../Loading/Loading';

function getItem(itemId) {
    const db = getFirestore();
    const itemDetailId = doc(db, 'items', itemId);
    return getDoc(itemDetailId);
}

function ItemDetailContainer(props) {

    const [item, setItem] = useState ({});
    const {id} = useParams();
    const [loading, setLoading] = useState(false);

    useEffect (() => {
        setLoading(true);
        getItem(id)
            .then((snapshot) => {
                setItem({id:snapshot.id, ...snapshot.data()});
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                alert('ERROR');
            });
    }, [id]);
    
    return (
        <div>
            {loading ?
                <Loading /> :
                <ItemDetail items={item} />
            }
        </div>
    );
}

export default ItemDetailContainer;