import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import mTop from './management/mTop'
import mUserDetail from './management/UserDetail'
import mLogin from './management/mLlogin'

function Management() {
    return (
        <Router>
            <Switch>
                <Route path="/management/login" component={mLogin} />
                <Route path="/management/top" component={mTop} />
                <Route path="/management/user/:id" component={mUserDetail} />
            </Switch>
        </Router>
    )
}

export default Management;