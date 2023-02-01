import React, { useContext } from 'react';
import { useReducer } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';
import { actionType } from '../state/ProductState/actionTypes';
import { initialState, productReducer } from '../state/ProductState/ProductReducer';

const PRODUCT_CONTEXT = createContext();

const ProductProvider = ({ children }) => {

    const [state, dispatch] = useReducer(productReducer, initialState);

    useEffect(() => {
        dispatch({ type: actionType.FETCHING_START });
        fetch('products.json')
            .then(res => res.json())
            .then(data => dispatch({ type: actionType.FETCHING_SUCCESS, payload: data }))
            .catch(() => {
                dispatch({ type: actionType.FETCHING_ERROR })
            })
    }, [])

    const value = { state, dispatch };
    return <PRODUCT_CONTEXT.Provider value={value}>
        {children}
    </PRODUCT_CONTEXT.Provider>
};

export const useProducts = () => {
    const products = useContext(PRODUCT_CONTEXT);
    return products;
}

export default ProductProvider;