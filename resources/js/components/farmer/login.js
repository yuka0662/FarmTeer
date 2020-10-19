import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './fFooter'
import css from '../../../css/components/App.css'
import Icon from '../../../images/FTlogo.png'

function Login() {
    return (
        <nav>
            <div className="farmer-header">
                <link rel="stylesheet" href={css} />
                <div className="headline">
                    <img src={Icon} alt="ロゴ" />
                </div>
            </div>
            <div class="login-page">
                <div class="form">
                    <form class="login-form">
                        <input type="text" placeholder="username" />
                        <input type="password" placeholder="password" />
                        <button>ログイン</button>
                        <p class="message">アカウントをお持ちでない方はこちら <Link to="/farmteer/register">新規作成</Link></p>
                    </form>
                </div>
            </div>
            <Footer />
        </nav>
    )
}

export default Login;