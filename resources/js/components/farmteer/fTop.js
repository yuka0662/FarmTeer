import React from 'react';
import { Link } from 'react-router-dom';
import src from '../../../images/farmk.jpg';


function fTop() {
    return (
        <div className="farm-top">
            <p>出品者募集</p>
            <div className="farm-seller">
                <h2>生産者様専用受付番号</h2>
                <h1>0120-xxx-xxx</h1>
                <img src={src} className="farmk-size" />
                <div>
                    <Link to="/farmregister"><input className="farmbtn" type="button" value="出品申請" /></Link>
                    <Link to="/farmlogin"><input className="farmbtn" type="button" value="ログイン" /></Link>
                </div>
            </div>
        </div>
    );
}

export default fTop;