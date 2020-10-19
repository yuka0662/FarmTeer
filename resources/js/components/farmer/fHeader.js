import React from 'react';
import { css } from '../../../css/components/App.css'
import { Link } from 'react-router-dom';
import Icon from '../../../images/FTlogo.png'

function fHeader() {
    return (
        <nav className="farmer-header">
            <link rel="stylesheet" href={ css } />
            <div className="headline">
                <Link to="/farmer/top">
                    <img src={Icon} alt="ロゴ" />
                </Link>
            </div>
            <ul className="nav-list">
                <li className="nav-list-item"></li>
                <Link to="/farmer/mypage">
                    <li className="nav-list-item">マイページ</li>
                </Link>
            </ul>
        </nav>
    )
}

export default fHeader;