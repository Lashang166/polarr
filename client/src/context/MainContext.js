import React, { createContext, useReducer} from 'react';


import cartReducer from './reducers/cartReducer';








export const MainContext = createContext();

function MainContextProvider(props) {
    const [cart, cartDispatch] = useReducer(cartReducer, {
        cartItems:[],
        cartCost: 0
    });

    return (
        <MainContext.Provider value={{cart, cartDispatch}}>
            { props.children}
        </MainContext.Provider>
    )



}

export default MainContextProvider;