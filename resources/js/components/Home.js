import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../images/FTlogo.png'
import css from '../../css/components/general.css'

function Header() {
    return (
        <nav className="home">
            <div className="home-header">
                <link rel="stylesheet" href={css} />
                <div className="headline">
                    <Link to="/farmteer/top">
                        <img src={Icon} alt="ロゴ" />
                    </Link>
                </div>
                <ul className="nav-list">
                    <Link to="/farmteer/top">
                        <li className="nav-list-item">一般WEBサイト</li>
                    </Link>
                    <Link to="/farmer/login">
                        <li className="nav-list-item">農家管理者サイト</li>
                    </Link>
                    <Link to="/volunteer/login">
                        <li className="nav-list-item">ボランティア管理者サイト</li>
                    </Link>
                    <Link to="/management/login">
                        <li className="nav-list-item">運営管理者サイト</li>
                    </Link>
                </ul>
            </div>
            <div className="home-footer">
                <div className="footer-text">copyright@farmteer all rights reserved.</div>
            </div>
        </nav>
    )
}

export default Header;