import React, { createContext, useReducer, useState} from 'react';


import cartReducer from './reducers/cartReducer';
import productReducer from './reducers/productReducer';
import toastReducer from './reducers/toastReducer';

export const MainContext = createContext();

function MainContextProvider(props) { 
    const [cart, cartDispatch] = useReducer(cartReducer, {
        cartItems:[], 
        cartCost: 0
    });
    const [products, productDispatch] = useReducer(productReducer,{
        products:[],
        product:null,
        
    });
    const [toast , taostDispatch] = useReducer(toastReducer, {
        open: false,
        msg: ""
    });

    return (
        <MainContext.Provider value={{toast, taostDispatch, cart, cartDispatch, products, productDispatch}}>
            { props.children}
        </MainContext.Provider>
    )



}

export default MainContextProvider;