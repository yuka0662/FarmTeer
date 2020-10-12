import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <img src=""/>
            <ul className="nav">
                <Link to="/register">
                    <li className="ml-2">新規登録</li>
                </Link>
                <Link to="/login">
                    <li className="ml-2">ログイン</li>
                </Link>
                <Link to="/cart">
                    <li className="ml-2">カート</li>
                </Link>
            </ul>
        </nav>
    )
}

export default NavBar;