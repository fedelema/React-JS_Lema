import React, { createContext, useState } from 'react';

const CartContext = createContext ({
    products: [],
    addProduct: () => {},
    removeOneProduct: () => {},
    removeProduct: () => {},
    clearCart: () => {},
    isInCart: () => {},
    getCartQuantity: () => {},
    totalPrice: () => {}
});

export const CartContextProvider = ({children}) => {
    const [productList, setProductList] = useState([]);

    const addProduct = (product) => {
        const repeatedId = productList.findIndex(i => i.id === product.id);
        if (repeatedId !== -1) {
            setProductList(productList.map(p => p.id === product.id ? {...p, cantidad: p.cantidad + product.cantidad} : p));
        }
        else {
            setProductList([product, ...productList]);
        }
    }

    const removeOneProduct = (product) => {
        const repeatedId = productList.findIndex(i => i.id === product.id);
        if (productList[repeatedId].cantidad === 1) {
            setProductList(productList.filter(p => p.id !== product.id));
        }
        else {
            setProductList(productList.map(p => p.id === product.id ? {...p, cantidad: p.cantidad - 1} : p));
        }
    }

    const removeProduct = (product) => {
        const repeatedId = productList.findIndex(i => i.id === product.id);
        if (repeatedId !== -1) {
            setProductList(productList.filter(p => p.id !== product.id));
        }
    }

    const clearCart = () => {
        setProductList([]);
    }

    const isInCart = (id) => {
        return productList.map(p => p.id).indexOf(id) !== -1;
    }

    const getCartQuantity = () => {
        return productList.reduce((total, value) => {
            return total + value.cantidad
        }, 0)
    }

    const totalPrice = () => {
        return productList.reduce((total, value) => {
            return total + value.cantidad * value.precio
        }, 0)
    }

    return (
        <CartContext.Provider value={{
            products: productList,
            addProduct,
            removeOneProduct,
            removeProduct,
            clearCart,
            isInCart,
            getCartQuantity,
            totalPrice
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;