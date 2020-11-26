import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import mTop from './management/mTop'
import mLogin from './management/mLlogin'
import Login from './general/Login'
import Register from './general/Register'
import Top from './Top'
import Product from './general/Products'
import Header from './Header'
import Footer from './Footer'
import Guide from './Guide'
import Farmteer from './Farmteer';

{/** 
    farmerのログイン、新規登録申請画面とvolunteerのログイン、新規登録申請画面と管理者のログイン画面のfooter、headerを削除する
    管理者のアカウント名のところをユーザー名に変更する
    ボランティアのカテゴリの入力
 */}

function App() {
    return(
    <Router>
        <Header />
        <div>
            <Switch>
            <Route path="/" exact component={Top} /> {/**一番最初に表示されるところ */}
            <Route path="/management/login" component={mLogin} />
            <Route path="/management/top" component={mTop} />
            <Route path="/farmteer/login" component={Login} />
            <Route path="/farmteer/register" component={Register} />
            <Route path="/products" component={Product} />
            <Route path="/guide" component={Guide} />
            <Route path="/first" component={Farmteer} />
            </Switch>
        </div>
        <Footer />
    </Router>
    )
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}