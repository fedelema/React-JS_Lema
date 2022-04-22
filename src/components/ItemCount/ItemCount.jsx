import React , {useState} from 'react';
import './ItemCount.css';

function ItemCount({stock, initial, onAdd}) {

    const [count, setCount] = useState(initial);

    function handleMas() {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    function handleMenos() {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    return (
        <div>
            <p>Remera blanca</p>
            <div className='contador'>
                <button className='boton-MM' onClick={() => handleMenos()}>-</button>
                <h2 className='cantidad'>{count}</h2>
                <button className='boton-MM' onClick={() => handleMas()}>+</button>
            </div>
            <button className='boton-carrito' onClick={() => (count <= stock) && onAdd()}>Agregar al carrito</button>
        </div>
    );
}


export default ItemCount;