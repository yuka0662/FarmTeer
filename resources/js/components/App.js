import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Cart from './general/Cart'
import Top from './general/Top'
import fTop from './farmer/top'
import vTop from './volunteer/top'
import mTop from './management/top'
import Login from './general/Login'
import mLogin from './management/login'
import fLogin from './farmer/login'
import vLogin from './volunteer/login'
import Register from './general/Register'
import fRegister from './farmer/register'
import vRegister from './volunteer/register'
import Home from './Home'

{/** farmerのログイン、新規登録申請画面とvolunteerのログイン、新規登録申請画面と管理者のログイン画面のfooter、headerを削除する */}

function App() {
    return(
    <Router>
        <div>
            <Switch>
            <Route path="/" exact component={Home} /> {/**一番最初に表示されるところ */}
            <Route path="/farmteer/top" component={Top} />
            <Route path="/farmteer/cart" component={Cart} />
            <Route path="/farmteer/login" component={Login} />
            <Route path="/management/login" component={mLogin} />
            <Route path="/farmer/login" component={fLogin} />
            <Route path="/volunteer/login" component={vLogin} />
            <Route path="/farmteer/register" component={Register} />
            <Route path="/volunteer/register" component={vRegister} />
            <Route path="/farmer/register" component={fRegister} />
            <Route path="/farmer/top" component={fTop} />
            <Route path="/volunteer/top" component={vTop} />
            <Route path="/management/top" component={mTop} />
            </Switch>
        </div>
    </Router>
    )
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}