import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Cart from './pages/Cart';
import Home from './pages/Home';
import Product from './pages/Product';
import Shop from './pages/Shop';

function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/shop" component={Shop} />
            <Route path="/product/:id" component={Product} />
            <Route path="/cart" component={Cart} />
        </Switch>
    )
}

export default Routes
