import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Header'
import Footer from './Footer'
import Cart from './Cart'
import Top from './Top'
import Login from './Login'
import Register from './Register'

function App() {
    return(
    <Router>
        <div>
            <Header />
            <Switch>
            <Route path="/" exact component={Top} />
            <Route path="/cart" component={Cart} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            </Switch>
            <Footer />
        </div>
    </Router>
    )
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}