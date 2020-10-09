import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './NavBar'
import Login from './login'
import Mypage from './mypage'
import Cart from './cart'
import Top from './Top'

function App() {
    return(
    <Router>
        <div>
            <NavBar />
            <Switch>
            <Route path="/" exact component={Top} />
            <Route path="/login" component={Login} />
            <Route path="/mypage" component={Mypage} />
            <Route path="/cart" component={Cart} />
            </Switch>
        </div>
    </Router>
    )
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}