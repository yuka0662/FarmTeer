import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header'
import Footer from '../Footer'
import css from '../../../css/components/App.css'

function Register() {
    return (
        <nav>
            <link rel="stylesheet" href={css} />
            <div className="register-page">
                <div className="form">
                <h2 className="general">ユーザー登録</h2>
                    <form className="register-form-general">
                        <input type="text" placeholder="メールアドレス" />
                        <input type="password" placeholder="パスワード" />
                        <input type="password" placeholder="確認のためもう一度入力してください" />
                        <button className="general-button">登録</button>
                        <p className="message">アカウントをお持ちの方はこちら <Link to="/farmteer/login">ログイン</Link></p>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Register;