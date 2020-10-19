import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../images/FTlogo.png'
import css from '../../../css/components/App.css'

function Header() {
    return (
        <nav className="header">
            <link rel="stylesheet" href={css} />
            <div className="headline">
                <Link to="/farmteer/top">
                    <img src={Icon} alt="ロゴ" />
                </Link>
            </div>
            <ul className="nav-list">
                <Link to="/farmteer/register">
                    <li className="nav-list-item">新規登録</li>
                </Link>
                <Link to="/farmteer/login">
                    <li className="nav-list-item">ログイン</li>
                </Link>
                <Link to="/farmteer/cart">
                    <li className="nav-list-item">カート</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Header;