import React from 'react';
import { Link } from 'react-router-dom';
import css from '../../../css/components/App.css'
import Footer from './Footer'
import Icon from '../../../images/FTlogo.png'

function Top() {
    return (
        <nav>
            <div className="header">
                <link rel="stylesheet" href={css} />
                <div className="headline">
                    <Link to="/">
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
            </div>
            <h1>TOPページ</h1>
            <Footer />
        </nav>
    )
}

export default Top;