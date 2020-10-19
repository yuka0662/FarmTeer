import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header'
import Footer from './Footer'
import css from '../../../css/components/App.css'

function Register() {
    return (
        <nav>
            <Header />
            <link rel="stylesheet" href={css} />
            <div class="login-page">
                <div class="form">
                    <form class="register-form">
                        <input type="text" placeholder="name" />
                        <input type="password" placeholder="password" />
                        <input type="text" placeholder="email address" />
                        <button>作成</button>
                        <p class="message">アカウントをお持ちの方はこちら <Link to="/farmteer/login">ログイン</Link></p>
                    </form>
                </div>
            </div>
            <Footer />
        </nav>
    )
}

export default Register;