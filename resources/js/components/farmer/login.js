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
                    <Link to="/">
                        <img src={Icon} alt="ロゴ" />
                    </Link>
                </div>
            </div>
            <div className="login-page">
                <div className="form">
                    <h2 className="farmer">ログイン</h2>
                    <form className="login-form">
                        <input type="text" placeholder="ユーザー名" />
                        <input type="password" placeholder="パスワード" />
                        <button className="farmer-button">ログイン</button>
                        <p className="farmer-message">アカウントをお持ちでない方はこちら <Link to="/farmer/register">新規登録</Link></p>
                    </form>
                </div>
            </div>
            <Footer />
        </nav>
    )
}

export default Login;