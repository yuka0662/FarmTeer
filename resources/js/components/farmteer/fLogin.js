import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <nav>
            <div className="login-page">
                <div className="form">
                    <h2 className="farmer">ログイン</h2>
                    <form className="login-form">
                        <input type="text" placeholder="ユーザー名" />
                        <input type="password" placeholder="パスワード" />
                        <button className="farmer-button"><Link to="/farmer/top">ログイン</Link></button>
                        <p className="farmer-message">アカウントをお持ちでない方はこちら <Link to="/farmer/register">新規登録</Link></p>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Login;