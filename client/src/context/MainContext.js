import React, { createContext, useReducer} from 'react';


import cartReducer from './reducers/cartReducer';
import productReducer from './reducers/productReducer';

export const MainContext = createContext();

function MainContextProvider(props) { 
    const [cart, cartDispatch] = useReducer(cartReducer, {
        cartItems:[], 
        cartCost: 0
    });
    const [products, productDispatch] = useReducer(productReducer,{
        products:[],
        product:null,
        
    })

    return (
        <MainContext.Provider value={{cart, cartDispatch, products, productDispatch}}>
            { props.children}
        </MainContext.Provider>
    )



}

export default MainContextProvider;