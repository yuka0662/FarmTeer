import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Cart from './general/Cart'
import Top from './general/Top'
import Login from './general/Login'
import Register from './general/Register'
import Home from '../components/Home'

function App() {
    return(
    <Router>
        <div>
            <Switch>
            <Route path="/" exact component={Home} /> {/**一番最初に表示されるところ */}
            <Route path="/farmteer/top" component={Top} />
            <Route path="/farmteer/cart" component={Cart} />
            <Route path="/farmteer/login" component={Login} />
            <Route path="/farmteer/register" component={Register} />
            </Switch>
        </div>
    </Router>
    )
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}