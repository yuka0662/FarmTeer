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