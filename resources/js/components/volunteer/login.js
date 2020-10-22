import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './vFooter'
import css from '../../../css/components/App.css'
import Icon from '../../../images/FTlogo.png'

function Login() {
    return (
        <nav>
            <div className="volunteer-header">
                <link rel="stylesheet" href={css} />
                <div className="headline">
                    <Link to="/">
                        <img src={Icon} alt="ロゴ" />
                    </Link>
                </div>
            </div>
            <link rel="stylesheet" href={css} />
            <div className="login-page">
                <div className="form">
                    <h2 className="volunteer">ログイン</h2>
                    <form className="login-form">
                        <input type="text" placeholder="ユーザー名" />
                        <input type="password" placeholder="パスワード" />
                        <button className="volunteer-button">ログイン</button>
                        <p className="volunteer-message">アカウントをお持ちでない方はこちら <Link to="/volunteer/register">新規登録</Link></p>
                    </form>
                </div>
            </div>
            <Footer />
        </nav>
    )
}

export default Login;