import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <ul className="nav">
                <Link to="/login">
                    <li className="ml-2">ログイン</li>
                </Link>
                <Link to="/cart">
                    <li className="ml-2">カート</li>
                </Link>
                <Link to="/mypage">
                    <li className="ml-2">マイページ</li>
                </Link>
            </ul>
        </nav>
    )
}

export default NavBar;