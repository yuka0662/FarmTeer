import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../images/FTlogo.png'
import css from '../../../css/components/App.css'

function Login() {
    return (
        <nav>
            <div className="home-header">
                <link rel="stylesheet" href={css} />
                <div className="headline">
                    <Link to="/">
                        <img src={Icon} alt="ロゴ" />
                    </Link>
                </div>
            </div>
            <div className="login-page">
                <div className="form">
                <h2 className="general">ログイン</h2>
                    <form className="login-form">
                        <input type="text" placeholder="管理者名" />
                        <input type="password" placeholder="パスワード" />
                        <button className="general-button">ログイン</button>
                    </form>
                </div>
            </div>
            <div className="home-footer">
                <div className="footer-text">copyright@farmteer all rights reserved.</div>
            </div>
        </nav>
    )
}

export default Login;