import React from 'react';
import { Link } from 'react-router-dom';
import css from '../../../css/components/App.css'

function Login() {
    return (
        <nav>
            <link rel="stylesheet" href={css} />
            <div className="login-page">
                <div className="form">
                <h2 className="general">ログイン</h2>
                    <form className="login-form">
                        <input type="text" placeholder="メールアドレス" />
                        <input type="password" placeholder="パスワード" />
                        <Link to="/"><button className="general-button">ログイン</button></Link>
                        <p className="message">アカウントをお持ちでない方はこちら <Link to="/farmteer/register">新規作成</Link></p>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Login;