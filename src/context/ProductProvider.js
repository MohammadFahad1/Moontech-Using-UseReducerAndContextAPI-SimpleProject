import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

const PRODUCT_CONTEXT = createContext();

const ProductProvider = ({ children }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    const value = { data, setData };
    return <PRODUCT_CONTEXT.Provider value={value}>
        {children}
    </PRODUCT_CONTEXT.Provider>
};

export const useProducts = () => {
    const products = useContext(PRODUCT_CONTEXT);
    return products;
}

export default ProductProvider;