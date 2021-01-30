import React from 'react';

function mLogin() {
    return (
        <nav>
            <div className="login-page">
                <div className="form">
                    <h2 className="general">ログイン</h2>
                    <form className="login-form">
                        <input type="text" className="name" placeholder="管理者名" />
                        <input type="password" placeholder="パスワード" />
                        <button className="general-button" onClick={onLogin}>ログイン</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default mLogin;