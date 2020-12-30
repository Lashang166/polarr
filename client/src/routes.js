import React,{ useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';

import Cart from './pages/Cart';
import Home from './pages/Home';
import Product from './pages/Product';
import Shop from './pages/Shop';
import DashboardUser from './pages/Dashboard-User';
import DashboardAdmin from './pages/Dashboard-Admin';
import OrdersList from './pages/OrdersList';
import WhichLists from './pages/WhichLists';
import Checkout from './pages/Checkout';

function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/shop" component={Shop} />
            <Route path="/product/:id" component={Product} />
            <Route path="/cart" component={Cart} />
            <PrivateRoute path="/dashboard" roles={["user","admin"]} component={DashboardUser}/>
            <PrivateRoute path="/checkout" roles={["user","admin"]}  component={Checkout} />
            <PrivateRoute path="/admin" roles={["admin"]} component={DashboardAdmin}/>
        </Switch>
    )
}


export const PrivateRoute = ({component : Component, roles, ...rest})=>{
    const { isAuthenticated, user} = useContext(AuthContext);
    return(
        <Route {...rest} render={props =>{
            if(!isAuthenticated)
                return <Redirect to={{ pathname: '/', 
                                       state : {from : props.location}}}/>
            
            if(!roles.includes(user.role))
                return <Redirect to={{ pathname: '/', 
                                 state : {from : props.location}}}/>
            return <Component {...props}/>
        }}/>
    )
}

export default Routes
