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
                    <Link to="/management/top">
                        <img src={Icon} alt="ロゴ" />
                    </Link>
                </div>
            </div>
            <div class="login-page">
                <div class="form">
                    <form class="login-form">
                        <input type="text" placeholder="username" />
                        <input type="password" placeholder="password" />
                        <button>ログイン</button>
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