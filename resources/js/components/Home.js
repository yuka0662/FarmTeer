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
            </div>
            <ul className="">
                <Link to="/farmteer/top">
                    <li className="">一般WEBサイト</li>
                </Link>
                <Link to="/farmer/">
                    <li className="">農家管理者サイト</li>
                </Link>
                <Link to="/volunteer/">
                    <li className="">ボランティア管理者サイト</li>
                </Link>
            </ul>
            <div className="home-footer">
                <div className="footer">copyright@farmteer all rights reserved.</div>
            </div>
        </nav>
    )
}

export default Header;