import React from 'react';
import { css } from '../../../css/components/volunteer.css'
import { Link } from 'react-router-dom';
import Icon from '../../../images/FTlogo.png'

function vHeader() {
    return (
        <nav className="header">
            <link rel="stylesheet" href={ css } />
            <div className="headline">
                <Link to="/volunteer/top">
                    <img src={Icon} alt="ロゴ" />
                </Link>
            </div>
            <ul className="nav-list">
                <li className="nav-list-item"></li>
                <Link to="/volunteer/login">
                    <li className="nav-list-item">ログイン</li>
                </Link>
                <Link to="/volunteer/cart">
                    <li className="nav-list-item">カート</li>
                </Link>
                <Link to="/volunteer/mypage">
                    <li className="nav-list-item">マイページ</li>
                </Link>
            </ul>
        </nav>
    )
}

export default vHeader;