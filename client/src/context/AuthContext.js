import React,{ createContext, useReducer, useEffect } from 'react'
import authReducer from './reducers/authReducer';


export const AuthContext = createContext();


const AuthContextProvider = ({ children }) => {
    const [auth, authDispatch] = useReducer(authReducer, {
        user: null,
        isAuthenticated: false,
        isLoaded: true
    })

    useEffect(() => {
        
    }, [])

    return (
        <>
            {!auth.isLoaded ? <h1>Loadding</h1> :
            <AuthContext.Provider value={{auth, authDispatch}}>
                { children }
            </AuthContext.Provider>}
        </>
    )
}


export default AuthContextProvider;