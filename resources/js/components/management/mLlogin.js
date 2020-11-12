import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <nav>
            <div className="login-page">
                <div className="form">
                    <h2 className="general">ログイン</h2>
                    <form className="login-form">
                        <input type="text" placeholder="管理者名" />
                        <input type="password" placeholder="パスワード" />
                        <button className="general-button"><Link to="/management/top">ログイン</Link></button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Login;