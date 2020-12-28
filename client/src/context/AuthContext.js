import React, { createContext, useState, useEffect } from 'react';
import AuthServices from '../services/AuthServices';

export const AuthContext = createContext();


const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {   
        AuthServices.isAuthenticated()
            .then(data => {
                setUser(data.user);
                setIsAuthenticated(data.isAuthenticated);
                console.log(user, isAuthenticated)
                console.log('auth')
                setIsLoaded(true)
           
            }).catch(err => {
                console.log(err)
                console.log(user, isAuthenticated)
                setIsLoaded(true)
            })
    },[]);

    return (
        <> 
            {!isLoaded ? <h1>Loadding</h1> :
            <AuthContext.Provider  value={{user, setUser, isAuthenticated, setIsAuthenticated}}>
                { children }
            </AuthContext.Provider>}
        </>
    )
}


export default AuthContextProvider;