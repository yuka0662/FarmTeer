import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header'
import Footer from './Footer'
import css from '../../../css/components/App.css'

function Login() {
    return (
        <nav>
            <Header />
            <link rel="stylesheet" href={css} />
            <div className="login-page">
                <div className="form">
                <h2 className="general">ログイン</h2>
                    <form className="login-form">
                        <input type="text" placeholder="ユーザー名" />
                        <input type="password" placeholder="パスワード" />
                        <button className="general-button">ログイン</button>
                        <p className="message">アカウントをお持ちでない方はこちら <Link to="/farmteer/register">新規作成</Link></p>
                    </form>
                </div>
            </div>
            <Footer />
        </nav>
    )
}

export default Login;